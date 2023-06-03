import { useState } from "react";
import { useRecruiterProvider } from "../../Providers/RecruiterProvider.js";
import { Link, useNavigate } from "react-router-dom";
import "./RecruiterLogin.css";

export default function () {
  const navigate = useNavigate();
  const {
    axios,
    API,
    setRecruiterID,
    setIsSignedIn,
    setAuthToken,
    setIsRecruiterAcc,
    setUserID,
  } = useRecruiterProvider();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    isRecruiter: false,
  });
  const [failedLogin, setFailedLogin] = useState(false);

  const handleChange = (event) => {
    if (event.target.id === "isRecruiter") {
      setLoginForm({ ...loginForm, isRecruiter: !loginForm.isRecruiter });
    } else {
      setLoginForm({ ...loginForm, [event.target.id]: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFailedLogin(false);
    const { isRecruiter } = loginForm;
    const callRoute = isRecruiter ? "recruiters-logins" : "logins";
    axios
      .post(`${API}/${callRoute}`, loginForm)
      .then(({ data }) => {
        console.log(data);
        setAuthToken(data.token);
        setIsSignedIn(true);
        if (isRecruiter) {
          setRecruiterID(data.recruiter_id);
          setIsRecruiterAcc(true);
          navigate("/recruiter");
        } else {
          setUserID(data.user_id);
          setIsRecruiterAcc(false);
          navigate("/user");
        }
      })
      .catch((error) => {
        console.log(error);
        setFailedLogin(true);
      });
  };

  return (
    <div className="recruiter-login">
      <h1>Login</h1>
      <form className="recruiter-login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={loginForm.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={loginForm.password}
          onChange={handleChange}
          required
        />
        <label htmlFor="isRecruiter">I am a recruiter</label>
        <input
          id="isRecruiter"
          type="checkbox"
          checked={loginForm.isRecruiter}
          onChange={handleChange}
        />
        <input id="recruiter-login-submit" type="submit" value="LOGIN" />
      </form>
      <Link to="/recruiter/register">Create account</Link>
    </div>
  );
}
