import Logo from "./Logo";
import Navibar from "./Navbar";

const Navegation = () => {
  return (
    <>
      <nav className="justify-between h-16 w-full fixed flex items-center pr-6 pl-6 after:absolute after:-bottom-4 after:left-0 after:w-full after:h-[16px] after:bg-gradient-to-r after:from-5 after:via-2 after:to-5">
        <Logo />
        <Navibar />
      </nav>
    </>
  );
};

export default Navegation;
