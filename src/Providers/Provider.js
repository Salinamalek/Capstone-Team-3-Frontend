import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import Nav from "../Components/App/Nav";
import Footer from "../Components/App/Footer";

export const ContextData = createContext();
export function useContextProvider() {
  return useContext(ContextData);
}

const API = process.env.REACT_APP_API_URL;

function Provider({ children }) {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isRecruiterAcc, setIsRecruiterAcc] = useState(false);
  // for the time being we will assign a fixed userID when clicking login
  const [userID, setUserID] = useState(1);
  const [recruiterID, setRecruiterID] = useState(null);
  // authToken will be manually hardcoded for now
  const [authToken, setAuthToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRtQGVtYWlsLmNvbSIsImlhdCI6MTY4NjI4ODg3MywiZXhwIjoxNjg4ODgwODczfQ.KHdqmJzmJlkPRY36hdBcJkaVbEfGyq8D9TF-XJNCAqo"
  );
  const [accessRegTwo, setAccessRegTwo] = useState(false)

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  axios.defaults.headers.common["authorization"] = `Bearer ${authToken}`;

  return (
    <div className={`${theme}`}>
      <ContextData.Provider
        value={{
          API,
          axios,
          isSignedIn,
          setIsSignedIn,
          userID,
          setUserID,
          setAuthToken,
          theme,
          setTheme,
          isRecruiterAcc,
          setIsRecruiterAcc,
          recruiterID,
          setRecruiterID,
          accessRegTwo,
          setAccessRegTwo
        }}
      >
        <Nav />
        {children}
        <Footer />
      </ContextData.Provider>
    </div>
  );
}

export default Provider;
