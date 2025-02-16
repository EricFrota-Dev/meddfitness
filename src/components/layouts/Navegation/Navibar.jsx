import { useState } from "react";
import { navegation } from "../../../constants";
import { FaBars } from "react-icons/fa";

const Navibar = () => {
  const [toggleNav, setToggleNav] = useState(true);
  console.log(navegation);
  function handleClick() {
    setToggleNav(!toggleNav)
  }
  return (
    <>
      <div className={`${toggleNav && "hidden"} md:flex justify-end`}>
        {navegation.map((item, index) => (
          <div className="text-[.8em] p-1 m-1" id={item.url}>
            {item.title}
          </div>
        ))}
      </div>
      <div className="w-20 h-full flex justify-center items-center md:hidden">
        <FaBars onClick={handleClick} className="size-8" />
      </div>
    </>
  );
};

export default Navibar;
