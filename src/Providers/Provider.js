import { useContext, createContext } from "react";
import Nav from "../Components/App/Nav";
import Footer from "../Components/App/Footer";

// Destiny added axios to Provider
import axios from "axios";

export const ContextData = createContext()
export function useContextProvider(){
    return useContext(ContextData)
}

// API from .env
const API = process.env.REACT_APP_API_URL

function Provider({children}) {

    return (
        <ContextData.Provider value = {{
            API,
            axios,
        }}>
            <Nav />
            {children}
            <Footer />
        </ContextData.Provider>
    );
}

export default Provider;