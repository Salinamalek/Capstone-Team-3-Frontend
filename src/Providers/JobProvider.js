import { useContext, createContext, useState, useEffect } from "react";
import { useContextProvider } from "./Provider.js";
import { useParams } from "react-router-dom";

export const JobContextData = createContext();
export function useJobProvider() {
  return useContext(JobContextData);
}

function JobProvider({ children }) {
  const { API, axios } = useContextProvider();
  const [jobs, setJobs] = useState([]);
  const [jobDetails, setJobDetails] = useState({});
  const [tasks, setTasks] = useState([]);
  const [skillIdArr, setSkillIdArr] = useState([]);
  const { jobID } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/jobs`)
      .then(({ data }) => setJobs(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <JobContextData.Provider
      value={{
        API,
        axios,
        jobID,
        jobs,
      }}
    >
      {children}
    </JobContextData.Provider>
  );
}

export default JobProvider;
