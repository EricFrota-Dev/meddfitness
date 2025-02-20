import { Link } from "react-router-dom";
import { images } from "../../../constants";

const Logo = () => {
  return (
    <>
      <Link to="/"><img className="h-[50px]" src={images[0].url} alt={images[0].name}/></Link>
    </>
  );
};

export default Logo;
