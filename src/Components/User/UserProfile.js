import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useContextProvider } from "../../Providers/Provider.js";
import axios from "axios";
import { VscAccount } from "react-icons/vsc";
import "./UserProfile.css";

export default function UserProfile() {
  const { userID } = useParams();
  const navigate = useNavigate();
  const { API } = useContextProvider();
  const [user, setUser] = useState({});
  const [userJobs, setUserJobs] = useState([]);
  const [editing, setEditing] = useState(false);

  let AUTH_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNtQGVtYWlsLmNvbSIsImlhdCI6MTY4NDE3MjM2MiwiZXhwIjoxNjg0MjU4NzYyfQ.8GhfUcrAdXXOrgQEFHB6oWTikH21Pw9S2i_uRvFhET8";
  axios.defaults.headers.common["authorization"] = `Bearer ${AUTH_TOKEN}`;

  useEffect(() => {
    axios
      .get(`${API}/users/${userID}`)
      .then((res) => setUser(res.data))
      .catch((error) => {
        console.log(error);
        navigate("/not-found");
      });
    // do we just console log the error here?
    axios
      .get(`${API}/user-jobs/${userID}`)
      .then((res) => setUserJobs(res.data))
      .catch((error) => console.log(error));
  }, [userID]);

  const handleEdit = () => {
    setEditing(!editing);
  };

  return (
    <div className="profile">
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
          <br />
          <p>About me</p>
          <p className="bold">{user.bio}</p>
        </div>
      </div>
      <div className="right-side-profile">
        <VscAccount id="profile-icon" size={"120px"} />
        <button onClick={handleEdit} className="profile-button">
          edit
        </button>
        <p>Skills and Technologies</p>
        <ul>
          {user.skills &&
            user.skills.map((e, i) => (
              <li key={i} className="bold">
                {e}
              </li>
            ))}
        </ul>
      </div>
      <div className="activity">
        <p className="bold">Recent Activity</p>
        <ul>
          {userJobs.length &&
            userJobs.map(({id, title, company, date_applied}) => <li key={id}>{title} - {company}<br/>{date_applied}</li>)}
        </ul>
      </div>
      <button className="profile-button">Logout</button>
    </div>
  );
}
