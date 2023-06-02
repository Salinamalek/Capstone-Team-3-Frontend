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
  // authToken will be manually hardcoded for now
  const [authToken, setAuthToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJvYkBlbWFpbC5jb20iLCJpYXQiOjE2ODU3MjA5MzksImV4cCI6MTY4ODMxMjkzOX0.EZ2O6jGMXV7058y5lTZPRFh8QKsCH3URtqJYbQkLHQQ"
  );

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
