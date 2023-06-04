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
    profile: { first_name: "", last_name: "", education: "", organization: "" },
    login: {
      email: "",
      password: "",
      isRecruiter: "",
    },
  });

  return (
    <div className="recruiter-register">
      <h1>Sign up</h1>
      <Link to="/recruiter/login">Already have an account? Log in</Link>
      <form className="recruiter-register-form">
        <select id="login.isRecruiter">
          <option>Select Account Type</option>
          <option value={false}>Applicant</option>
          <option value={true}>Recruiter</option>
        </select>
        <label htmlFor="profile.first_name">
          First name<span>*</span>
        </label>
        <input id="profile.first_name" type="text" required />
        <label htmlFor="profile.last_name">
          Last name<span>*</span>
        </label>
        <input id="profile.last_name" type="text" required />
        <label
          htmlFor={newAccountForm.isRecruiter ? "profile.organization" : "profile.education"}
        >
          {newAccountForm.isRecruiter === ""
            ? "Education / Organization"
            : newAccountForm.isRecruiter
            ? "Organization"
            : "Education"}
          <span>*</span>
        </label>
        <input
          id={newAccountForm.isRecruiter ? "profile.organization" : "profile.education"}
          type="text"
          required
        />
        <label htmlFor="login.email">
          Email<span>*</span>
        </label>
        <input id="login.email" type="email" required />
        <label htmlFor="login.password">
          Password<span>*</span>
        </label>
        <input
          className="register-input-pass"
          id="login.password"
          type="password"
          required
        />
        <p className="register-helper-text">
          Include one lowercase, uppercase, numerical, and special symbol. At
          least 5 character lenght
        </p>
        <input id="recruiter-register-submit" type="submit" value="SUBMIT" />
      </form>
    </div>
  );
}
