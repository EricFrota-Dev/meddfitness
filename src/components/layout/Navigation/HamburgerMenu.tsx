import useSidebar from "@/hooks/useSidebar";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

const HamburgerMenu = () => {
  const { isSidebarOpen, toggle } = useSidebar();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <button
      onClick={toggle}
      className="cursor-pointer flex z-50 xl:hidden p-2 hover:bg-4/50 hover:scale-102">
      <motion.svg
        key={windowWidth}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={isSidebarOpen ? "open" : "closed"}
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
          transition={{ duration: 0.3, ease: "backOut" }}
        />
        <motion.line
          x1="4"
          y1="12"
          x2="20"
          y2="12"
          initial={{ opacity: 1 }}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.2, ease: "backOut" }}
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
          transition={{ duration: 0.3, ease: "backOut" }}
        />
      </motion.svg>
    </button>
  );
};

export default HamburgerMenu;
