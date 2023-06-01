import { useEffect, useRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";
// Destiny moved the scrolldown gif into assets folder, will import it here now
import scrollDown from "../../Assets/scrolldown.gif";
import scrollUp from "../../Assets/scrollup.gif";
import logoWhite from "./images/LOGO-WHITE.png";
import jobsDemo1 from "../App/images/jobsDemo1.png";
import jobApply from "../App/images/jobApply.png";
import BackEndEngineer from "../App/images/BackEndEngineer.png";
import NavBarImg from "../App/images/NavBarImg.png";
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
            className="scrolldown"
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
              Discover your path to success in software development with our ...
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
          <p className="text1">
            <img className="jobsDemoPg2" src={NavBarImg} alt="jobs Waiting" />
          </p>
          <div className="guideImg secondImg"></div>
          <span className="secondImg">navigation thru the app</span>
          <p className="text2">
            <img
              className="jobsDemoPg2"
              style={{ height: "75px", width: "150px" }}
              src={jobsWaiting}
              alt="jobs Waiting"
            />
          </p>
          <div className="guideImg thirdImg Xflip"></div>
          <span className="thirdImg">Search by your criteria needs</span>
          <p className="text3">
            <img
              className="jobsDemoPg2"
              style={{ height: "75px", width: "150px" }}
              src={jobApply}
              alt="jobs Waiting"
            />
          </p>
          <div className="guideImg fourthImg"></div>
          <span className="fourthImg">
            apply & keeptrack of your applications
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
          <div className="guideText">
            Discover your path to success in software development with our
            innovative app that connects you to the best entry level career
            opportunities. Gain access to a vast network of companies seeking
            talented developers and browse through job listings tailored to your
            skills and interests. Our app provides valuable resources, such as
            coding challenges and interview tips, to help you prepare for your
            dream job in the ever-evolving field of software development.
          </div>

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
              className="scrolldown"
              // Destiny will use imported image variable to replace src value here
              src={scrollDown}
              alt="scroll down"
              onClick={() => scrlDown()}
            />
          )} */}
        </section>
        <section className="two three" data-num={3}>
          <p className="text1">
            {" "}
            <img
              className="jobsDemoPg2"
              style={{ height: "75px", width: "150px" }}
              src={jobsWaiting}
              alt="jobs Waiting"
            />
          </p>
          <div className="guideImg Xflip fifthImg"></div>
          <span className="fifthImg">Full Stack developers</span>
          <p className="text2">
            {" "}
            <img
              className="jobsDemoPg2"
              style={{ height: "75px", width: "150px" }}
              src={jobsWaiting}
              alt="jobs Waiting"
            />
          </p>

          <div className="guideImg sixthImg"></div>
          <span className="sixthImg">Back-End Dev</span>

          <p className="text3">
            {" "}
            <img
              className="jobsDemoPg2"
              style={{ height: "75px", width: "150px" }}
              src={jobsWaiting}
              alt="jobs Waiting"
            />
          </p>
          <div className="guideImg Xflip seventhImg"></div>
          <span className="seventhImg">navigation thru the app</span>

          <div className="guideText ">
            Amzing Jobs Avialable such as ...
            {/* Stay ahead of the curve and
            navigate your way to a rewarding career in software development with 
            our app's comprehensive career guidance. From learning the latest
            programming languages to mastering essential coding concepts, we
            offer personalized recommendations and training programs to enhance
            your technical skills. Take control of your professional journey and
            unlock endless possibilities in the world of software development. */}
          </div>
          {/* <img className="jobsDemoPg3" src={BackEndEngineer} alt="pg 3 img" />
            <img className="jobsDemoPg3" src={NavBarImg} alt="pg 3 img" />
            <img className="jobsDemoPg3" src={JuniorDev} alt="pg 3 img" /> */}
          {!isInViewport4 && (
            <img
              className="scrolldown"
              // Destiny will use imported image variable to replace src value here
              src={scrollDown}
              alt="scroll down"
              onClick={() => scrlDown()}
            />
          )}
        </section>
        <section className="four" data-num={4} ref={ref4}>
          <div>
            "Success is not the key to happiness. Happiness is the key to
            success. If you love what you are doing, you will be successful." -
            Albert Schweitzer
          </div>
          <Link className="RegisterNow" to="/register">
            REGISTER NOW
          </Link>
          {isInViewport4 && (
            <img
              className="scrolldown"
              // Destiny will use imported image variable to replace src value here
              src={scrollUp}
              alt="scroll down"
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
