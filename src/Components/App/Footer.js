import { Link } from "react-router-dom";
import { useContextProvider } from "../../Providers/Provider";
import logo from "../../Assets/footer-logo.png"
import "./Footer.css";

export default function Footer() {
  const { theme } = useContextProvider();
  return (
    <footer className={`${theme}`}>
      <Link to="/about">
        <span>inIT TEAM</span>
        </Link> 
        <img src={logo} alt="footer-logo" />
        May 2023
      </footer>
  );
}
