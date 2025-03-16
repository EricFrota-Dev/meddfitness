import { navegation } from "../../../constants";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { entryAnimation } from "@/animations";
import useSidebar from "@/hooks/useSidebar";

const NavItems = () => {
  const { isSidebarOpen, close } = useSidebar();
  const location = useLocation();
  return (
    <>
      {navegation.map(({ url, title }, index) => (
        <motion.li
          key={index}
          className="flex m-1 items-center"
          variants={entryAnimation(isSidebarOpen ? 0.03 * index : 0)}
          initial={isSidebarOpen ? "from_right" : "initialScale"}
          animate={isSidebarOpen ? "default" : "defaultScale"}
          exit={isSidebarOpen ? "from_right" : undefined}>
          <NavLink
            to={url}
            onClick={close}
            className={`relative rounded-md py-1 px-3 flex w-full items-center text-[0.8em] hover:bg-4/40 hover:scale-102 active:scale-98 active:bg-4/80 transition-transform ${
              location.pathname === url && "scale-102"
            }`}>
            <motion.div
              className={`${
                isSidebarOpen
                  ? "bg-gradient-to-r from-2/50 to-5/0"
                  : "bg-gradient-to-r from-3 via-2/50 to-4"
              } absolute inset-0 rounded-md z-[-1]`}
              initial={{ width: "0%" }}
              animate={{
                width: location.pathname === `${url}` ? "100%" : "0%",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />

            <h3>{title}</h3>
          </NavLink>
        </motion.li>
      ))}
    </>
  );
};

export default NavItems;
