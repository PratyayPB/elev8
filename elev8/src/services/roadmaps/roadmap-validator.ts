import { GeneratedRoadmapSchema } from "./roadmap-schema";
import { GeneratedRoadmap } from "@/features/roadmaps/types";

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  data?: GeneratedRoadmap;
}

export class RoadmapValidator {
  /**
   * Validates raw JSON string or object against schema and topological/graph constraints.
   */
  public static validate(rawInput: unknown): ValidationResult {
    const errors: string[] = [];

    let parsedData: unknown = rawInput;
    if (typeof rawInput === "string") {
      try {
        // Strip markdown code fences if LLM accidentally included them
        const cleaned = rawInput
          .replace(/^```json\s*/i, "")
          .replace(/^```\s*/i, "")
          .replace(/\s*```$/i, "")
          .trim();
        parsedData = JSON.parse(cleaned);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "JSON parse failure";
        return {
          isValid: false,
          errors: [`Invalid JSON output: ${message}`],
        };
      }
    }

    // Schema Validation via Zod
    const schemaResult = GeneratedRoadmapSchema.safeParse(parsedData);
    if (!schemaResult.success) {
      const zodErrors = schemaResult.error.errors.map(
        (e) => `[${e.path.join(".")}] ${e.message}`
      );
      return {
        isValid: false,
        errors: zodErrors,
      };
    }

    const roadmap = schemaResult.data as GeneratedRoadmap;

    // Logical Graph Validation
    const { nodes, edges } = roadmap.logicalGraph;

    if (!nodes || nodes.length === 0) {
      errors.push("Logical graph cannot be empty: must contain at least one node.");
    }

    // Check for Duplicate Node IDs
    const nodeIds = new Set<string>();
    for (const node of nodes) {
      if (nodeIds.has(node.id)) {
        errors.push(`Duplicate node ID found: "${node.id}".`);
      }
      nodeIds.add(node.id);
    }

    // Check for Duplicate Edge IDs and Missing Node References
    const edgeIds = new Set<string>();
    for (const edge of edges) {
      if (edgeIds.has(edge.id)) {
        errors.push(`Duplicate edge ID found: "${edge.id}".`);
      }
      edgeIds.add(edge.id);

      if (!nodeIds.has(edge.source)) {
        errors.push(
          `Edge "${edge.id}" references missing source node ID "${edge.source}".`
        );
      }
      if (!nodeIds.has(edge.target)) {
        errors.push(
          `Edge "${edge.id}" references missing target node ID "${edge.target}".`
        );
      }
    }

    // Cycle Detection (Detect circular references using DFS / Kahn's algorithm)
    if (nodeIds.size > 0 && errors.length === 0) {
      const hasCycle = this.detectCircularDependency(Array.from(nodeIds), edges);
      if (hasCycle) {
        errors.push("Circular dependencies detected in the logical roadmap graph.");
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
      data: errors.length === 0 ? roadmap : undefined,
    };
  }

  /**
   * Helper algorithm to detect cycles in directed graph.
   */
  private static detectCircularDependency(
    nodes: string[],
    edges: Array<{ source: string; target: string }>
  ): boolean {
    const adj = new Map<string, string[]>();
    nodes.forEach((id) => adj.set(id, []));
    edges.forEach((edge) => {
      if (adj.has(edge.source)) {
        adj.get(edge.source)!.push(edge.target);
      }
    });

    const visited = new Map<string, number>(); // 0: unvisited, 1: visiting, 2: visited

    const dfs = (u: string): boolean => {
      visited.set(u, 1);
      const neighbors = adj.get(u) || [];

      for (const v of neighbors) {
        const state = visited.get(v) || 0;
        if (state === 1) {
          return true; // Cycle found
        }
        if (state === 0) {
          if (dfs(v)) return true;
        }
      }

      visited.set(u, 2);
      return false;
    };

    for (const node of nodes) {
      if ((visited.get(node) || 0) === 0) {
        if (dfs(node)) return true;
      }
    }

    return false;
  }
}
