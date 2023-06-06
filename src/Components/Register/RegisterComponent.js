import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./RegisterComponent.css"
import { useLoginProvider } from "../../Providers/LoginProvider.js";



const RegisterComponent = () => {

    // condense the register comp. into a single view so theres no scroll
    // put each form item into a gridbox, label is column one, input box is column 2
    // smaller font, less margin / spacing
    // make skills list into a 3x3 grid / table
    // post more skills into db to see how layout ( or hard code an array with more skills)
    // error message more embolding

    // instead of multiple flex boxes for eaxch field, make one single gridbox for the whole form
    // make input boxes white
    // make header space for register page take up less space ( more center once you arrive )
    // make the font red/ style the error to look actualy red or urgent so can distinguish between header / helper text
    
    const [error, setError] = useState('');
    const [errorMessage, setErrorMessage] = useState("");
    const [errorMessages, setErrorMessages] = useState([])
    const [userDetails, setUserDetails] = useState ({
        first_name: "",
        last_name: "",
        education: "",
        bio: "biography",
        project_one: "http://projectone.com",
        project_two: "http://projecttwo.com"
    })
    const [loginDetails, setLoginDetails] = useState ({
        email: "",
        password: ""
    })
    const [passwordHints, setPasswordHints] = useState([]);
    const [isGoodUserResponse, setIsGoodUserResponse] = useState(false)
    const [userSkills, setUserSkills] = useState([]);
    const [skillOptions, setSkillOptions] = useState([]);
    const API = process.env.REACT_APP_API_URL
    const { hasUserSubmitted, setHasUserSubmitted, userSubmitInfo, setUserSubmitInfo, setAuthToken, authToken, setUserID, userID } = useLoginProvider();  


    const handleUserDetailsChange = (event) => {
        setUserDetails({ ...userDetails, [event.target.id]: event.target.value})
    }

    const handleLoginDetailsChange = (event) => {
        setLoginDetails({ ...loginDetails, [event.target.id]: event.target.value})
        const hints = checkPassword(event.target.value);
        setPasswordHints(hints);
    }

    const checkPassword = (password) => {
        let hints = [''];
        if (hints.length < 1){

        }

        if (password.length < 5) {
          hints.push("at least 5 characters long.");
        }
        if (!/[A-Z]/.test(password)) {
          hints.push("at least one uppercase character.");
        }
        if (!/[a-z]/.test(password)) {
          hints.push("at least one lowercase character.");
        }
        if (!/[!@#$%^&*()\-=_+{}[\]:;'",.<>/?\\|]/.test(password)) {
          hints.push("at least one special character.");
        }
        if (!/\d/.test(password)) {
          hints.push("at least one number.");
        }
        return hints;
      };
    

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
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Perform registration logic here
        // Here lies axios call to register

        // after submission, use loginProvider to update the hasUserSubmmited state to true.

        // on the registerComponent 2 component, have an useEffect that is checking hasUserSubmitted state
        // if true, render out the contents of registerComponent, if not, stay the same.

        const loginObject = {
            profile: userDetails,
            login: loginDetails,
            skills: userSkills
        }

        await axios.post(`${API}/users`, loginObject)
        .then(response => {
            console.log('response:', response)
            setIsGoodUserResponse(true)
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
        setUserSubmitInfo(loginObject)
        
     

        // NOTE / ! \ need to implement error casing for when user has not registered and gotten a good response from the server

        //send the users info to login provider

        setUserSubmitInfo(loginObject)


        console.log(error, 'before login provider update')
        // update our loginProvider state
        if(!error){
            setHasUserSubmitted(true);
            console.log(hasUserSubmitted,'< has user submitted?');
        }

        console.log(loginObject)
        // Reset the form
        setUserDetails({
            first_name: "",
            last_name: "",
            education: "",
            bio: "biography",
            project_one: "http://projectone.com",
            project_two: "http://projecttwo.com"
        })
        setLoginDetails({
            email: "",
            password: ""
        })
        setUserSkills([]);

    };

    useEffect(() => {

        // const loginObject = {
        //     profile: userDetails,
        //     login: loginDetails,
        //     skills: userSkills
        // }
        
        // const loginObject2 = {
        //     email: loginDetails.login.email,
        //     password: loginObject.login.password
        //   };
        console.log(userSubmitInfo.login)

        if(isGoodUserResponse){
            axios
            .post(`${API}/logins`, userSubmitInfo.login)
            .then((response) => {
              console.log('response:', response);
              console.log(response.data.token);
              const USER_ID = response.data.user_id;
  
              setAuthToken(response.data.token);
              setUserID(USER_ID);
              setIsSignedIn(true)
              setError('');
            })
            .catch((error) => {
              console.error('Error:', error);
              setError('An error occurred during login.');
            });
        }

    },[isGoodUserResponse])

    // update our loginProvider state

    // useEffect(() => {
    //     axios.get(`${API}/skills`)
    //         .then(response => {
    //             setSkillOptions(response.data);
    //             // console.log(response.data)
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }, []);
    
    return (
        <>
         {!hasUserSubmitted && <>
            <div className='register_card'>
            <h1>Register</h1>
            {/* <hr/> */}
            
            <p>Please fill in this form to create an account.</p>
            {/* <hr></hr> */}
            
            <form className="register-form" onSubmit={handleSubmit}>
            {error && 
            <div className="error-login"><p>{error}</p><p>{errorMessage}</p></div>} 
            {/* Render the error message */}

                <div className='email-field'>
                    <label className='email-label' htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={loginDetails.email}
                        onChange={handleLoginDetailsChange}
                        placeholder='email@provider.com'
                        required
                    />
                </div>
                <div className='password-field'>
                    <label className='password-label' htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={loginDetails.password}
                        onChange={handleLoginDetailsChange}
                        placeholder='*********'
                        required
                    />
                </div>
                <div className="password-hint">
                    {passwordHints.length > 1 && <p>Password must contain:</p>}
                    {passwordHints.map((hint, index) => (
                    <p key={index}>{hint}</p>
                    ))}
                </div>
                <div className='first_name-field'>
                    <label className='first_name-label' htmlFor="first_name">First Name:</label>
                    <input
                        type="text"
                        id="first_name"
                        value={userDetails.first_name}
                        onChange={handleUserDetailsChange}
                        placeholder='John'
                        required
                    />
                </div>
                <div className='last_name-field'>
                    <label className='last_name-label' htmlFor="last_name">Last Name:</label>
                    <input
                        type="text"
                        id="last_name"
                        value={userDetails.last_name}
                        onChange={handleUserDetailsChange}
                        placeholder='Smith'
                        required
                    />
                </div>
                <div className='school-field'>
                    <label htmlFor="education">Education:</label>
                    <input
                        type="text"
                        id="education"
                        value={userDetails.education}
                        onChange={handleUserDetailsChange}
                        placeholder='Pursuit'
                        required
                    />
                </div>
                {/* <div>
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
                </div> */}
                {/* <hr/> */}
                {/* <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p> */}
                
                <button type="submit" className='registerbutton'>Submit</button>
                <div className="signin">
    <p>Already have an account? <a href="/login">Sign in</a>.</p>
  </div>
            </form>
        </div>
            
            </>}
        </>
       
        
    );
};

export default RegisterComponent;

