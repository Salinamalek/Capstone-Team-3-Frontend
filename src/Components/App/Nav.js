import { useState} from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineHome } from "react-icons/ai"
import { MdWorkOutline } from "react-icons/md"
import { BiInfoCircle, BiCopyright } from "react-icons/bi"
import { VscAccount } from "react-icons/vsc"
import logo from "../../Assets/LOGO.png";
import "./Nav.css";


export default function Nav() {
  const [openNav, setOpenNav] = useState(false)
  
  function navbarClick () {
    setOpenNav(!openNav)
  }

  return (
    <nav>
      <RxHamburgerMenu 
      size={"40px"} 
      color={"#41CDBC"}
      onClick = {() => navbarClick()} />

      <img 
      src={logo} 
      alt="logo" 
      />

      <Link to="/">
        <VscAccount
        className="nav-sign"  
        size={"30px"} /><br/>
        Sign-in
      </Link>

      {/* sliding nav bar section */}
      <aside 
      className={ openNav ? " slide-nav nav-open" : " slide-nav nav-close"}>
      <p>
        <span>inIT</span>
        <br/><br/>
        <span className="slogan">
          "Your first tech opportunity awaits..."
        </span>
      </p>
      <Link to ="/"  onClick = {() => navbarClick()} >
        <AiOutlineHome size = {"30px"} color = {"#41cdbc"} />
        <span>Home</span>
      </Link>
      <Link to ="/jobs" onClick = {() => navbarClick()}>
        <MdWorkOutline size = {"30px"} color = {"#41cdbc"} />
        <span>Jobs</span>
      </Link>
      <Link to ="/about" onClick = {() => navbarClick()}>
        <BiInfoCircle size = {"30px"} color = {"#41cdbc"} />
        <span>About</span>
      </Link>
      <button>LOGOUT</button>
      {/* maybe have footer info here ??  */}
      <div className="footer-info">
        <span> inIT <BiCopyright /></span>
        <span>Team 3 Capstone</span>
        <span>May 2023</span>
        <span>
          <a href = "https://www.pursuit.org/" target = "_blank" className="pursuit">Pursuit.org</a> 
        </span>
      </div>
    </aside>
      
    </nav>
  );
}
