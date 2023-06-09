import { useState, useEffect } from "react";
import { useRecruiterProvider } from "../../Providers/RecruiterProvider";
import { Link, useNavigate } from "react-router-dom";
import checkmark from "../../Assets/checkmark.png";
import Header from "../Job/Header.js";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();
  const {
    API,
    axios,
    setRecruiterID,
    setIsSignedIn,
    setAuthToken,
    setIsRecruiterAcc,
    setUserID,
    setAccessRegTwo,
  } = useRecruiterProvider();
  const [newProfileForm, setNewProfileForm] = useState({
    first_name: "",
    last_name: "",
    education: "",
    organization: "",
  });
  const [newLoginForm, setNewLoginForm] = useState({
    email: "",
    password: "",
    password_two: "",
    isRecruiter: "",
  });
  const [isEmailUnique, setIsEmailUnique] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (event, form) => {
    if (event.target.id === "isRecruiter") {
      setNewLoginForm({
        email: "",
        password: "",
        password_two: "",
        isRecruiter: event.target.value,
      });
      setNewProfileForm({
        first_name: "",
        last_name: "",
        education: "",
        organization: "",
      });
      setShowError(false);
    } else {
      form === "profile"
        ? setNewProfileForm({
            ...newProfileForm,
            [event.target.id]: event.target.value,
          })
        : setNewLoginForm({
            ...newLoginForm,
            [event.target.id]: event.target.value,
          });
    }
  };

  const passMatch = () => {
    const { password, password_two } = newLoginForm;
    if (password !== "" && password === password_two) {
      return true;
    } else {
      return false;
    }
  };

  // regex check for password
  const checkPassReq = (newPass) => {
    const cond1 = newPass.length >= 5;
    const cond2 =
      /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^\&*\)\(+=._-])/g.test(
        newPass
      );
    return cond1 && cond2;
  };

  useEffect(() => {
    setIsEmailUnique(false);
    const { email, isRecruiter } = newLoginForm;
    const cond1 = email.includes("@");
    const cond2 = email.includes(".");
    const cond3 =
      email.split("").reverse().indexOf("@") >
      email.split("").reverse().indexOf(".");
    if (cond1 && cond2 && cond3) {
      const emailType = isRecruiter === "true" ? "recruiters" : "users";
      axios
        .get(`${API}/emails/${emailType}/${email}`)
        .then(({ data }) => setIsEmailUnique(data.isEmailUnique))
        .catch((err) => console.log(err));
    }
  }, [newLoginForm.email]);

  useEffect(() => {
    showError ? setShowError(false) : null;
  }, [newLoginForm.email, newLoginForm.password_two, newLoginForm.password]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { isRecruiter } = newLoginForm;
    if (isEmailUnique && passMatch() && checkPassReq(newLoginForm.password)) {
      const userTypeCond = isRecruiter === "true";
      const loginTable = userTypeCond ? "recruiters-logins" : "logins";
      const userType = userTypeCond ? "recruiters" : "users";
      const loginObj = userTypeCond
        ? { ...newLoginForm }
        : { email: newLoginForm.email, password: newLoginForm.password };

      axios
        .post(`${API}/${userType}`, {
          profile: { ...newProfileForm },
          login: loginObj,
          skills: [],
        })
        .then(({data}) => {
          if (!userTypeCond) {
            setAccessRegTwo(true);
          }
          return data
        })
        .then((data) => {
          if (userTypeCond) {
            setRecruiterID(data.id);
            setIsSignedIn(false);
            setIsRecruiterAcc(true);
            setUserID(null);
          }
          if (!userTypeCond) {
            setRecruiterID(null);
            setIsSignedIn(true);
            setIsRecruiterAcc(false);
            setUserID(data.id);
          }
        })
        .then(() => {
          axios.post(`${API}/${loginTable}`, loginObj).then(({ data }) => {
            setAuthToken(data.token);
            if (userTypeCond) {
              navigate("/jobs/new");
            }
            if (!userTypeCond) {
              navigate("/register-continue");
            }
          });
        })
        .catch((err) => console.log(err));
    } else {
      // console.log(checkPassReq(newLoginForm.password));
      setShowError(true);
    }
  };

  return (
    <div className="recruiter-register">
      <Header header={"Register"} />
      <Link to="/recruiter/login">Already have an account? Log in</Link>
      <div className="start-form">
        {newLoginForm.isRecruiter === "" && (
          <h2>Select account type to start</h2>
        )}
        <select
          id="isRecruiter"
          onChange={(event) => handleChange(event, "login")}
        >
          <option value="">Account type</option>
          <option value={false}>Applicant</option>
          <option value={true}>Recruiter</option>
        </select>
      </div>
      {newLoginForm.isRecruiter !== "" && (
        <form className="recruiter-register-form" onSubmit={handleSubmit}>
          <label htmlFor="first_name">
            First Name<span>*</span>
          </label>
          <input
            id="first_name"
            type="text"
            onChange={(event) => handleChange(event, "profile")}
            value={newProfileForm["first_name"]}
            required
          />
          <label htmlFor="last_name">
            Last Name<span>*</span>
          </label>
          <input
            id="last_name"
            type="text"
            onChange={(event) => handleChange(event, "profile")}
            value={newProfileForm["last_name"]}
            required
          />
          <label
            htmlFor={
              newLoginForm.isRecruiter === "true" ? "organization" : "education"
            }
          >
            {newLoginForm.isRecruiter === "true" ? "Company" : "Education"}
            <span>*</span>
          </label>
          <input
            id={
              newLoginForm.isRecruiter === "true" ? "organization" : "education"
            }
            type="text"
            onChange={(event) => handleChange(event, "profile")}
            value={
              newLoginForm.isRecruiter === "true"
                ? newProfileForm["organization"]
                : newProfileForm["education"]
            }
            required
          />
          <label htmlFor="email">
            Email<span>*</span>
            {isEmailUnique !== false ? (
              <img
                className="register-checkmark"
                src={checkmark}
                alt="checkmark"
              />
            ) : (
              ""
            )}
          </label>
          <input
            id="email"
            type="email"
            onChange={(event) => handleChange(event, "login")}
            value={newLoginForm["email"]}
            required
          />
          <label htmlFor="password">
            Password<span>*</span>
          </label>
          <input
            className="register-input-pass"
            id="password"
            type="password"
            onChange={(event) => handleChange(event, "login")}
            value={newLoginForm["password"]}
            required
          />
          <p className="register-helper-text">
            Include a lowercase, uppercase, number, and special symbol. 5 char
            lenght min
          </p>
          <label htmlFor="password_two">
            Confirm Password<span>*</span>
          </label>
          <input
            className={`register-input-pass ${
              passMatch() ? "pass-good" : null
            }`}
            id="password_two"
            type="password"
            onChange={(event) => handleChange(event, "login")}
            value={newLoginForm["password_two"]}
            required
          />
          <p className="recruiter-register-error">
            {showError && !isEmailUnique
              ? "Email is invalid or unavailable"
              : showError && !passMatch()
              ? "Password inputs do not match"
              : showError && !checkPassReq(newLoginForm.password)
              ? "Password requirements not met"
              : ""}
          </p>
          <input id="recruiter-register-submit" type="submit" value="SUBMIT" />
        </form>
      )}
    </div>
  );
}
