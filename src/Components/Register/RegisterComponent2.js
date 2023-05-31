import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useContextProvider } from "../../Providers/Provider.js";
import { useLoginProvider } from "../../Providers/LoginProvider.js";


const RegisterComponent2 = () => {
    const { hasUserSubmitted, setHasUserSubmitted, userSubmitInfo, setUserSubmitInfo, userID, setUserID, authToken, setAuthToken } = useLoginProvider();  
    const { API } = useContextProvider();  
    const [error, setError] = useState('');


    

    // logging in with loginProvider info

    

    // on comp load, we gonna log in with the login object data,
        // go back to registercomp1 and on submit store loginObject inside of a state in login provider

    // time to login

    // store the token inside of the userInfo object
    // store the id inside of the userInfo object
    // create the form that will do a put request to update rest of users profile with their data
    // have button that lets user naviagte to the main side of the app if they wanna add this info later

    console.log(hasUserSubmitted)
    console.log(userSubmitInfo)
    // check if 

    if (hasUserSubmitted){

        const loginObject = {
            email: userSubmitInfo.login.email,
            password: userSubmitInfo.login.password
          };

        axios
        .post(`${API}logins`, loginObject)
        .then((response) => {
        //   setLoginResponse(response)
          console.log('response:', loginResponse);
          console.log(response)
          console.log(response.data.token)
          const AUTH_TOKEN = response.data.token
          const USER_ID = response.data.user_id

          setAuthToken(AUTH_TOKEN)
          setUserID(USER_ID)

          // navigate(`/user/${response.data.user_id}`)
          setError('')
        })
        .catch((error) => {
          console.error('Error:', error);
          setError('An error occurred during login.');
        });

    }

    const logUserIn = (userSubmitInfo) => {
        
    }

    const toggleSignOn = () => {
        setHasUserSubmitted(false)
    }

    return (
        <div>
            {hasUserSubmitted && <>{authToken}</>}
            {hasUserSubmitted && <>{userID}</>}
            {hasUserSubmitted && <>{userSubmitInfo.login.password}</>}
            {hasUserSubmitted && <>{userSubmitInfo.login.email}</>}
            {hasUserSubmitted && <button onClick={toggleSignOn}>RESET REGISTRATION</button>}
            {hasUserSubmitted && <></>}
            
        </div>
    );
};

export default RegisterComponent2;