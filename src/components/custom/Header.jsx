// import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5">
      {/* <Link to={"/"}>
      </Link> */}
      <img src="/logo.svg" alt="logo" />
      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  );
};

export default Header;
