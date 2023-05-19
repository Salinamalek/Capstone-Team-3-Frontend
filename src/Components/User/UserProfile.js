import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useUserProvider } from "../../Providers/UserProvider.js";
import userIcon from "../../Assets/USER.png"
import "./UserProfile.css";

export default function UserProfile() {

  const navigate = useNavigate();
  const { userProfile, userJobs, userID } = useUserProvider();

  const dateFormat = (date) => {
    const newDate = date.split("T")[0].split("-");
    return `${newDate[1]}/${newDate[2]}/${newDate[0]}`;
  };

  return (
    <div>
    {userProfile.id && <div className="profile">
      <div className="left-side-profile">
        <div className="profile-details">
          <p>Name</p>
          <p className="bold">{userProfile["first_name"] + " " + userProfile["last_name"]}</p>
          <br />
          <p>Education</p>
          <p className="bold">{userProfile.school}</p>
          <br />
          <p>Portfolio projects</p>
          <ul>
            <li className="bold">{userProfile["project_one"] || "add a link"}</li>
            <li className="bold">{userProfile["project_two"] || "add a link"}</li>
          </ul>
        </div>
      </div>
      <div className="right-side-profile">
        <img id="user-icon" src={userIcon} alt="user icon" size="40px"/>
        <button onClick={() => navigate(`/user/${userID}/edit`)} className="profile-button">
          edit
        </button>
        <p className="skills">Skills and Technologies</p>
        {/* <ul>
          {userProfile.skills &&
            userProfile.skills.map((e, i) => (
              <li key={i} className="bold">
                {e}
              </li>
            ))}
        </ul> */}
      </div>
      <div id="bio">
        <p>About me</p>
        <br />
        <p className="bold bio-box">{userProfile.bio}</p>
      </div>
      <div className="activity">
        <p className="bold">My Applications</p>
        <div>
          {userJobs.length > 0 &&
            userJobs.map(({ id, title, company, date_applied }) => (
              <p key={id}>
                <br />
                <strong>{title}</strong> - <em>{company}</em>
                <br />
                applied: {dateFormat(date_applied)}
              </p>
            ))}
            <br/>
            <button id="activity-button">{userJobs.length > 0? "view all applications" : "view jobs"}</button>
        </div>
      </div>
    </div>}
    </div>
  );
}
