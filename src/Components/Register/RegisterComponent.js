import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./RegisterComponent.css"


const RegisterComponent = () => {


   // condense the register comp. into a single view so theres no scroll
   // put each form item into a gridbox, label is column one, input box is column 2
   // smaller font, less margin / spacing
   // make skills list into a 3x3 grid / table
   // post more skills into db to see how layout ( or hard code an array with more skills)
   // error message more embolding
  
   const [error, setError] = useState('');
   const [errorMessage, setErrorMessage] = useState("");
   const [errorMessages, setErrorMessages] = useState([])
   const [userDetails, setUserDetails] = useState ({
       first_name: "",
       last_name: "",
       school: "",
       bio: "",
       project_one: "",
       project_two: ""
   })
   const [loginDetails, setLoginDetails] = useState ({
       email: "",
       password: ""
   })
   const [userSkills, setUserSkills] = useState([]);
   const [skillOptions, setSkillOptions] = useState([]);
   const API = process.env.REACT_APP_API_URL


   const handleUserDetailsChange = (event) => {
       setUserDetails({ ...userDetails, [event.target.id]: event.target.value})
   }


   const handleLoginDetailsChange = (event) => {
       setLoginDetails({ ...loginDetails, [event.target.id]: event.target.value})
   }




   const handleSkillsChange = (event) => {
       if (userSkills.includes(event.target.value)) {
           const updateduserSkills = userSkills.filter(skill => skill !== event.target.value);
           // console.log(updateduserSkills)
           setUserSkills(updateduserSkills);
           // console.log(updateduserSkills);
       } else {
           setUserSkills([...userSkills, event.target.value]);
           // console.log(userSkills);
       }
   };
  


   const handleSubmit = (event) => {
       event.preventDefault();
       // Perform registration logic here
       // Here lies axios call to register


       const loginObject = {
           profile: userDetails,
           login: loginDetails,
           skills: userSkills
       }
       axios.post(`${API}users`, loginObject)
       .then(response => {
           console.log('response:', response)
       })
       .catch(error => {
           console.error('Error:', error);
           setError('An error occurred during registration.');
           if (error.response.data.error){
               setErrorMessage(error.response.data.error)
           } else {
               setErrorMessages(error.response.data.errors)
               console.log(errorMessages)
           }
       })


       console.log(loginObject)
       // Reset the form
       setUserDetails({
           first_name: "",
           last_name: "",
           school: "",
           bio: "",
           project_one: "",
           project_two: ""
       })
       setLoginDetails({
           email: "",
           password: ""
       })
       setUserSkills([]);
   };


   useEffect(() => {
    // Destiny added / to ur Api call
       axios.get(`${API}/skills`)
           .then(response => {
               setSkillOptions(response.data);
               // console.log(response.data)
           })
           .catch(error => {
               console.log(error);
           });
   }, []);
  
   return (
       <div className='register_card'>
           <h1>Register</h1>
           <hr/>
           {error &&
           <div className="error"><p>{error}</p><p>{errorMessage}</p><hr/></div>}
           {/* Render the error message */}
           {errorMessages && errorMessages.forEach(singleError => {
               <p>{singleError.msg}</p>
           })}
           {errorMessages && <p>{errorMessages.msg}</p>}
           <p>Please fill in this form to create an account.</p>
           <hr></hr>


           <form onSubmit={handleSubmit}>
               <div>
                   <label htmlFor="email">Email:</label>
                   <input
                       type="email"
                       id="email"
                       value={loginDetails.email}
                       onChange={handleLoginDetailsChange}
                       placeholder='email@provider.com'
                       required
                   />
               </div>
               <div>
                   <label htmlFor="password">Password:</label>
                   <input
                       type="password"
                       id="password"
                       value={loginDetails.password}
                       onChange={handleLoginDetailsChange}
                       placeholder='*********'
                       required
                   />
               </div>
               <div>
                   <label htmlFor="first_name">First Name:</label>
                   <input
                       type="text"
                       id="first_name"
                       value={userDetails.first_name}
                       onChange={handleUserDetailsChange}
                       required
                   />
               </div>
               <div>
                   <label htmlFor="last_name">Last Name:</label>
                   <input
                       type="text"
                       id="last_name"
                       value={userDetails.last_name}
                       onChange={handleUserDetailsChange}
                       required
                   />
               </div>
               <div>
                   <label htmlFor="school">School</label>
                   <input
                       type="text"
                       id="school"
                       value={userDetails.school}
                       onChange={handleUserDetailsChange}
                       required
                   />
               </div>
               <div>
                   <label htmlFor="bio">Bio</label>
                   <input
                       type="textarea"
                       id="bio"
                       value={userDetails.bio}
                       onChange={handleUserDetailsChange}
                       required
                   />
               </div>
               <div>
                   <label htmlFor="project_one">Project One:</label>
                   <input
                       type="text"
                       id="project_one"
                       value={userDetails.project_one}
                       onChange={handleUserDetailsChange}
                   />
               </div>
               <div>
                   <label htmlFor="project_two">Project Two:</label>
                   <input
                       type="text"
                       id="project_two"
                       value={userDetails.project_two}
                       onChange={handleUserDetailsChange}
                   />
               </div>
               <div>
                   <label htmlFor="skillOptions">Skills:</label>
                   {skillOptions.map((skill) => (
                       <div key={skill.id}>
                       <input
                           type="checkbox"
                           id={`skill-${skill.id}`}
                           value={skill.id}
                           onChange={handleSkillsChange}
                           // checked={checked}
                       />
                       <label htmlFor={`skill-${skill.id}`}>{skill.skill_name}</label>
                       </div>
                   ))}
               </div>
               <hr/>
               <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
               <button type="submit" className='registerbutton'>Submit</button>
               <div className="signin">
   <p>Already have an account? <a href="#">Sign in</a>.</p>
 </div>
           </form>
       </div>
   );
};


export default RegisterComponent;


// DESTINY : CODE MOVED FROM NAVBAR, WILL BE USED ELSEWHERE
/* const [userSignedIn, setUserSignedIn] = useState(false);
 const [userInfo, setUserInfo] = useState({
   name: "",
   id: ""
 })

 function handleLogout() {
    localStorage.removeItem("user_id"); // Remove the user_id from localStorage
    localStorage.clear()
    setUserSignedIn(false); // Update the state to reflect the signed-out status
  }
 
   // checks to see if user is logged in
 useEffect(() => {
    if (localStorage.getItem("user_id")) {
      setUserSignedIn(true);
      setUserInfo({
        id: localStorage.getItem("user_id")
      })
      getNameForUser(userSignedIn)
    }
  }, []);
 
 
  // after userID state changes
  function getNameForUser(userSignedIn) {
    if(true){
      const user_ID = localStorage.getItem("user_id")
      const AUTH_TOKEN = localStorage.getItem('token')
      axios.defaults.headers.common["authorization"] = `Bearer ${AUTH_TOKEN}`;
       axios
        .get(`${API}users/${user_ID}`)
        .then((res) => {
          console.log(res.data)
          setUserInfo({
            id: res.data.id,
            name: res.data.first_name
          })
          localStorage.setItem("first_name",res.data.first_name)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  */