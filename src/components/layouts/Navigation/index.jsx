import Logo from "./Logo";
import Navibar from "./Navbar";

const Navegation = () => {
  return (
    <>
      <div className="justify-between h-20 w-full fixed flex items-center border-b border-b-4 pr-6 pl-6">
        <Logo />

        <Navibar />
      </div>
    </>
  );
};

export default Navegation;
