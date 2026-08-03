import { GeneratedRoadmap, RoadmapMetadata, Milestone, Project, LearningResource, CareerTip, RoadmapNode, RoadmapEdge } from "@/features/roadmaps/types";
import { ReactFlowGraph, RoadmapRenderService } from "./roadmap-render.service";
import { BlobStorageService } from "@/services/storage/blob-storage.service";

export const ROADMAP_SCHEMA_VERSION = "1.0.0";

export interface RoadmapArtifact {
  version: string;
  metadata: RoadmapMetadata;
  summary: string;
  milestones: Milestone[];
  projects: Project[];
  resources: LearningResource[];
  careerTips: CareerTip[];
  logicalGraph: {
    nodes: RoadmapNode[];
    edges: RoadmapEdge[];
  };
  reactFlow: ReactFlowGraph;
}

export class RoadmapArtifactService {
  /**
   * Builds a versioned roadmap artifact complete with pre-calculated React Flow positions.
   */
  public static buildArtifact(generated: GeneratedRoadmap): RoadmapArtifact {
    const reactFlow = RoadmapRenderService.convertToReactFlow(
      generated.logicalGraph.nodes,
      generated.logicalGraph.edges
    );

    return {
      version: ROADMAP_SCHEMA_VERSION,
      metadata: generated.metadata,
      summary: generated.summary,
      milestones: generated.milestones,
      projects: generated.projects,
      resources: generated.resources,
      careerTips: generated.careerTips,
      logicalGraph: generated.logicalGraph,
      reactFlow,
    };
  }

  /**
   * Uploads versioned roadmap artifact to Blob Storage.
   */
  public static async uploadArtifact(
    roadmapId: string,
    artifact: RoadmapArtifact
  ): Promise<string> {
    const path = `roadmaps/${roadmapId}.json`;
    return BlobStorageService.uploadJson(path, artifact);
  }

  /**
   * Validates version and schema integrity of a retrieved artifact.
   */
  public static validateArtifact(artifact: unknown): artifact is RoadmapArtifact {
    if (!artifact || typeof artifact !== "object") return false;
    const a = artifact as Partial<RoadmapArtifact>;

    return Boolean(
      a.version &&
      a.metadata &&
      a.logicalGraph &&
      a.reactFlow &&
      Array.isArray(a.milestones)
    );
  }
}
