import { useState, useEffect } from "react";
import { useJobProvider } from "../../Providers/JobProvider.js";
import { v4 as uuidv4 } from 'uuid';
import JobsCard from "./JobsCard";
import SearchBar from "./SearchBar.js";
import "./JobsIndex.css"


function JobsIndex() {
   const { jobs, searchResult } = useJobProvider()

   // jobs provider needed for searchbar/ filter bar to have cascade access for all jobs axios call

   return (
       <div className="jobsIndex">
           <h2></h2>
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