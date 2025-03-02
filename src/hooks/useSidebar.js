import { create } from "zustand";

// Criando o estado global
const useSidebar = create((set) => ({
  isSidebarOpen: false, // Estado inicial da sidebar

  toggle: () => set(({ isSidebarOpen }) => ({ isSidebarOpen: !isSidebarOpen })),

  close: () => set(() => ({ isNavOppen: false })),

  open: () => set(() => ({ isNavOppen: true })),
}));

export default useSidebar;
