import { navegation } from "../../../constants";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { entryAnimation } from "../../../constants/animations";

const NavItems = ({ sidebarState }) => {
  const location = useLocation();
  return (
    <>
      {navegation.map(({ url, title }, index) => (
        <motion.li
          key={index}
          className="flex m-1 items-center"
          variants={entryAnimation(0.03 * index)}
          initial={sidebarState ? "from_right" : ""}
          animate={sidebarState ? "default" : ""}
          exit={sidebarState ? "from_right" : ""}>
          <NavLink
            to={url}
            className={`relative rounded-md py-1 px-3 flex items-center font-bold text-[0.8em] hover:bg-4/40 hover:scale-102 active:scale-98 active:bg-4/80 transition-transform w-fit  ${
              location.pathname === `/${url}` && "scale-102"
            }`}>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-3 via-2/50 to-4 rounded-md z-[-1]"
              initial={{ width: "0%" }}
              animate={{
                width: location.pathname === `/${url}` ? "100%" : "0%",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />

            {title}
          </NavLink>
        </motion.li>
      ))}
    </>
  );
};

export default NavItems;
