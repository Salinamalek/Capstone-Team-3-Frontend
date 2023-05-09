import { Link } from "react-router-dom";
import logo from "../Assets/LOGO.png";
import "./Nav.css";

export default function Nav() {
    return (
        <nav>
            <img src={logo} alt="logo" height="100px" />
            <Link to="/">
                Sign-in
            </Link>
        </nav>
    )
}