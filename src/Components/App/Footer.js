import "./Footer.css";
import { useContextProvider } from "../../Providers/Provider";

export default function Footer() {
  const { theme, setTheme } = useContextProvider();
  return (
    <footer className={`${theme}`}>Team 3 Pursuit Capstone ~ May 2023</footer>
  );
}
