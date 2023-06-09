import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useUserProvider } from "../../Providers/UserProvider.js";
import Header from "../Job/Header.js";
import SkillsComponent from "../Job/SkillsComponent.js";
import "./RecruiterRegister2.css";

export default function RecruiterRegister2() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});
  const [updateSkills, setUpdateSkills] = useState([]);
  const { API, axios, userID } = useUserProvider();

  useEffect(() => {
    axios
      .get(`${API}/users/${userID}`)
      .then(({ data }) => setUserDetails(data))
      .catch((err) => console.log(err));
  }, [userID]);

  const handleChange = (event) => {
    setUserDetails({ ...userDetails, [event.target.id]: event.target.value });
  };

  const skillsHandle = (event) => {
    let selectedSkills = [...updateSkills];
    selectedSkills =
      !selectedSkills.includes(+event.target.id) && selectedSkills.length < 4
        ? [...selectedSkills, +event.target.id]
        : selectedSkills.filter((e) => e !== +event.target.id);
    setUpdateSkills(selectedSkills);
  };

  return (
    <div className="registration-two">
      <Header header={"Add more account details"} noBack={true} />
      <form className="form-register-two">
        <label htmlFor="bio">About me</label>
        <textarea
          id="bio"
          maxLength={160}
          placeholder="add a short bio"
          onChange={handleChange}
          value={userDetails.bio || ""}
        />
        <div className="register-projects">
          <p>Portfolio Projects</p>
          <input
            id="project_one"
            type="url"
            placeholder="https://example.com"
            onChange={handleChange}
            value={userDetails.project_one || ""}
          />
          <input
            id="project_two"
            type="url"
            placeholder="https://example.com"
            onChange={handleChange}
            value={userDetails.project_two || ""}
          />
        </div>
        <div className="register-two-skills">
          <p>
            Skills & Technologies
            <br />
            <span>select up to 4</span>
          </p>
          <div className="register-skill-icons">
            <SkillsComponent
              key={uuidv4()}
              checkBoxHandle={skillsHandle}
              checkedArr={updateSkills}
              checkbox={true}
            />
          </div>
        </div>
        <input type="submit" value="SUBMIT" />
      </form>
      <Link to="/jobs">Skip for now</Link>
    </div>
  );
}
