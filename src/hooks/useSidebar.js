import { create } from "zustand";

// Criando o estado global
const useSidebar = create((set) => ({
  isSidebarOpen: false, // Estado inicial da sidebar

  toggle: () => set(({ isSidebarOpen }) => ({ isSidebarOpen: !isSidebarOpen })),

  close: () => set(() => ({ isSidebarOpen: false })),

  open: () => set(() => ({ isSidebarOpen: true })),
}));

export default useSidebar;
