import { useContext, createContext, useState, useEffect } from "react";
import { useContextProvider } from "./Provider.js";
import { useSkillProvider } from "./SkillProvider.js";
import { useParams } from "react-router-dom";
import { convertTasks } from "../Components/Job/Functions/JobFunctions.js";
import { convertSkills } from "../Components/Job/Functions/SkillsFunctions.js";

export const JobContextData = createContext();
export function useJobProvider() {
  return useContext(JobContextData);
}

function JobProvider({ children }) {
  const { API, axios, userID } = useContextProvider();
  const { allSkillIDs} = useSkillProvider()
  const { jobID } = useParams();
  const [jobs, setJobs] = useState([]);
  const [searchResult, setSearchResult] = useState([])
  const [recruiterID, setRecruiterID] = useState(1)
  const [editJobForm, setEditJobForm] = useState({})
/*   {
    jobDetails : {
      title: "",
      company: "",
      city: "",
      details: "",
      full_remote: "",
      task: ["", ""],
      recruiter_id: recruiterID
    },
    skills : []
  } */
  
  const [access, setAccess] = useState(false)
  const [isRecruiter, setIsRecruiter] = useState(true)
  const [recruiterJobs, setRecruiterJobs] = useState([])

  useEffect(() => {
    axios
      .get(`${API}/jobs`)
      .then(({ data }) => {
        setJobs(data)
        setSearchResult(data)
      })
      .catch((error) => console.log(error));

      if(recruiterID){
        axios.get(`${API}/recruiters/${recruiterID}`)
        .then(({data}) => setRecruiterJobs(data["jobs_posted"]))
        .catch(err => console.log(err))
      }

      if(jobID){
        axios.get(`${API}/jobs/${jobID}`)
        .then(({data}) => {
          console.log(data)
          const {title, company, city, details, full_remote, recruiter_id, tasks, skills} = data
          setEditJobForm({
            jobDetails : {
              title: title ,
              company: company,
              city: city,
              details: details,
              full_remote: full_remote,
              task: convertTasks(tasks),
              recruiter_id: recruiterID
            },
            skills : convertSkills(skills)
          })

          if(recruiter_id === recruiterID){
            setAccess(true)
          }
        } )
      }
    
  }, [recruiterID, jobID]);

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
        recruiterJobs,
        editJobForm,
        setEditJobForm,
      }}
    >
      {children}
    </JobContextData.Provider>
  );
}

export default JobProvider;
