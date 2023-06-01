import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useContextProvider } from "../../Providers/Provider.js";
import { useLoginProvider } from "../../Providers/LoginProvider.js";
import SkillsComponent from '../Job/SkillsComponent.js';
import './RegisterComponent2.css'

const RegisterComponent2 = () => {
  const {
    hasUserSubmitted,
    setHasUserSubmitted,
    userSubmitInfo,
    setIsSignedIn,
    setUserSubmitInfo,
    userID,
    setUserID,
    authToken,
    setAuthToken
  } = useLoginProvider();
  const { API } = useContextProvider();
  const [error, setError] = useState('');
  const [skillsArr, setSkillsArr] = useState([])
  const [userDetails, setUserDetails] = useState({
    first_name: '',
    last_name: '',
    education: '',
    bio: '',
    project_one: 'http://projectone.com',
    project_two: 'http://projecttwo.com'
  });

  const handleSkills = (e) => {
    const skillId = +e.target.id;
    if (skillsArr.length < 4 && !skillsArr.includes(skillId)) {
      // Maximum limit reached, do not allow adding more skills
      setSkillsArr([...skillsArr,skillId])
      return;
    } else {
      setSkillsArr(skillsArr.filter((skill) => skill !== skillId))
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: value
    }));
  };

  const toggleSignOn = () => {
    setHasUserSubmitted(false);
  };

  return (
    <div className='login'>
      {hasUserSubmitted && (
        <div className='user_details_form'>
          <h1>User Details</h1>
          <form>
            <label>Biography:</label>
            <textarea rows={"5"} cols={40}/>
            {/* <label htmlFor='bio'>Biography:</label> */}
            {/* <input type='text' id='biography' name='biography' value={userDetails.project_two} onChange={handleInputChange}/> */}

            <label htmlFor='project_one'>Project One:</label>
            <input type='text' id='project_one' name='project_one' value={userDetails.project_one} onChange={handleInputChange} />

            <label htmlFor='project_two'>Project Two:</label>
            <input type='text' id='project_two' name='project_two' value={userDetails.project_two} onChange={handleInputChange} />
            <SkillsComponent checkbox={true} checkedArr={skillsArr} checkBoxHandle={handleSkills} />
          </form>
        </div>
      )}
      {hasUserSubmitted && <>{authToken}</>}
      {hasUserSubmitted && <>{userID}</>}
      {hasUserSubmitted && <>{userSubmitInfo.login.password}</>}
      {hasUserSubmitted && <>{userSubmitInfo.login.email}</>}
      {hasUserSubmitted && <button onClick={toggleSignOn}>RESET REGISTRATION</button>}
    </div>
  );
};

export default RegisterComponent2;

