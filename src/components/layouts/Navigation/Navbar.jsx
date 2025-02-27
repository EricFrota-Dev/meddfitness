import { navegation } from "../../../constants";
import { NavLink, useLocation } from "react-router-dom";

const Navibar = () => {
  const location = useLocation();

  return (
    <ul className="hidden xl:flex h-full">
      {navegation.map(({ url, title }, index) => (
        <li
          key={index}
          className={`${
            location.pathname === `/${url}` ? "text-2 scale-102" : ""
          } `}>
          <NavLink
            to={url}
            className="relative h-full p-4 flex items-center font-bold text-[0.8em] hover:bg-4/40 hover:scale-102 active:scale-98 active:bg-4/80 transition-transform">
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navibar;
