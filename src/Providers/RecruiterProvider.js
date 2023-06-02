import { useContext, createContext, useState, useEffect } from "react";
import { useContextProvider } from "./Provider";

export const RecruiterContextData = createContext();
export function useRecruiterProvider() {
  return useContext(RecruiterContextData);
}

function RecruiterProvider({ children }) {
  const { API, axios, theme } = useContextProvider();
  const [recruiterID, setRecruiterID] = useState(null);
  const [recruiterData, setRecruiterData] = useState({});

  useEffect(() => {
    recruiterID
      ? axios
          .get(`${API}/recruiters/${recruiterID}`)
          .then((res) => setRecruiterData(res.data))
          .catch((error) => console.log(error))
      : null;
  }, [recruiterID]);

  return (
    <RecruiterContextData.Provider
      value={{
        recruiterID,
        setRecruiterID,
        API,
        axios,
        theme,
      }}
    >
      {children}
    </RecruiterContextData.Provider>
  );
}

export default RecruiterProvider;
