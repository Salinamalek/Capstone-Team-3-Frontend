import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useContextProvider } from "../../Providers/Provider.js";
import { useLoginProvider } from "../../Providers/LoginProvider.js";
import SkillsComponent from '../Job/SkillsComponent.js';

// when submitting email on first registration page, convert all characters to lowercase
// logins on page render.. now to put skills comp in for user to select their skills
// then, put form that takes in two links for projects
// and lastly a text area for their

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

//   useEffect(() => {
//     if (hasUserSubmitted) {
//       setTimeout(() => {
//         const loginObject = {
//           email: userSubmitInfo.login.email,
//           password: userSubmitInfo.login.password
//         };

//         axios
//           .post(`${API}logins`, loginObject)
//           .then((response) => {
//             console.log('response:', response);
//             console.log(response.data.token);
//             const USER_ID = response.data.user_id;

//             setAuthToken(response.data.token);
//             setUserID(USER_ID);
//             setIsSignedIn(true)
//             setError('');
//           })
//           .catch((error) => {
//             console.error('Error:', error);
//             setError('An error occurred during login.');
//           });
//       }, 100); // Delay of 2 second (2000 milliseconds)
//     }
//   }, [hasUserSubmitted, userSubmitInfo, API, setAuthToken, setUserID]);

  const toggleSignOn = () => {
    setHasUserSubmitted(false);
  };

  return (
    <div>
        <div className='user_details_form'>
            <h1>User Details</h1>
        </div>
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
