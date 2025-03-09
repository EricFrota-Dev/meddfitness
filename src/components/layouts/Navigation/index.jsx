import { entryAnimation } from "../../../constants/animations";
import Logo from "./Logo";
import Navibar from "./Navbar";
import { motion } from "motion/react";

const Navegation = () => {
  return (
    <>
      <nav className="bg-5 justify-between z-10 after:-z-20 h-14 md:h-18 w-full fixed flex items-center pr-6 pl-6 after:absolute after:-bottom-4 after:left-0 after:w-full after:h-[16px] after:bg-gradient-to-r after:from-5 after:via-2 after:to-5">
        <Logo />
        <motion.div
          variants={entryAnimation()}
          initial="from_right"
          animate="default">
          <Navibar />
        </motion.div>
      </nav>
    </>
  );
};

export default Navegation;
