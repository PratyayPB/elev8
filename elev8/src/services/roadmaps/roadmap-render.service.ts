import { RoadmapNode, RoadmapEdge } from "@/features/roadmaps/types";
import { LayoutService, PositionedNode } from "./layout.service";

export interface ReactFlowNode {
  id: string;
  type: string;
  position: { x: number; y: number };
  data: {
    label: string;
    title: string;
    description: string;
    category?: string;
    estimatedHours?: number;
    nodeType: string;
  };
  draggable?: boolean;
  selectable?: boolean;
}

export interface ReactFlowEdge {
  id: string;
  source: string;
  target: string;
  type?: string;
  animated?: boolean;
}

export interface ReactFlowGraph {
  nodes: ReactFlowNode[];
  edges: ReactFlowEdge[];
}

export class RoadmapRenderService {
  /**
   * Converts logical graph nodes and edges into React Flow compatible node and edge structures.
   */
  public static convertToReactFlow(
    logicalNodes: RoadmapNode[],
    logicalEdges: RoadmapEdge[]
  ): ReactFlowGraph {
    const { nodes: positionedNodes } = LayoutService.computeLayout(logicalNodes, logicalEdges);

    const reactFlowNodes: ReactFlowNode[] = positionedNodes.map((node: PositionedNode) => ({
      id: node.id,
      type: "customSkillNode", // Custom custom React Flow node component
      position: node.position,
      data: {
        label: node.title,
        title: node.title,
        description: node.description,
        category: node.category,
        estimatedHours: node.estimatedHours,
        nodeType: node.type,
      },
      draggable: false, // Read-only enforcement
      selectable: true,
    }));

    const reactFlowEdges: ReactFlowEdge[] = logicalEdges.map((edge) => ({
      id: edge.id || `e-${edge.source}-${edge.target}`,
      source: edge.source,
      target: edge.target,
      type: "smoothstep",
      animated: true,
    }));

    return {
      nodes: reactFlowNodes,
      edges: reactFlowEdges,
    };
  }
}
