import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useContextProvider } from "../../Providers/Provider.js";
import { useLoginProvider } from "../../Providers/LoginProvider.js";
import { useNavigate } from 'react-router-dom';
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
    biography: '',
    project_one: 'http://projectone.com',
    project_two: 'http://projecttwo.com'
  });
  const navigate = useNavigate()

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

  const handleSubmit = async (event) => {
    event.preventDefault()

    

    const updateObject = {
      profile: {
        first_name: userSubmitInfo.profile.first_name,
        last_name: userSubmitInfo.profile.last_name,
        education: userSubmitInfo.profile.education,
        bio: userDetails.biography,
        project_one: userDetails.project_one,
        project_two: userDetails.project_two
      },
      skills: skillsArr
    }

    console.log(updateObject)

    axios.put(`${API}/users/${userID}`, updateObject)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.error("Error:", error)
    })
    navigate(`/users/${userID}`)


    // gather data from form,
    // gather data from skills state
    // set up the put axios call
    // url of axios call needs userID from localstorage
  }

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
    
    <>
      {hasUserSubmitted && (
        <div className='login'>
        <div className='user_details_form'>
          <h1>User Details</h1>
          <form onSubmit={handleSubmit}>
            <label>Biography:</label>
            <textarea id='biography' name='biography' value={userDetails.biography} onChange={handleInputChange} rows={"5"} cols={40}/>
            {/* <label htmlFor='bio'>Biography:</label> */}
            {/* <input type='text' id='biography' name='biography' value={userDetails.project_two} onChange={handleInputChange}/> */}

            <label htmlFor='project_one'>Project One:</label>
            <input type='text' id='project_one' name='project_one' value={userDetails.project_one} onChange={handleInputChange} />

            <label htmlFor='project_two'>Project Two:</label>
            <input type='text' id='project_two' name='project_two' value={userDetails.project_two} onChange={handleInputChange} />
            <SkillsComponent checkbox={true} checkedArr={skillsArr} checkBoxHandle={handleSkills} />
            <button type="submit" className='registerbutton'>Submit</button>
          </form>
        </div>
        </div>
      )}



      {/* {hasUserSubmitted && <>{authToken}</>}
      {hasUserSubmitted && <>{userID}</>}
      {hasUserSubmitted && <>{userSubmitInfo.login.password}</>}
      {hasUserSubmitted && <>{userSubmitInfo.login.email}</>}
      {hasUserSubmitted && <button onClick={toggleSignOn}>RESET REGISTRATION</button>} */}
          </>
  );
};

export default RegisterComponent2;

