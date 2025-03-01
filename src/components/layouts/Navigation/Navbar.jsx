import NavItems from "./NavItems";
import Sidebar from "./Sidebar";
import useSidebar from "../../../hooks/useSidebar";

const Navibar = () => {
  const { toggle, isSidebarOpen } = useSidebar();

  return (
    <>
        <ul className="hidden xl:flex h-full">
          <NavItems sidebarState={isSidebarOpen} />
        </ul>
        <Sidebar onClick={toggle} sidebarState={isSidebarOpen}>
          <NavItems sidebarState={isSidebarOpen} />
        </Sidebar>
    </>
  );
};

export default Navibar;
