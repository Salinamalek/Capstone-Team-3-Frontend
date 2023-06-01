import React, { useState } from 'react';
import axios from 'axios';
import { useContextProvider } from "../../Providers/Provider.js";
import { useLoginProvider } from "../../Providers/LoginProvider.js";
import { useNavigate } from 'react-router-dom';
import "./LoginComponent.css"

const LoginComponent = () => {
  const { hasUserSubmitted, setUserSubmitted } = useLoginProvider();  
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: ''
  });
  const { API } = useContextProvider();  
  const [error, setError] = useState('');
  const [errorMessage, setErrorMessage] = useState("")
  const [loginResponse, setLoginResponse] = useState({})
  const navigate = useNavigate()

  const handleLoginDetailsChange = (event) => {
    setLoginDetails({ ...loginDetails, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const loginObject = {
      email: loginDetails.email,
      password: loginDetails.password
    };

    axios
      .post(`${API}/logins`, loginObject)
      .then((response) => {
        setLoginResponse(response)
        console.log('response:', loginResponse);
        console.log(response)
        console.log(response.data.token)
        const AUTH_TOKEN = response.data.token
        localStorage.setItem('token',response.data.token)
        localStorage.setItem('user_id',response.data.user_id)
        // navigate(`/user/${response.data.user_id}`)
        setError('')
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('An error occurred during login.');
        setErrorMessage(error.response.data.error)
      });

      
      // get users name and populate in localStorage for navBar

    // Reset the form
    setLoginDetails({
      email: '',
      password: ''
    });
  };
  
  console.log(hasUserSubmitted)
  console.log()

  return (
    <div className="login">
      <h1>Sign-In</h1>
      <p>Please enter your login details below to login.</p>
      <hr/>
      {error && 
      <div className="error-login"><p>{error}</p><p>{errorMessage}</p><hr/></div>} 
      {/* Render the error message */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={loginDetails.email}
            onChange={handleLoginDetailsChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={loginDetails.password}
            onChange={handleLoginDetailsChange}
          />
        </div>
        <button className='loginbutton' type="submit">Submit</button>
      </form>
      <br />
      <div className='registeracc'>
      <p>
        click <a href="/register">here</a> to make a new account!
      </p>
      </div>
    </div>
  );
};

export default LoginComponent;

