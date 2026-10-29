import { create } from "zustand";

interface DashboardState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));
