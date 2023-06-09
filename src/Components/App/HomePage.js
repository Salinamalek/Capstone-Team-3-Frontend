import { useEffect, useRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import scrollDown from "../../Assets/scrolldown.gif";
import scrollUp from "../../Assets/scrollup.gif";
import logoWhite from "./images/LOGO-WHITE.png";
import jobsDemo1 from "../App/images/jobsDemo1.png";
import jobApply from "../App/images/jobApply.png";
import BackEndEngineer from "../App/images/BackEndEngineer.png";
import yellowboy from "../App/images/yellowboy.webp";
import womanJob from "../App/images/womanJob.webp";
import youHiredImg from "../App/images/youHiredImg.webp";
import KeepTrack from "../App/images/KeepTrack.png";

import regPage from "../App/images/regPage.png";
import JuniorDev from "../App/images/JuniorDev.png";

import jobsWaiting2 from "../App/images/jobsWaiting2.png";
import jobsWaiting from "../App/images/jobsWaiting.png";
import "./HomePage.css";


// import logo from "../App/scrolldown.gif";
function HomePage() {
  // const two = useRef(null);

  // const [showElement, setShowElement] = useState(true);

  const [transition, setTransition] = useState(false);
  setTimeout(function () {
    setTransition(true);
  }, 7000);

  function scrlDown() {
    // window.scrollTo(0, 6000);

    // window.scrollTo(0, document.body.scrollHeight);

    // const curView = isInViewport1;

    // switch (false) {
    //   case isInViewport1:
    // ref1.current.scrollIntoView({ behavior: "smooth", block: "center" });
    //     break;
    //   case isInViewport2:
    //     ref2.current.scrollIntoView({ behavior: "smooth", block: "center" });
    //     break;
    //   case isInViewport4:
    //     ref4.current.scrollIntoView({ behavior: "smooth", block: "center" });
    //     break;
    //   case isInViewport4:
    //     ref4.current.scrollIntoView({ behavior: "smooth", block: "center" });
    //     break;

    // default:
    //   console.log("I don't own a pet");
    //   break;
    // }
    ref1.current.scrollIntoView({ behavior: "smooth", block: "center" });
    // window.scrollTo({
    //   top: ref.current.offsetTop,
    //   behavior: "smooth",
    // });
  }

  const ref1 = useRef(null);
  // const ref2 = useRef(null);
  const ref4 = useRef(null);
  // const ref4 = useRef(null);

  const isInViewport1 = useIsInViewport(ref1);
  console.log("isInViewport1: ", isInViewport1);

  // const isInViewport2 = useIsInViewport(ref2);
  // console.log("isInViewport2: ", isInViewport2);

  const isInViewport4 = useIsInViewport(ref4);
  console.log("isInViewport4: ", isInViewport4);

  // const isInViewport4 = useIsInViewport(ref4);
  // console.log("isInViewport4: ", isInViewport4);

  function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting)
        ),
      []
    );

    useEffect(() => {
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);

    return isIntersecting;
  }

  useEffect(() => {}, [transition]);
  return (
    <div className="Home">
      <div className="container">
        {isInViewport1 && (
          <img
            className={!transition ? "hide" : "show scrolldown"}
            // Destiny will use imported image variable to replace src value here
            src={scrollDown}
            alt="scroll down"
            onClick={() => scrlDown()}
          />
        )}
        <section className="one" data-num={1} ref={ref1}>
          <div className={!transition ? "show landing" : "hide"}>
            <h1>Welcome to</h1>

            <img
              className="HomeLogo"
              // Destiny will use imported image variable to replace src value here
              src={logoWhite}
              alt="white logo"
            />

            <pre>... Bloom your career here!</pre>
          </div>

          <div className="Home-Mission">
            <span className={!transition ? "hide" : "show missionStatement"}>
              Discover your path to success in software development with our
              innovative app that connects you to the best entry level career
              opportunities.{" "}
            </span>
            <img
              className={!transition ? "hide" : "show fadeOut watermark"}
              // Destiny will use imported image variable to replace src value here
              src={logoWhite}
              alt="white logo"
            />
            <Link
              className={
                !transition ? "hide" : "show missionStatement RegisterNow"
              }
              to="/register"
            >
              REGISTER NOW
            </Link>
          </div>
        </section>
        <section className="two" data-num={2}>
          <div className="guideText" id="guideTexttwo">
            Here's what our app offers as a solution. you can expect...
          </div>
          <p className="text1">
            <img className="jobsDemoPg2 " src={yellowboy} alt="jobs Waiting" />
          </p>
          <div className="guideImg secondImg Xflip "></div>
          <span className="secondImg">
            Fast-track job searches, securing developers' first job in weeks,
            not months.
          </span>
          <p className="text2">
            <img className="jobsDemoPg2" src={womanJob} alt="jobs Waiting" />
          </p>
          <div className="guideImg thirdImg "></div>
          <span className="thirdImg">
            Wisely match users with ideal opportunities, eliminating struggles
            for 40% of graduates.
          </span>
          <p className="text3">
            <img className="jobsDemoPg2" src={youHiredImg} alt="jobs Waiting" />
          </p>
          <div className="guideImg fourthImg Xflip"></div>
          <span className="fourthImg">
            connecting recent graduates with tailored offers by reducing
            applications in half.
          </span>
          {/* <img
            // Destiny will use imported image variable to replace src value here
            style={{
              height: "50vh",
              width: "50vw",
              margin: "0px",
              padding: "0px",
            }}
            src={jobsDemo1}
            alt="jobsDemo1"
            onClick={() => scrlDown()}
          /> */}

          {/* <img
              className="jobsDemoPg2"
              // Destiny will use imported image variable to replace src value here
              src={jobsWaiting}
              alt="jobs Waiting"
            />
            <img
              className="jobsDemoPg2"
              // Destiny will use imported image variable to replace src value here
              src={jobsWaiting2}
              alt="jobs Waiting"
            /> */}
          {/* {!isInViewport4 && (
            <img
                 className={!transition ? "hide" : "show scrolldown"}
              // Destiny will use imported image variable to replace src value here
              src={scrollDown}
              alt="scroll down"
              onClick={() => scrlDown()}
            />
          )} */}
        </section>
        <section className=" three" data-num={3}>
          <div className="guideText ">With our app you can ...</div>
          <p className="text1">
            {" "}
            <img
              className="jobsDemoPg3"
              // style={{ height: "75px", width: "150px" }}
              src={regPage}
              alt="jobs Waiting"
            />
          </p>
          <div className="guideImg Xflip fifthImg"> </div>
          <span className="fifthImg">
            {" "}
            Showcase your self as a person as well as your portfolio.
          </span>
          <p className="text2">
            {" "}
            <img
              className="jobsDemoPg3"
              // style={{ height: "75px", width: "150px" }}
              src={jobsWaiting}
              alt="jobs Waiting"
            />
          </p>

          <div className="guideImg sixthImg"></div>
          <span className="sixthImg">
            {" "}
            Curate your job search by city jobs skill set and desire to work
            remote.
          </span>

          <p className="text3">
            {" "}
            <img
              className="jobsDemoPg3"
              // style={{ height: "75px", width: "150px" }}
              src={KeepTrack}
              alt="jobs Waiting"
            />
          </p>
          <div className="guideImg Xflip seventhImg"></div>
          <span className="seventhImg"> keep track of your job inquiries </span>

          {/* <img className="jobsDemoPg3" src={BackEndEngineer} alt="pg 3 img" />
            <img className="jobsDemoPg3" src={yellowboy} alt="pg 3 img" />
            <img className="jobsDemoPg3" src={JuniorDev} alt="pg 3 img" /> */}
          {!isInViewport4 && (
            <img
              className={!transition ? "hide" : "show scrolldown"}
              // Destiny will use imported image variable to replace src value here
              src={scrollDown}
              alt="scroll down"
              onClick={() => scrlDown()}
            />
          )}
        </section>
        <section className="four" data-num={4} ref={ref4}>
          <div className="quote">
            "Success is not the key to happiness. Happiness is the key to
            success. If you love what you are doing, you will be successful." -
            Albert Schweitzer
          </div>
          <Link className=" RegisterNow" to="/register">
            NOW LET'S GET INIT <br />& WIN IT
          </Link>
          {isInViewport4 && (
            <img
              className={!transition ? "hide" : "show scrolldown "}
              // Destiny will use imported image variable to replace src value here
              src={scrollUp}
              alt="scroll Up"
              onClick={() => window.scrollTo(0, 0)}
            />
          )}
        </section>
      </div>
      <br />
    </div>
  );
}

export default HomePage;
