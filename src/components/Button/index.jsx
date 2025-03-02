import { motion } from "framer-motion";
import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Button = ({ children, typeBtn = "default" }) => {
  const [hover, setHover] = useState("w-12");
  const modelos = {
    default: "p-6 bg-gradient-to-t from-3 to-4",
    download:
      "bg-6/10 before:h-full before:relative before:p-[2px] before:rounded-lg before:w-fit before:bg-gradient-to-r before:from-4 before:via-2 before:to-4 before:relactive",
    redirect: "pl-6 pr-14 bg-6/10",
  };

  return (
    <motion.button
      className={`${modelos[typeBtn]} shadow-3 shadow-md cursor-pointer relative flex justify-between rounded-full items-center h-12 border-[1px] border-2 overflow-hidden`}
      variants={{
        initial: { scale: 1 },
        hover: { scale: 1.05 },
      }}
      whileHover="hover"
      whileTap={{ scale: 0.9 }}
      initial="initial"
      transition={{ duration: 0.5 }}
      onHoverStart={() => setHover("w-full")}
      onHoverEnd={() => setHover("w-12")}>
      <h3 className="z-10">{children}</h3>
      {typeBtn !== "default" && (
        <div
          className={`${hover} absolute transition-all duration-500 flex justify-end items-center top-0 right-0 h-full rounded-full bg-gradient-to-l from-2 to-4 px-4`}>
          <FaLongArrowAltRight className="text-5" />
        </div>
      )}
    </motion.button>
  );
};

export default Button;
