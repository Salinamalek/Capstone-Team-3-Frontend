import { useContext, createContext, useState } from "react";
import axios from "axios";
import Nav from "../Components/App/Nav";
import Footer from "../Components/App/Footer";

export const ContextData = createContext()
export function useContextProvider(){
    return useContext(ContextData)
}

const API = process.env.REACT_APP_API_URL

function Provider({children}) {
    const [isSignedIn, setIsSignedIn] = useState(false);
    // for the time being we will assign a fixed userID when clicking login
    const [userID, setUserID] = useState(3);
    // authToken will be manually hardcoded for now
    const [authToken, setAuthToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNtQGVtYWlsLmNvbSIsImlhdCI6MTY4NDQyMjQwOSwiZXhwIjoxNjg0NTA4ODA5fQ.cN_YkDnVdplt7KYzmGo0mkf61of13uLauICHhpQnWWg")
    const [isDarkMode, setIsDarkMode] = useState(false);

    axios.defaults.headers.common["authorization"] = `Bearer ${authToken}`

    return (
        <ContextData.Provider value = {{
            API,
            axios,
            isSignedIn,
            setIsSignedIn,
            userID,
            setUserID,
            setAuthToken,
            isDarkMode,
            setIsDarkMode
        }}>
            <Nav />
            {children}
            <Footer />
        </ContextData.Provider>
    );
}

export default Provider;