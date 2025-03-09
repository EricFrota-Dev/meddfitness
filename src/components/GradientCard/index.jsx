import React from "react";
import { scaleBounceAnimation } from "../../constants/animations";
import { motion } from "motion/react";

const GradientCard = ({ children, bordered, className }) => {
  return (
    <motion.div
      className={`${className} p-[2px] rounded-xl ${
        bordered && "bg-gradient-to-r from-4 via-2 to-4"
      }`}
      variants={scaleBounceAnimation()}
      initial="small"
      whileInView="default">
      <div
        className={`${
          bordered ? "bg-5" : "radial-gradient"
        } rounded-xl p-8 border border-transparent bg-clip-padding h-full flex flex-col justify-center items-center `}>
        {children}
      </div>
    </motion.div>
  );
};

export default GradientCard;
