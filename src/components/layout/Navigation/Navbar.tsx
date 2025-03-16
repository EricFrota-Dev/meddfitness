import NavItems from "./NavItems";
import Sidebar from "./Sidebar";

const Navibar = () => {
  return (
    <>
      <ul className="hidden xl:flex h-full">
        <NavItems />
      </ul>
      <Sidebar>
        <NavItems />
      </Sidebar>
    </>
  );
};

export default Navibar;
