import { useContext, createContext, useState, useEffect } from "react";
import { useContextProvider } from "./Provider.js";
import { useParams } from "react-router-dom";

export const JobContextData = createContext();
export function useJobProvider() {
  return useContext(JobContextData);
}

function JobProvider({ children }) {
  const { API, axios, userID } = useContextProvider();
  const { jobID } = useParams();
  const [jobs, setJobs] = useState([]);
  const [searchResult, setSearchResult] = useState([])


  useEffect(() => {
    axios
      .get(`${API}/jobs`)
      .then(({ data }) => {
        setJobs(data)
        setSearchResult(data)
      }
      )
      .catch((error) => console.log(error));
  }, []);

  return (
    <JobContextData.Provider
      value={{
        API,
        axios,
        jobID,
        userID,
        jobs,
        setJobs,
        searchResult,
        setSearchResult,
      }}
    >
      {children}
    </JobContextData.Provider>
  );
}

export default JobProvider;
