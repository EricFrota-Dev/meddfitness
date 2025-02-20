import { useState, useEffect } from "react";
import { navegation } from "../../../constants";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useApp } from "../../../contexts/appContext";

const Navibar = () => {
  const [toggleNav, setToggleNav] = useState(true);
  const location = useLocation();
  const { qqCoisa, setQqcoisa } = useApp();

  console.log(navegation);
  function handleClick() {
    setToggleNav(!toggleNav);
  }
  console.log("renderizou");

  console.log(qqCoisa);
  useEffect(() => {
    setQqcoisa(1);
    console.log(qqCoisa);
  }, [setQqcoisa]);

  return (
    <nav>
      <div className={`${toggleNav && "hidden"} lg:flex justify-end`}>
        {navegation.map(({ url, title }, index) => (
          <Link
            key={index}
            className={`${
              location.pathname === `/${url}` ? "text-2" : ""
            } text-[.8em] font-bold p-1 m-1`}
            to={url}
          >
            {title}
          </Link>
        ))}
      </div>
      <div className="cursor-pointer w-20 h-full flex justify-center items-center xl:hidden">
        <FaBars onClick={handleClick} className="size-8" />
      </div>
    </nav>
  );
};

export default Navibar;
