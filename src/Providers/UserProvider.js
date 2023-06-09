import { useContext, createContext, useState, useEffect } from "react";
import { useContextProvider } from "./Provider.js";
import { useNavigate } from "react-router-dom";

export const UserContextData = createContext();
export function useUserProvider() {
  return useContext(UserContextData);
}

function UserProvider({ children }) {
  const navigate = useNavigate();
  const {
    userID,
    API,
    axios,
    isSignedIn,
    setIsSignedIn,
    theme,
    accessRegTwo,
    setAccessRegTwo,
    isRecruiterAcc,
  } = useContextProvider();
  const [userProfile, setUserProfile] = useState({});
  const [editForm, setEditForm] = useState({});
  const [userSkills, setUserSkills] = useState([]);
  const [userJobs, setUserJobs] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios
      .get(`${API}/logins/${userID}`)
      .then(({ data }) => setEmail(data.email))
      .catch((error) => console.log(error));
  }, [userID]);

  useEffect(() => {
    if (isSignedIn) {
      axios
        .get(`${API}/users/${userID}`)
        .then(({ data }) => {
          setUserProfile(data);
          setEditForm(data);
          setUserSkills(data.skills["skill_ids"]);
        })
        .catch((error) => {
          console.log(error);
          navigate("/not-found");
        });
      axios
        .get(`${API}/user-jobs/${userID}`)
        .then(({ data }) => {
          const jobsSorted = data.sort((a,b) => new Date(b.date_applied) - new Date(a.date_applied))
          setUserJobs(jobsSorted)})
        .catch((error) => console.log(error));
    }
  }, [isSignedIn, userID]);

  return (
    <UserContextData.Provider
      value={{
        API,
        axios,
        userID,
        userProfile,
        setUserProfile,
        userJobs,
        setUserJobs,
        editForm,
        setEditForm,
        isSignedIn,
        setIsSignedIn,
        userSkills,
        setUserSkills,
        theme,
        accessRegTwo,
        setAccessRegTwo,
        isRecruiterAcc,
        email
      }}
    >
      {children}
    </UserContextData.Provider>
  );
}

export default UserProvider;
