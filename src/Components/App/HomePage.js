import "./HomePage.css";
// Destiny moved the scrolldown gif into assets folder, will import it here now
import scrollDown from "../../Assets/scrolldown.gif";
import scrollUp from "../../Assets/scrollup.gif";
import findJob from "../App/images/findJob.png";
import findJob2 from "../App/images/Screen Shot 2023-05-17 at 11.36.50 AM.png";
import { useEffect, useRef, useState, useMemo } from "react";

// import logo from "../App/scrolldown.gif";
function HomePage() {
  const two = useRef(null);

  function scrlDown() {
    // window.scrollTo(0, document.body.scrollHeight);

    // const curView = isInViewport1;

    // switch (false) {
    //   case isInViewport1:
    ref1.current.scrollIntoView({ behavior: "smooth", block: "center" });
    //     break;
    //   case isInViewport2:
    //     ref2.current.scrollIntoView({ behavior: "smooth", block: "center" });
    //     break;
    //   case isInViewport3:
    //     ref3.current.scrollIntoView({ behavior: "smooth", block: "center" });
    //     break;
    //   case isInViewport4:
    //     ref4.current.scrollIntoView({ behavior: "smooth", block: "center" });
    //     break;

    // default:
    //   console.log("I don't own a pet");
    //   break;
    // }
    // ref2.current.scrollIntoView({ behavior: "smooth", block: "center" });
    // window.scrollTo({
    //   top: ref.current.offsetTop,
    //   behavior: "smooth",
    // });
  }

  const ref1 = useRef(null);
  // const ref2 = useRef(null);
  const ref3 = useRef(null);
  // const ref4 = useRef(null);

  const isInViewport1 = useIsInViewport(ref1);
  console.log("isInViewport1: ", isInViewport1);

  // const isInViewport2 = useIsInViewport(ref2);
  // console.log("isInViewport2: ", isInViewport2);

  const isInViewport3 = useIsInViewport(ref3);
  console.log("isInViewport1: ", isInViewport3);

  // const isInViewport4 = useIsInViewport(ref4);
  // console.log("isInViewport2: ", isInViewport4);

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
  return (
    <div className="Home">
      <div className="container">
        <section className="one" data-num={1} ref={ref1}>
          <h1>
            Welcome to inIT! <br />{" "}
            <pre style={{ textIndent: "50px" }}>Bloom your career here!</pre>
          </h1>{" "}
          <br />
          {/* <br></br> first pages */}
          {
            // <img
            //   className="scrolldown"
            //   // Destiny will use imported image variable to replace src value here
            //   src={scrollDown}
            //   alt="scroll down"
            //   onClick={() => scrlDown()}
            // />
          }
        </section>
        <section className="two" data-num={2}>
          <br />
          Discover your path to success in software development with our
          innovative app that connects you to the best entry level career
          opportunities.
          {/* <img
            // Destiny will use imported image variable to replace src value here
            style={{
              height: "50vh",
              width: "50vw",
              margin: "0px",
              padding: "0px",
            }}
            src={findJob}
            alt="findJob"
            onClick={() => scrlDown()}
          /> */}
          Gain access to a vast network of companies seeking talented developers
          and browse through job listings tailored to your skills and interests.
          Our app provides valuable resources, such as coding challenges and
          interview tips, to help you prepare for your dream job in the
          ever-evolving field of software development.
          <br />{" "}
          {/* <img
            className="scrolldown"
            // Destiny will use imported image variable to replace src value here
            src={scrollDown}
            alt="scroll down"
          /> */}
        </section>
        <section className="three" data-num={3} ref={ref3}>
          third page
          <br /> Stay ahead of the curve and navigate your way to a rewarding
          career in software development with our app's comprehensive career
          guidance. From learning the latest programming languages to mastering
          essential coding concepts, we offer personalized recommendations and
          training programs to enhance your technical skills. Take control of
          your professional journey and unlock endless possibilities in the
          world of software development.
          {isInViewport3 && (
            <img
              // Destiny will use imported image variable to replace src value here
              style={{
                height: "50vh",
                width: "50vw",
                margin: "0px",
                padding: "0px",
              }}
              src={findJob2}
              alt="findJob"
            />
          )}
          <img
            className="scrolldown"
            // Destiny will use imported image variable to replace src value here
            src={scrollUp}
            alt="scroll down"
            onClick={() => scrlDown()}
          />
        </section>
        <section className="four" data-num={4}>
          "Success is not the key to happiness. Happiness is the key to success.
          If you love what you are doing, you will be successful." - Albert
          Schweitzer
        </section>
      </div>
      <br />
    </div>
  );
}

export default HomePage;
