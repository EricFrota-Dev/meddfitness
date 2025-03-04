import { motion } from "framer-motion";
import { useState } from "react";
import { FaLongArrowAltRight, FaFileDownload } from "react-icons/fa";
import { hoverAnimation } from "../../constants/animations";

const Button = ({ children, typeBtn = "default" }) => {
  const [hover, setHover] = useState(false);
  const modelos = {
    default:
      "p-6 bg-gradient-to-t from-3 to-4 rounded-full border-[1px] border-2",
    download:
      "relative p-[2px] rounded-lg bg-gradient-to-r from-4 w-full via-2 to-4",
    redirect: "pl-6 pr-14 bg-6/10 rounded-full border-[1px] border-2",
  };

  return (
    <motion.button
      className={`${modelos[typeBtn]} cursor-pointer overflow-hidden h-12${
        typeBtn !== "download"
          ? " shadow-3 shadow-md relative flex m-auto justify-between items-center"
          : ""
      }`}
      variants={hoverAnimation}
      whileHover="hover"
      whileTap={{ scale: 0.9 }}
      initial="initial"
      transition={{ duration: 0.5 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}>
      {typeBtn === "download" && (
        <div className="bg-5 max-w-100 overflow-hidden pr-4 pl-14 rounded-lg border h-full flex items-center border-transparent bg-clip-padding">
          <p
            className={`${
              hover && "text-5"
            } transition-all duration-700 z-10 m-auto`}>
            {children}
          </p>
          <div
            className={`${
              hover ? "scale-[2400%] bg-2" : "bg-2/60"
            } absolute inset-0  h-8 w-8  transition-all duration-1000 top-2 left-4 
           rounded-full`}></div>
          <div className="text-5 absolute left-[25px]">
            <FaFileDownload />
          </div>
        </div>
      )}
      {typeBtn !== "download" && <h3 className="z-10">{children}</h3>}
      {typeBtn === "redirect" && (
        <div
          className={`${
            hover ? "w-full" : "w-12"
          } absolute transition-all duration-500 flex justify-end items-center top-0 right-0 h-full rounded-full bg-gradient-to-l from-2 to-4 px-4`}>
          <FaLongArrowAltRight className="text-5" />
        </div>
      )}
    </motion.button>
  );
};

export default Button;
