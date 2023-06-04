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
  const [recruiterID, setRecruiterID] = useState(1)
  const [access, setAccess] = useState(false)
  const [isRecruiter, setIsRecruiter] = useState(true)

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
        recruiterID,
        setRecruiterID,
        access,
        setAccess,
        isRecruiter,
        setIsRecruiter,
      }}
    >
      {children}
    </JobContextData.Provider>
  );
}

export default JobProvider;
