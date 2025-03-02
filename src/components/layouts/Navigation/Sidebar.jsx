import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import { entryMoveAnimation } from "../../../constants/animations";
import HamburgerMenu from "./HamburgerMenu";

const Sidebar = ({ onClick, sidebarState, children }) => {
  return (
    <>
      <HamburgerMenu onClick={onClick} sidebarState={sidebarState} />
      <AnimatePresence>
        {sidebarState && (
          <motion.aside
            className="mt-16 w-90 h-screen bg-5/50 backdrop-blur-md fixed -top-16 right-0 pt-16 border border-4 xl:hidden"
            variants={entryMoveAnimation()}
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
