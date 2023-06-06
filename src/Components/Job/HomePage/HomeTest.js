import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { TiArrowForward, TiArrowForwardOutline } from "react-icons/ti";
import logo from "./white-logo.png";
import scan from "./qr-code.png";
import goldTree from "./gold-tree-2.png";
import initTree from "./init-tree-gold.png"
import teamStock from "./team-stock.jpg";
import stock2 from "./init-stock(2).jpg";
import stock3 from "./init-stock(3).jpg";
import navScreen from "./nav-screen-3.png";
import screen2 from "./profile-screen-copy.png";
import screen3 from "./applied-screen.png";
import screen4 from "./job-screen-full.png";
import screen5 from "./filter-screen.png";
import "./HomeTest.css";

function HomeTest() {
  const [textSwitch, setTextSwitch] = useState(false);
  const timeout = setInterval(() => {
    setTextSwitch(true);
  }, 5000);

  useEffect(() => {}, [textSwitch]);

  return (
    <div className="home">
      {/* <span className={textSwitch ? "scroll-arrow" : "hide"}>
        <BsArrowDownCircleFill color={"#0914AE"} size={"40px"} />
      </span> */}

      <section>
        <div className={textSwitch ? "hidden" : "show home-landing"}>
          <h2 className="home-italic">Welcome To</h2>
          <hr />
          <img src={logo} alt="logo" className="home-logo" />
          <hr />
          <span className=" home-italic">
            "Your First Tech Opportunity Awaits!"
          </span>
        </div>
        {/* AFTER FADE SLIDE*/}
        <div className={!textSwitch ? "hidden" : "show home-mission"}>
          <div className="misc1">
            <img className="mission-img" src={stock2} alt="home-img" />
          </div>
          <p className="home-italic">
            "Directly connecting employers specifically looking to fill entry
            level positions, with job seekers on the hunt for their first role
            in the field"
          </p>
          <div className="misc2">
            <img className="mission-img" src={stock3} alt="home-img" />
          </div>

          <img className="blue-tree" src={initTree} alt="blue-tree" />

          <Link className="home-sign" to="/">
            SIGN IN
          </Link>
          <Link className="home-register" to="/">
            REGISTER NOW
          </Link>
          <span className="text-scroll">LEARN MORE ABOUT inIT!!</span>
        </div>
      </section>
      {/* SECOND SLIDE */}
      <section className="home-app-guide">
        <div className="nav-screen">
          <span>
            Easy to use Navigation!
            <TiArrowForward size={"30px"} />
          </span>
        </div>
        <img className="navbar-screen" src={navScreen} alt="navbar" />

        <img
          className="profile-screenshot"
          src={screen2}
          alt="profile-screen"
        />
        <div className="profile-screen">
          <span>
            Easy to Read Profile <i>IS</i> Your Resume!
            <TiArrowForward className="icon-flip" size={"30px"} />
          </span>
        </div>

        <div className="home-links-div">
          <Link className="home-register" to="/">
            REGISTER NOW
          </Link>
          <Link className="home-sign" to="/">
            SIGN IN
          </Link>
        </div>
      </section>
      {/* THIRD SLIDE */}
      <section className="home-guide-2">
        <div className="search-screen">
          <span>
            Job Search By City, Skills, and Remote Work
            <TiArrowForward className="icon-flip-down" size={"30px"} />
          </span>
        </div>
        <img className="search-screenshot" src={screen5} alt="searchbar" />

        <img className="job-screenshot" src={screen4} alt="job-screen" />
        <div className="job-screen">
          <span>
            One-Click Apply to Jobs At
            <br /> Your Skill Level!
          </span>
          <TiArrowForward className="icon-vertical-flip" size={"30px"} />
        </div>

        <div className="applied-screen">
          <span>
            Keep Track of Your Job Applications!!
            <TiArrowForward size={"30px"} />
          </span>
        </div>
        <img className="applied-screenshot" src={screen3} alt="applied" />

        <div className="home-links-div">
          <Link className="home-register" to="/">
            REGISTER NOW
          </Link>
          <Link className="home-sign" to="/">
            SIGN IN
          </Link>
        </div>
      </section>
      {/* LAST SLIDE */}
      <section className="home-final">
        <h2 className="home-italic">Begin Your Tech Journey Today!</h2>
        <div className="misc4">
          <img src={teamStock} alt="misc" />
        </div>

        <Link className="home-sign" to="/">
          <span>SIGN IN</span>
        </Link>
        <Link className="home-register" to="/">
          <span>REGISTER</span>
        </Link>
        <Link className="home-about" to="/about">
          <span>inIT TEAM</span>
        </Link>
        <img className="qr-code" src={scan} alt="qr-code" />
      </section>
    </div>
  );
}

export default HomeTest;
