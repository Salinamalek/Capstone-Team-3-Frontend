import { useContext, createContext } from "react";
import Nav from "../Components/App/Nav";
import Footer from "../Components/App/Footer";

export const ContextData = createContext()
export function useContextProvider(){
    return useContext(ContextData)
}

function Provider({children}) {

    return (
        <ContextData.Provider value = {{
    
        }}>
            <Nav />
            {children}
            <Footer />
        </ContextData.Provider>
    );
}

export default Provider;