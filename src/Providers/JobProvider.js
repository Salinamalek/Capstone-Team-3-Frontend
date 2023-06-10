import { useContext, createContext, useState, useEffect } from "react";
import { useContextProvider } from "./Provider.js";
import { useParams } from "react-router-dom";

export const JobContextData = createContext();
export function useJobProvider() {
  return useContext(JobContextData);
}
const TASK = process.env.REACT_APP_TASK_BREAK

function JobProvider({ children }) {
  const { API, axios, userID, isRecruiterAcc, isSignedIn, setIsRecruiterAcc, recruiterID, setRecruiterID } = useContextProvider();
  const { jobID } = useParams();
  const [jobs, setJobs] = useState([]);
  const [searchResult, setSearchResult] = useState([])
  const [access, setAccess] = useState(!isSignedIn)
  const [recruiterJobs, setRecruiterJobs] = useState([])

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

  useEffect(() => {
    if(recruiterID){
      axios.get(`${API}/recruiters/${recruiterID}`)
      .then(({data}) => {
        setRecruiterJobs(data["jobs_posted"])})
      .catch(err => console.log(err))
    }
  }, [recruiterID])


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
        TASK,
        recruiterID,
        setRecruiterID,
        access,
        setAccess,
        isRecruiterAcc,
        recruiterJobs,
        isSignedIn,
        setIsRecruiterAcc
      }}
    >
      {children}
    </JobContextData.Provider>
  );
}

export default JobProvider;
