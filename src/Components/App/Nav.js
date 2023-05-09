import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
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
      size={"50px"} 
      color={"#41CDBC"}
      onClick = {() => navbarClick()} />
      <img src={logo} alt="logo" height="90%" />
      <Link to="/">Sign-in</Link>

      {/* sliding nav bar section */}
        <aside className={ openNav ? " slide-nav nav-open" : " slide-nav nav-close"}>
        <p>
          <h2>inIT</h2>
          <br/>
          <span className="slogan">"Your first tech opportunity awaits..."</span>
        </p>
        <Link to = "/">Home</Link>
        <Link to = "/jobs">Jobs</Link>
        <Link to = "/about">About</Link>
        <button>LOGOUT</button>
        {/* maybe have footer info here ??  */}
        <div className="footer-info">
            <span>inIT Capstone</span>
            <span>May 2023</span>
            <span>
              <a href = "https://www.pursuit.org/" target = "_blank" className="pursuit">Pursuit</a> 
            </span>
        </div>
      </aside>
      
    </nav>
  );
}
