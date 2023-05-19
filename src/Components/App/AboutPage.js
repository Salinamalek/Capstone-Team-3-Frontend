import { useState } from "react";
// import Modal from "../Modal";
import "../App/AboutPage.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
// import { MdAlternateEmail } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";

function AboutPage(props) {
  // const [openModal, setOpenModal] = useState(false);
  return (
    <div className="dev-section">
      <div className="dev-cards">
        <h1>Meet the Team!</h1>
        <div className="indiv-card">
          <h2>Destiny Joyner</h2>
          <img
            className="dev-img"
            src="https://avatars.githubusercontent.com/u/107226235?v=4"
          ></img>
          <h5 className="dev-title">Full Stack Web Developer</h5>
          <p>
            Lorem ipsum dolor sit amet. Rem provident illo ut reiciendis galisum
            eum dolores molestiae qui tempora vitae sed dolor galisum. Et earum
            magnam ut provident laborum et officiis asperiores ea animi
            dignissimos aut autem reprehenderit ut quidem architecto At amet
            nulla.
          </p>
          {/* <button
            classname="openModalBtn"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Click Me
          </button>
          {openModal && (
            <p>
              Lorem ipsum dolor sit amet. Rem provident illo ut reiciendis
              galisum eum dolores molestiae qui tempora vitae sed dolor galisum.
              Et earum magnam ut provident laborum et officiis asperiores ea
              animi dignissimos aut autem reprehenderit ut quidem architecto At
              amet nulla.
            </p>
          )} */}
          <hr className="socials-line"></hr>
          <div className="dev-socials">
            <a
              href="https://www.linkedin.com/in/destinyjoyner/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/DestinyJoyner" target="_blank">
              <span className="github">
                <BsGithub />
              </span>
            </a>
            <a href="mailto:destinyjoyner@pursuit.org">
              {/* <MdAlternateEmail /> */}
              {<IoMdMail />}
            </a>
          </div>

          {/* ---- */}
        </div>
        <div className="indiv-card">
          <h2>Dan Mazzilli</h2>
          <img
            className="dev-img"
            src="https://avatars.githubusercontent.com/u/107490157?v=4"
          ></img>
          <h5 className="dev-title">Full Stack Web Developer</h5>
          <p>
            Lorem ipsum dolor sit amet. Rem provident illo ut reiciendis galisum
            eum dolores molestiae qui tempora vitae sed dolor galisum. Et earum
            magnam ut provident laborum et officiis asperiores ea animi
            dignissimos aut autem reprehenderit ut quidem architecto At amet
            nulla.
          </p>
          <hr className="socials-line"></hr>
          <div className="dev-socials">
            <a
              href="https://www.linkedin.com/in/mazzilli-daniel/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/Daniel-Mazzilli" target="_blank">
              <BsGithub />
            </a>
            <a href="mailto:danmazzilli@pursuit.org">
              <IoMdMail />
            </a>
          </div>
        </div>
        <div className="indiv-card">
          <h2>Salina Malek</h2>
          <img
            className="dev-img"
            src="https://avatars.githubusercontent.com/u/105737474?v=4"
          ></img>
          <h5 className="dev-title">Full Stack Web Developer</h5>
          <p>
            Lorem ipsum dolor sit amet. Rem provident illo ut reiciendis galisum
            eum dolores molestiae qui tempora vitae sed dolor galisum. Et earum
            magnam ut provident laborum et officiis asperiores ea animi
            dignissimos aut autem reprehenderit ut quidem architecto At amet
            nulla.
          </p>
          <hr className="socials-line"></hr>
          <div className="dev-socials">
            <a href="https://www.linkedin.com/in/salina-malek/" target="_blank">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/Salinamalek" target="_blank">
              <BsGithub />
            </a>
            <a href="mailto:salinamalek@pursuit.org">
              <IoMdMail />
            </a>
          </div>
        </div>
        <div className="indiv-card">
          <h2>Jahaad Petty</h2>
          <img
            className="dev-img"
            src="https://avatars.githubusercontent.com/u/105683843?v=4"
          ></img>
          <p>
            Lorem ipsum dolor sit amet. Rem provident illo ut reiciendis galisum
            eum dolores molestiae qui tempora vitae sed dolor galisum. Et earum
            magnam ut provident laborum et officiis asperiores ea animi
            dignissimos aut autem reprehenderit ut quidem architecto At amet
            nulla.
          </p>
          <hr className="socials-line"></hr>
          <div className="dev-socials">
            <a
              href="https://www.linkedin.com/in/jahaad-petty-321066249/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/PESolut" target="_blank">
              <BsGithub />
            </a>
            <a href="mailto:jahaadpetty@pursuit.org">
              <IoMdMail />
            </a>
          </div>
        </div>
        <div className="indiv-card">
          <h2>Ron Johnson</h2>
          <img
            className="dev-img"
            src="https://avatars.githubusercontent.com/u/105737822?v=4"
          ></img>
          <p>
            Lorem ipsum dolor sit amet. Rem provident illo ut reiciendis galisum
            eum dolores molestiae qui tempora vitae sed dolor galisum. Et earum
            magnam ut provident laborum et officiis asperiores ea animi
            dignissimos aut autem reprehenderit ut quidem architecto At amet
            nulla.
          </p>
          <hr className="socials-line"></hr>
          <div className="dev-socials">
            <a
              href="https://www.linkedin.com/in/ronald-johnson-97b22830/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/ronJohnPursuit" target="_blank">
              <BsGithub />
            </a>
            <a href="mailto:ronjohnson@pursuit.org">
              <IoMdMail />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
