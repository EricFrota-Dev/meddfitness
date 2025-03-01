import { create } from "zustand";
import { useEffect } from "react";

// Criando o estado global
const useSidebarStore = create((set) => ({
  isSidebarOpen: false, // Estado inicial da sidebar

  toggle: () => set(({ isSidebarOpen }) => ({ isSidebarOpen: !isSidebarOpen })),

  close: () => set(() => ({ isNavOppen: false })),

  open: () => set(() => ({ isNavOppen: true })),
}));

// Adicionando a lógica para fechar a sidebar ao redimensionar a tela
const useSidebar = () => {
  const { close } = useSidebarStore();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        close(); // Fecha a sidebar se a tela for grande
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [close]);

  return useSidebarStore();
};

export default useSidebar;
