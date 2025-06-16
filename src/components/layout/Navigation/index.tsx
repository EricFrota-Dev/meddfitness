import { entryAnimation } from "@/animations";
import Logo from "./Logo";
import { motion } from "motion/react";
import Navibar from "./Navbar";

const Navegation = () => {
  return (
    <>
      <nav className="bg-6 justify-between z-10 h-20 md:h-22 w-[100vw] fixed flex flex-wrap items-center pr-6 pl-6">
        <Logo />
        <motion.div
          variants={entryAnimation()}
          initial="from_right"
          animate="default"
        >
          <Navibar />
        </motion.div>
      </nav>
    </>
  );
};

export default Navegation;
