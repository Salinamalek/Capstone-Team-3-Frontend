import { useNavigate } from "react-router-dom";
import { useUserProvider } from "../../Providers/UserProvider.js";
import userIcon from "../../Assets/USER.png";
import "./UserEdit.css";

export default function UserEdit(props) {
  const navigate = useNavigate();
  const { API, axios, userProfile, editForm, setEditForm } = useUserProvider();

  // make it the put request in handleSubmit
  // useEffect(() => {
  //   axios
  //     .get(`${API}/users/${userID}`)
  //     .then((res) => {
  //       setUser(res.data);
  //       setEditForm(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       navigate("/not-found");
  //     });
  // }, []);

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
          <p>Education</p>
          <input
            id="education"
            type="text"
            placeholder="enter school / program"
            value={editForm.education}
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
        <img id="user-icon" src={userIcon} alt="user icon" size="40px" />
        <button onClick={() => navigate(`/user/`)} className="profile-button">
          cancel
        </button>
        <p className="skills">Skills and Technologies</p>
      </div>
      <div id="bio">
        <p>About me</p>
        <br />
        <textarea
          id="bio"
          placeholder="add a short bio"
          value={editForm.bio}
          onChange={handleChange}
        />
      </div>
      <input type="submit" value="SAVE" className="profile-button logout" />
    </form>
  );
}
