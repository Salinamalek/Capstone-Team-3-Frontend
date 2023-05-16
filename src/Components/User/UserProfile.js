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
  const [editForm, setEditForm] = useState({
    first_name: "",
    last_name: "",
    school: "",
    bio: "",
    project_one: "",
    project_two: "",
    skills: [],
  });

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

  useEffect(() => {
    if (editing) {
      setEditForm({
        first_name: user["first_name"],
        last_name: user["last_name"],
        school: user.school,
        bio: user.bio,
        project_one: user["project_one"],
        project_two: user["project_two"],
        skills: user.skills,
      });
    }
  }, [editing]);

  const handleEdit = () => {
    setEditing(!editing);
  };

  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.id]: event.target.value });
  };

  const dateFormat = (date) => {
    const newDate = date.split("T")[0].split("-");
    return `${newDate[1]}/${newDate[2]}/${newDate[0]}`;
  };

  return (
    <div className="profile">
      <div className="left-side-profile">
        <div className="profile-details">
          <p>Name</p>
          {editing ? (
            <div>
              <input
              id="first_name"
                type="text"
                placeholder="first name"
                value={editForm["first_name"]}
                onChange={handleChange}
                required
              />{" "}
              <input
                type="text"
                placeholder="last name"
                value={editForm["last_name"]}
                onChange={handleChange}
                required
              />
            </div>
          ) : (
            <p className="bold">
              {user["first_name"] + " " + user["last_name"]}
            </p>
          )}
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
        <VscAccount id="profile-icon" size={"100px"} />
        <button onClick={handleEdit} className="profile-button">
          edit
        </button>
        <p>Skills and Technologies</p>
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
        <p className="bold">{user.bio}</p>
      </div>
      <div className="activity">
        <p className="bold">Recent Activity</p>
        <div>
          {userJobs.length &&
            userJobs.map(({ id, title, company, date_applied }) => (
              <p key={id}>
                <br />
                <strong>{title}</strong> - <em>{company}</em>
                <br />
                Applied: {dateFormat(date_applied)}
              </p>
            ))}
        </div>
      </div>
      <button className="profile-button logout">Logout</button>
    </div>
  );
}
