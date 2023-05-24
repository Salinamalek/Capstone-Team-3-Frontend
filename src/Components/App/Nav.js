import { useState, useEffect } from "react";
import { useContextProvider } from "../../Providers/Provider";

import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { FiLogIn, FiLogOut, FiUserPlus } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
// Destiny added icon for testing temp. links in nav bar

import { BiInfoCircle, BiCopyright, BiPlusCircle } from "react-icons/bi";
import logo from "../../Assets/LOGO.png";
import "./Nav.css";

export default function Nav() {
  const { theme, setTheme, isSignedIn, setIsSignedIn, API, axios, userID } =
  useContextProvider();

  const [openNav, setOpenNav] = useState(false);
  const [isChecked, setIsChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false )
  const navigate = useNavigate();
 

  const toggleTheme = (e) => {
    const checkbox = e.target.checked
    if(checkbox){
      setTheme("dark")
      setIsChecked(true)
    }
    else {
      setTheme("light")
      setIsChecked(false)
    }
  
  };
  useEffect(() => {
    const handleScroll = () => {
      if (openNav) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    handleScroll();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openNav]);

  function navbarClick() {
    setOpenNav(!openNav);
  }

  function loginClick() {
    setIsSignedIn(true);
    navbarClick();
    navigate("/user");
  }

  function logoutClick() {
    setIsSignedIn(false);
    navbarClick();
    navigate("/");
  }

  function profileClick() {
    navigate("/user");
  }

  return (
    <nav>
      {!openNav ? (
        <RxHamburgerMenu
          className="burger"
          size={"35px"}
          style={{ marginTop: "24px" }}
          color={"#41CDBC"}
          onClick={() => navbarClick()}
        />
      ) : (
        <AiOutlineClose
          className="burger"
          size={"35px"}
          style={{ marginTop: "24px" }}
          color={"#41CDBC"}
          onClick={() => navbarClick()}
        />
      )}

      <img src={logo} alt="logo" />

      {/* sliding nav bar section */}
      <aside
        className={openNav ? " slide-nav nav-open" : " slide-nav nav-close"}
      >
        <p>
          <br />

          <span className="slogan">"Your first tech opportunity awaits!"</span>
        </p>
        {!isSignedIn && (
          <Link to="/user" onClick={() => loginClick()}>
            <FiLogIn size={"30px"} color={"#41cdbc"} />
            <span>Login</span>
          </Link>
        )}
        {isSignedIn && (
          <Link to="/user" onClick={() => navbarClick()}>
            <CgProfile size={"30px"} color={"#41cdbc"} />
            <span>Profile</span>
          </Link>
        )}
        {!isSignedIn && (
          <Link to="/register" onClick={() => navbarClick()}>
            <FiUserPlus size={"30px"} color={"#41cdbc"} />
            <span>Registration</span>
          </Link>
        )}

        <Link to="/" onClick={() => navbarClick()}>
          <AiOutlineHome size={"30px"} color={"#41cdbc"} />
          <span>Home</span>
        </Link>
        <Link to="/jobs" onClick={() => navbarClick()}>
          <MdWorkOutline size={"30px"} color={"#41cdbc"} />
          <span>Jobs</span>
        </Link>
        <Link to="/about" onClick={() => navbarClick()}>
          <BiInfoCircle size={"30px"} color={"#41cdbc"} />
          <span>Meet the Team</span>
        </Link>
        <label className="switch">
          <input 
          type="checkbox" 
          checked={isChecked}
          onChange={(event) => toggleTheme(event)} />
          <span className="slider round"></span>
        </label>
        {isSignedIn && (
          <button className="logoutBtn" onClick={() => logoutClick()}>
            {<FiLogOut />} Logout
          </button>
        )}
      </aside>
    </nav>
  );
}
