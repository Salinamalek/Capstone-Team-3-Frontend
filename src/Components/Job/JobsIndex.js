import { useState, useEffect } from "react";
import { useContextProvider } from "../../Providers/Provider";
import { v4 as uuidv4 } from 'uuid';
import JobsCard from "./JobsCard";
import SearchBar from "./SearchBar";
import "./JobsIndex.css"


function JobsIndex() {
   const { API, axios } = useContextProvider()
   // jobs provider needed for searchbar/ filter bar to have cascade access for all jobs axios call
   const [jobs, setJobs] = useState([])




   useEffect(() => {
       axios.get(`${API}/jobs`)
       .then(({data}) => setJobs(data))
       .catch((err) => console.log(err))
   }, [])


   return (
       <div className="jobsIndex">
           <h2>Jobs Waiting For You</h2>
           <SearchBar />




           {
               jobs.map(obj =>
               <JobsCard
               key = {uuidv4()}
               jobObj = {obj}  />
               )
           }
       </div>
   );
}


export default JobsIndex;