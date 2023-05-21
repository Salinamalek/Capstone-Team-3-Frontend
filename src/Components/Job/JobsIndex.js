import { useState, useEffect } from "react";
import { useJobProvider } from "../../Providers/JobProvider.js";
import { v4 as uuidv4 } from 'uuid';
import JobsCard from "./JobsCard";
import SearchBar from "./SearchBar";
import "./JobsIndex.css"


function JobsIndex() {
   const { API, axios, jobs } = useJobProvider()

   // jobs provider needed for searchbar/ filter bar to have cascade access for all jobs axios call

   return (
       <div className="jobsIndex">
           <h2
           >Jobs Waiting For You</h2>
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