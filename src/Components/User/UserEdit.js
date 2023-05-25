import { useNavigate } from "react-router-dom";
import { useUserProvider } from "../../Providers/UserProvider.js";
import userIcon from "../../Assets/USER.png";
import "./UserEdit.css";

export default function UserEdit(props) {
  const navigate = useNavigate();
  const {
    API,
    axios,
    userID,
    userProfile,
    editForm,
    setEditForm,
    isSignedIn,
    setIsSignedIn,
  } = useUserProvider();

  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let edited = false;
    const fields = Object.keys(editForm);

    for (let i = 0; i < fields.length; i++) {
      if (editForm[fields[i]] !== userProfile[fields[i]]) {
        edited = true;
        break;
      }
    }

    edited
      ? axios
          .put(`${API}/users/${userID}`, {
            profile: editForm,
            // skills: [1, 2, 3, 4],
            skills: editForm.skills["skill_ids"],
          })
          .then(() => {
            navigate("/user");
            console.log(edited);
          })
          .catch((error) => console.log(error))
      : navigate("/user");
  };

  return (
    <div>
      {!isSignedIn ? (
        <div className="user-login-prompt">
          <h2>Login to access your user profile!</h2>
          <button className="login-button" onClick={() => setIsSignedIn(true)}>
            LOGIN
          </button>
        </div>
      ) : (
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
              <button
                onClick={() => navigate(`/user/`)}
                className="profile-button"
              >
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
      )}
    </div>
  );
}
