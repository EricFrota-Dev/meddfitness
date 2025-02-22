import { navegation } from "../../../constants";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import useAppContext from "../../../contexts/app/useAppContext";
import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const Navibar = () => {
  const { isNavOppen, setIsNavOppen } = useAppContext();
  const location = useLocation();

  function handleClick() {
    setIsNavOppen(!isNavOppen);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsNavOppen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsNavOppen]);

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className={`${
          isNavOppen
            ? "bg-6 backdrop-blur fixed pr-6 right-0 top-0 bottom-0 w-80 "
            : ""
        }`}
      >
        <motion.div className="xl:hidden cursor-pointer xl:w-80 flex justify-end">
          <AnimatePresence mode="wait">
            <motion.div
              key={isNavOppen ? "xmark" : "bars"}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
              onClick={handleClick}
            >
              {isNavOppen ? (
                <FaXmark className="h-20 size-8 cursor-pointer" />
              ) : (
                <FaBars className="h-20 size-8 cursor-pointer" />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <div
          className={`${isNavOppen ? "w-80" : "hidden"} 
        xl:flex`}
        >
          {navegation.map(({ url, title }, index, items) => (
            <div
              
              className={`${isNavOppen && "w-80  flex"} ${
                isNavOppen && index + 1 !== items.length && "border-b border-3"
              }`}
            >
              <Link
                key={index}
                className={`${
                  location.pathname === `/${url}` ? "text-2" : ""
                } ${
                  isNavOppen ? "" : ""
                } hover:size-1.1 text-[.8em] font-bold p-3 m-1`}
                href={url}
                onClick={() => setIsNavOppen(false)}
              >
                {title}
              </Link>
            </div>
          ))}
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navibar;
