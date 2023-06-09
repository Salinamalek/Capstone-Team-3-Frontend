import { useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Header from "../Job/Header.js";
import SkillsComponent from "../Job/SkillsComponent.js";
import "./RecruiterRegister2.css";

export default function RecruiterRegister2() {
  const navigate = useNavigate();
  return (
    <div className="registration-two">
      <Header header={"Complete your account"} noBack={true} />
      <h2>Account successfully created</h2>
      <h3>Add more account details</h3>
     
      <form className="form-register-two">
        <label>Biography</label>
        <textarea />
        <div>
          <p>Portfolio Projects</p>
          <input />
          <input />
        </div>
        <SkillsComponent 
        key={uuidv4()}
        checkedArr={[2, 3]}
        checkbox={true}
        />
      </form>
      <Link to="/jobs">Skip for now</Link>
    </div>
  );
}
