import dagre from "dagre";
import { RoadmapNode, RoadmapEdge } from "@/features/roadmaps/types";

export interface PositionedNode extends RoadmapNode {
  position: {
    x: number;
    y: number;
  };
  width: number;
  height: number;
}

export class LayoutService {
  private static DEFAULT_NODE_WIDTH = 240;
  private static DEFAULT_NODE_HEIGHT = 90;

  /**
   * Computes deterministic top-to-bottom layout for logical roadmap graph using Dagre.
   */
  public static computeLayout(
    nodes: RoadmapNode[],
    edges: RoadmapEdge[],
    direction: "TB" | "LR" = "TB"
  ): { nodes: PositionedNode[]; edges: RoadmapEdge[] } {
    const g = new dagre.graphlib.Graph();
    g.setGraph({
      rankdir: direction,
      nodesep: 60,
      ranksep: 90,
      marginx: 40,
      marginy: 40,
    });
    g.setDefaultEdgeLabel(() => ({}));

    // Add nodes to Dagre
    nodes.forEach((node) => {
      g.setNode(node.id, {
        width: this.DEFAULT_NODE_WIDTH,
        height: this.DEFAULT_NODE_HEIGHT,
      });
    });

    // Add edges to Dagre
    edges.forEach((edge) => {
      g.setEdge(edge.source, edge.target);
    });

    // Run layout algorithm
    dagre.layout(g);

    // Extract calculated positions
    const positionedNodes: PositionedNode[] = nodes.map((node) => {
      const dagreNode = g.node(node.id);
      return {
        ...node,
        width: this.DEFAULT_NODE_WIDTH,
        height: this.DEFAULT_NODE_HEIGHT,
        position: {
          x: dagreNode ? dagreNode.x - this.DEFAULT_NODE_WIDTH / 2 : 0,
          y: dagreNode ? dagreNode.y - this.DEFAULT_NODE_HEIGHT / 2 : 0,
        },
      };
    });

    return {
      nodes: positionedNodes,
      edges,
    };
  }
}
