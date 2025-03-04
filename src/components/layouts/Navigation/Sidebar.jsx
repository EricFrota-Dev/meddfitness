import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import { entryAnimation } from "../../../constants/animations";
import HamburgerMenu from "./HamburgerMenu";

const Sidebar = ({ onClick, sidebarState, children }) => {
  return (
    <>
      <AnimatePresence>
        {sidebarState && (
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
      <HamburgerMenu onClick={onClick} sidebarState={sidebarState} />
    </>
  );
};

export default Sidebar;
