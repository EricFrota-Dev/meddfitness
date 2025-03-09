import { Link } from "react-router-dom";
import { images } from "../../../constants";
import { motion } from "motion/react";
import { entryAnimation } from "../../../constants/animations";

const Logo = () => {
  return (
    <>
      <motion.div
        variants={entryAnimation()}
        initial="from_left"
        animate="default"
        className="-z-20">
        <Link to="/meddfitness/">
          <img className="h-[50px]" src={images[0].url} alt={images[0].name} />
        </Link>
      </motion.div>
    </>
  );
};

export default Logo;
