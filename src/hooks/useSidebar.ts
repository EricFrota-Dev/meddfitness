import { create } from "zustand";

type SidebarState = {
  isSidebarOpen: boolean;
  toggle: () => void;
  close: () => void;
  open: () => void;
};

const useSidebar = create<SidebarState>((set) => ({
  isSidebarOpen: false,

  toggle: () =>
    set(({ isSidebarOpen }) => ({
      isSidebarOpen: !isSidebarOpen,
    })),

  close: () => set(() => ({ isSidebarOpen: false })),

  open: () => set(() => ({ isSidebarOpen: true })),
}));

export default useSidebar;
