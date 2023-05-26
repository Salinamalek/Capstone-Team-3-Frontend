import { useState } from "react";
import "../App/AboutPage.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";
import { team } from "../../Functions/AboutData";
import userIcon from "../../Assets/USER.png";

function AboutPage(props) {
  const [profileCard, setProfileCard] = useState(team["6"]);

  const iconArr = [<BsGithub />, <BsLinkedin />, <IoMdMail />];

  function aboutCard(e) {
    if (profileCard.id === +e.target.id) {
      setProfileCard(team["6"]);
    } else {
      setProfileCard(team[e.target.id]);
    }
  }

  return (
    <div className="dev-section">
      <div className="dev-cards">
        <h1>Meet the Team!</h1>
        <div className="dev-icons">
          <img
            id="1"
            className="devicon"
            src="https://avatars.githubusercontent.com/u/107226235?v=4"
            onClick={(event) => aboutCard(event)}
          ></img>
          <img
            id="2"
            className="devicon"
            src="https://avatars.githubusercontent.com/u/107490157?v=4"
            onClick={(event) => aboutCard(event)}
          ></img>
          <img
            id="3"
            className="devicon"
            src="https://avatars.githubusercontent.com/u/105737474?v=4"
            onClick={(event) => aboutCard(event)}
          ></img>
          <img
            id="4"
            className="devicon"
            src="https://avatars.githubusercontent.com/u/105737822?v=4"
            onClick={(event) => aboutCard(event)}
          ></img>
          <img
            id="5"
            className="devicon"
            src="https://avatars.githubusercontent.com/u/105683843?v=4"
            onClick={(event) => aboutCard(event)}
          ></img>
        </div>
        <div className="indiv-card">
          <h2>{profileCard.name}</h2>
          <img src={profileCard.img} height={"100px"}></img>
          <p>{profileCard.bio}</p>
          <hr className="socials-line"></hr>
          <div className="dev-socials">
            {profileCard.links.length > 0 &&
              profileCard.links.map((el, i) => (
                <a href={el} target="_blank">
                  {iconArr[i]}
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
