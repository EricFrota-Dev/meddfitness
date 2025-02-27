import useAppContext from "../../../contexts/app/useAppContext";
import { motion } from "motion/react";

const HamburgerMenu = () => {
  const { isNavOppen, setIsNavOppen } = useAppContext();
  const handleClick = () => {
    console.log(isNavOppen);
    setIsNavOppen(!isNavOppen);
    console.log(isNavOppen);
  };

  return (
    <button onClick={handleClick} className="flex xl:hidden">
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={isNavOppen ? "open" : "closed"}
        className="w-8 h-8">
        <motion.line
          x1="4"
          y1="6"
          x2="20"
          y2="6"
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: 45, y: 6 },
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.line
          x1="4"
          y1="12"
          x2="20"
          y2="12"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.line
          x1="4"
          y1="18"
          x2="20"
          y2="18"
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: -45, y: -6 },
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.svg>
    </button>
  );
};

export default HamburgerMenu;
