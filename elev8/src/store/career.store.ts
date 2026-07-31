import { create } from "zustand";

interface CareerState {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const useCareerStore = create<CareerState>((set) => ({
  activeTab: "overview",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
