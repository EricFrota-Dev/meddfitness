import React from "react";
import { motion } from "motion/react";
import { simpleCardProps } from "@/constants/types";
import { entryAnimation } from "@/animations";

const PerfilCard: React.FC<simpleCardProps> = ({ title, src, desc }) => {
  return (
    <motion.div
      className="flex flex-col mt-6 rounded-xl overflow-hidden w-33 md:w-fit max-w-60"
      variants={entryAnimation()}
      initial="from_left"
      whileInView="default">
      <div className="">
        <img src={src} alt={src} />
      </div>
      <div className="flex text-center flex-col items-center justify-center h-full bg-2 text-6 p-2">
        <h2>{title}</h2>
        {desc && <p>{desc}</p>}
      </div>
    </motion.div>
  );
};

export default PerfilCard;
