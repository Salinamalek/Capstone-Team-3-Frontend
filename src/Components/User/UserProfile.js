import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useContextProvider } from "../../Providers/Provider.js";
import axios from "axios";
import { VscAccount } from "react-icons/vsc";
import userIcon from "../../Assets/USER.png"
import "./UserProfile.css";

export default function UserProfile() {
  const { userID } = useParams();
  const navigate = useNavigate();
  const { API } = useContextProvider();
  const [user, setUser] = useState({});
  const [userJobs, setUserJobs] = useState([]);

  // Destiny Updated token value here (same as new one in user EDIT profile)
  let AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNtQGVtYWlsLmNvbSIsImlhdCI6MTY4NDM2MDU1NiwiZXhwIjoxNjg0NDQ2OTU2fQ.NW-Z52nqzxJrdIqJsdh00ZxZdJdBnUuN4XoIHFMulL4";
  
  axios.defaults.headers.common["authorization"] = `Bearer ${AUTH_TOKEN}`;

  useEffect(() => {
    axios.get(`${API}/users/${userID}`)
    .then((res) => setUser(res.data))
    .catch((error) => {
      console.log(error);
      navigate("/not-found");
      });
    // do we just console log the error here?
    axios.get(`${API}/user-jobs/${userID}`)
    .then((res) => setUserJobs(res.data))
    .catch((error) => console.log(error));
  }, [userID]);

  const dateFormat = (date) => {
    const newDate = date.split("T")[0].split("-");
    return `${newDate[1]}/${newDate[2]}/${newDate[0]}`;
  };

  return (
    <div>
    {user.id && <div className="profile">
      <div className="left-side-profile">
        <div className="profile-details">
          <p>Name</p>
          <p className="bold">{user["first_name"] + " " + user["last_name"]}</p>
          <br />
          <p>School</p>
          <p className="bold">{user.school}</p>
          <br />
          <p>Portfolio projects</p>
          <ul>
            <li className="bold">{user["project_one"] || "add a link"}</li>
            <li className="bold">{user["project_two"] || "add a link"}</li>
          </ul>
        </div>
      </div>
      <div className="right-side-profile">
        {/* <VscAccount id="profile-icon" size={"100px"} /> */}
        <img id="user-icon" src={userIcon} alt="user icon" size="40px"/>
        <button onClick={() => navigate(`/user/${userID}/edit`)} className="profile-button">
          edit
        </button>
        <p className="skills">Skills and Technologies</p>
        {/* <ul>
          {user.skills &&
            user.skills.map((e, i) => (
              <li key={i} className="bold">
                {e}
              </li>
            ))}
        </ul> */}
      </div>
      <div id="bio">
        <p>About me</p>
        <br />
        <p className="bold bio-box">{user.bio}</p>
      </div>
      <div className="activity">
        <p className="bold">My Applications</p>
        <div>
          {userJobs.length &&
            userJobs.map(({ id, title, company, date_applied }) => (
              <p key={id}>
                <br />
                <strong>{title}</strong> - <em>{company}</em>
                <br />
                applied: {dateFormat(date_applied)}
              </p>
            ))}
            <br/>
            <button id="activity-button">view all applications</button>
        </div>
      </div>
      <button className="profile-button logout">Logout</button>
    </div>}
    </div>
  );
}
