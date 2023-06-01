import { useJobProvider } from "../../Providers/JobProvider.js";
import { v4 as uuidv4 } from 'uuid';
import JobsCard from "./JobsCard";
import SearchBar from "./SearchBar.js";
import "./JobsIndex.css"


function JobsIndex() {
   const { jobs } = useJobProvider()

   return (
       <div className="jobsIndex">
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