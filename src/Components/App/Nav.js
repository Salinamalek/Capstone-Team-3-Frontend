import { useState, useEffect } from "react";
import { useContextProvider } from "../../Providers/Provider";

import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { FiLogIn, FiLogOut, FiUserPlus } from "react-icons/fi";
// Destiny added icon for testing temp. links in nav bar

import { BiInfoCircle, BiCopyright, BiPlusCircle } from "react-icons/bi";
import logo from "../../Assets/LOGO.png";
import "./Nav.css";

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();
  const { theme, setTheme, isSignedIn, setIsSignedIn, API, axios, userID } =
    useContextProvider();
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
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
          size={"35px"}
          style={{ marginTop: "24px" }}
          color={"#41CDBC"}
          onClick={() => navbarClick()}
        />
      ) : (
        <AiOutlineClose
          size={"35px"}
          style={{ marginTop: "24px" }}
          color={"#41CDBC"}
          onClick={() => navbarClick()}
        />
      )}

      <img src={logo} alt="logo" />

      {/* <Link to="/">
        <VscAccount className="nav-sign" size={"30px"} />
        <br />
        Sign-in
      </Link> */}

      {/* sliding nav bar section */}
      <aside
        className={openNav ? " slide-nav nav-open" : " slide-nav nav-close"}
      >
        <p>
          {/* <span>inIT</span> */}
          <br />

          <span className="slogan">"Your first tech opportunity awaits!"</span>
        </p>
        {/* DESTINY adding register/ login/ user/4 route for easy navigation while testing */}
        {!isSignedIn && (
          <Link to="/user" onClick={() => loginClick()}>
            <FiLogIn size={"30px"} color={"#41cdbc"} />
            <span>Login</span>
          </Link>
        )}
        {isSignedIn && (
          <Link to="/user" onClick={() => navbarClick()}>
            <FiLogIn size={"30px"} color={"#41cdbc"} />
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
        {/* <Link to="/user/4" onClick={() => navbarClick()}>
          <GrAlert size={"30px"} color={"#41cdbc"} />
          <span>User Profile</span>
        </Link> */}
        {/* <hr className="nav-line"></hr> */}
        {/* was class => to className */}
        <label className="switch">
          <input type="checkbox" onChange={toggleTheme} />
          <span className="slider round"></span>
        </label>
        {isSignedIn && (
          <button className="logoutBtn" onClick={() => logoutClick()}>
            {<FiLogOut />} Logout
          </button>
        )}

        {/* maybe have footer info here ??  */}
        {/* <div className="footer-info">
        <span> inIT <BiCopyright /></span>
        <span>Team 3 Capstone</span>
        <span>May 2023</span>
        <span>
          <a href = "https://www.pursuit.org/" target = "_blank" className="pursuit">Pursuit.org</a> 
        </span>
      </div> */}
      </aside>
    </nav>
  );
}
