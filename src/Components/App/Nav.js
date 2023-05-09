import { Link } from "react-router-dom";
import logo from "../../Assets/LOGO.png";
import "./Nav.css";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Nav() {
  return (
    <nav>
      <RxHamburgerMenu size={"50px"} color={"#41CDBC"} />
      <img src={logo} alt="logo" height="90%" />
      <Link to="/">Sign-in</Link>
    </nav>
  );
}
