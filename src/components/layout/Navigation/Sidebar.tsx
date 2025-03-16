import { entryAnimation } from "@/animations";
import { childrenProps } from "@/constants/types";
import useSidebar from "@/hooks/useSidebar";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import HamburgerMenu from "./HamburgerMenu";

const Sidebar: React.FC<childrenProps> = ({ children }) => {
  const { isSidebarOpen } = useSidebar();

  return (
    <>
      <HamburgerMenu />
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            className="mt-16 w-90 -z-10 h-screen bg-5/70 backdrop-blur-xl fixed -top-16 right-0 pt-16 border border-4 xl:hidden"
            variants={entryAnimation()}
            initial="from_right"
            animate="default"
            exit="from_right">
            <ul className="flex flex-col gap-2 p-4">{children}</ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
