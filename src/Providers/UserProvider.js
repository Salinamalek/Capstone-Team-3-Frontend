import { useContext, createContext, useState, useEffect } from "react";
import { useContextProvider } from "./Provider.js";
import { useNavigate } from "react-router-dom";

export const UserContextData = createContext();
export function useUserProvider() {
  return useContext(UserContextData);
}

function UserProvider({ children }) {
  const navigate = useNavigate();
  const { userID, API, axios } = useContextProvider();
  const [userProfile, setUserProfile] = useState({});
  const [userJobs, setUserJobs] = useState([]);

  useEffect(() => {
    if (userID !== undefined) {
      axios
        .get(`${API}/users/${userID}`)
        .then(({ data }) => setUserProfile(data))
        .catch((error) => {
          console.log(error);
          navigate("/not-found");
        });
      axios
        .get(`${API}/user-jobs/${userID}`)
        .then(({ data }) => setUserJobs(data))
        .catch((error) => console.log(error));
    }
  }, [userID]);

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
      }}
    >
      {children}
    </UserContextData.Provider>
  );
}

export default UserProvider;
