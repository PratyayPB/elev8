import { create } from "zustand";

interface RoadmapState {
  selectedNodeId: string | null;
  setSelectedNodeId: (id: string | null) => void;
}

export const useRoadmapStore = create<RoadmapState>((set) => ({
  selectedNodeId: null,
  setSelectedNodeId: (id) => set({ selectedNodeId: id }),
}));
