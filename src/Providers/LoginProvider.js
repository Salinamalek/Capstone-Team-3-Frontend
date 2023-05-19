import { useContext, createContext, useState, useEffect } from "react";
import { useContextProvider } from "./Provider.js";
import { useNavigate } from "react-router-dom";

export const LoginContextData = createContext();
export function useLoginProvider() {
  return useContext(LoginContextData);
}

function LoginProvider({ children }) {
  const {
    API,
    axios,
    isSignedIn,
    setIsSignedIn,
    userID,
    setUserID,
    authToken,
    setAuthToken,
  } = useContextProvider();

  return (
    <LoginContextData.Provider
      value={{
        API,
        axios,
        isSignedIn,
        setIsSignedIn,
        userID,
        setUserID,
        authToken,
        setAuthToken,
      }}
    >
      {children}
    </LoginContextData.Provider>
  );
}

export default LoginProvider;
