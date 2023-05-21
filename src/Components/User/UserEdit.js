import { useNavigate } from "react-router-dom";
import { useUserProvider } from "../../Providers/UserProvider.js";
import userIcon from "../../Assets/USER.png";
import "./UserEdit.css";

export default function UserEdit(props) {
  const navigate = useNavigate();
  const { API, axios, userID, editForm, setEditForm } = useUserProvider();

  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/users/${userID}`, {
        profile: editForm,
        skills: editForm.skills,
      })
      .then(() => navigate("/user"))
      .catch((error) => console.log(error));
  };

  return (
    <form className="profile" onSubmit={handleSubmit}>
      <div className="top-profile">
        <div>
          <p>Name</p>
          <div>
            <input
              id="first_name"
              className="input-profile input-name"
              type="text"
              placeholder="first name"
              value={editForm["first_name"] || ""}
              onChange={handleChange}
              required
            />{" "}
            <input
              id="last_name"
              className="input-profile input-name"
              type="text"
              placeholder="last name"
              value={editForm["last_name"] || ""}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div>
            <p>Education</p>
            <input
              id="education"
              className="input-profile input-education"
              type="text"
              value={editForm.education || ""}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <p className="skills">Skills and Technologies</p>
          <div />
        </div>
        <div className="icon-edit">
          <img id="icon-user" src={userIcon} alt="user icon" />
          <button onClick={() => navigate(`/user/`)} className="profile-button">
            CANCEL
          </button>
        </div>
      </div>
      <br />
      <div>
        <p>Portfolio projects</p>
        <div className="ul-projects">
          <p className="bold">
            <input
              id="project_one"
              className="input-profile"
              type="url"
              placeholder="https://example.com"
              value={editForm["project_one"] || ""}
              onChange={handleChange}
            />
          </p>
          <p className="bold">
            <input
              id="project_two"
              className="input-profile"
              type="url"
              placeholder="https://example.com"
              value={editForm["project_two"] || ""}
              onChange={handleChange}
            />
          </p>
        </div>
      </div>
      <div>
        <br />
        <p>About me</p>
        <textarea
          id="bio"
          className="input-profile input-bio"
          placeholder="add a short bio"
          value={editForm.bio || ""}
          onChange={handleChange}
        />
      </div>
      <br />
      <input type="submit" value="SAVE" className="profile-button logout" />
    </form>
  );
}
