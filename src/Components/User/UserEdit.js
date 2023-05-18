import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContextProvider } from "../../Providers/Provider";
import axios from "axios";
import { VscAccount } from "react-icons/vsc";
import userIcon from "../../Assets/USER.png"
import "./UserEdit.css";

export default function UserEdit(props) {
  const { userID } = useParams();
  const navigate = useNavigate();
  const { API } = useContextProvider();
  const [user, setUser] = useState({});
  const [editForm, setEditForm] = useState({});

  // Destiny Updated token value here (same as new one in user profile)
  let AUTH_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNtQGVtYWlsLmNvbSIsImlhdCI6MTY4NDQyMjQwOSwiZXhwIjoxNjg0NTA4ODA5fQ.cN_YkDnVdplt7KYzmGo0mkf61of13uLauICHhpQnWWg";
  axios.defaults.headers.common["authorization"] = `Bearer ${AUTH_TOKEN}`;

  useEffect(() => {
    axios
      .get(`${API}/users/${userID}`)
      .then((res) => {
        setUser(res.data);
        setEditForm(res.data);
      })
      .catch((error) => {
        console.log(error);
        navigate("/not-found");
      });
  }, []);

  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.id]: event.target.value });
  };

  return (
    <form className="profile">
      <div className="left-side-profile">
        <div className="profile-details">
          <p>Name</p>
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
                id="last_name"
                type="text"
                placeholder="last name"
                value={editForm["last_name"]}
                onChange={handleChange}
                required
              />
            </div>
          <br />
          <p>School</p>
            <input
              id="school"
              type="text"
              placeholder="enter school / program"
              value={editForm.school}
              onChange={handleChange}
              required
            />
          <br />
          <p>Portfolio projects</p>
          <ul>
            <li className="bold">
                <input
                  id="project_one"
                  type="url"
                  placeholder="https://example.com"
                  value={editForm["project_one"]}
                  onChange={handleChange}
                />
            </li>
            <li className="bold">
                <input
                  id="project_two"
                  type="url"
                  placeholder="https://example.com"
                  value={editForm["project_two"]}
                  onChange={handleChange}
                />
            </li>
          </ul>
        </div>
      </div>
      <div className="right-side-profile">
        {/* <VscAccount id="profile-icon" size={"100px"} /> */}
        <img id="user-icon" src={userIcon} alt="user icon" size="40px"/>
        <button onClick={() => navigate(`/user/${userID}`)} className="profile-button">
          return
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
        <textarea id="bio" placeholder="add a short bio" value={editForm.bio} onChange={handleChange}/>
      </div>
      {/* <div className="activity">
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
      </div> */}
      <input type="submit" className="profile-button logout" />
    </form>
  );
}
