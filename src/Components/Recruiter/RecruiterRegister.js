import { useState } from "react";
import { useRecruiterProvider } from "../../Providers/RecruiterProvider";
import { Link, useNavigate } from "react-router-dom";
import "./RecruiterRegister.css";

export default function RecruiterRegister() {
  const navigate = useNavigate();
  const {
    API,
    axios,
    setRecruiterID,
    setIsSignedIn,
    setAuthToken,
    setIsRecruiterAcc,
    setUserID,
  } = useRecruiterProvider();
  const [newAccountForm, setNewAccountForm] = useState({
    first_name: "",
    last_name: "",
    school: "",
    organization: "",
    email: "",
    password: "",
    isRecruiter: "",
  });

  return (
    <div className="recruiter-register">
      <h1>Sign up</h1>
      <form className="recruiter-register-form">
        <select id="isRecruiter">
          <option>Select Account Type</option>
          <option value={false}>Applicant</option>
          <option value={true}>Recruiter</option>
        </select>
        <label htmlFor="first_name">First name<span>*</span></label>
        <input id="first_name" type="text" required />
        <label htmlFor="last_name">Last name<span>*</span></label>
        <input id="last_name" type="text" required />
        <label
          htmlFor={newAccountForm.isRecruiter ? "organization" : "education"}
        >
          {newAccountForm.isRecruiter === ""
            ? "Education / Organization"
            : newAccountForm.isRecruiter
            ? "Organization"
            : "Education"}<span>*</span>
        </label>
        <input
          id={newAccountForm.isRecruiter ? "organization" : "education"}
          type="text"
          required
        />
         <label htmlFor="email">Email<span>*</span></label>
        <input id="email" type="email" required />
        <label htmlFor="password">Password<span>*</span></label>
        <input id="password" type="password" required />
        <p className="register-helper-text">Include one lowercase, uppercase, numerical, and special symbol. At least 5 character lenght</p>
        <input id="recruiter-register-submit" type="submit" value="SUBMIT"/>
      </form>
    </div>
  );
}
