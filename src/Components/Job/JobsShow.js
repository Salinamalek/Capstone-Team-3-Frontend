import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContextProvider } from "../../Providers/Provider";
import { v4 as uuidv4 } from 'uuid';
import SkillsComponent from "./SkillsComponent";
import { TfiAngleLeft } from "react-icons/tfi"
import { MdWorkOutline } from "react-icons/md"
import { HiOutlineBuildingOffice2 } from "react-icons/hi2"
import { GoLocation} from "react-icons/go"
import "./JobsShow.css"




function JobsShow() {
   const { API, axios } = useContextProvider()
   const {jobID} = useParams()
   const navigate = useNavigate()
   const [jobDetails, setJobDetails] = useState({})
   const [tasks, setTasks] = useState([])
   const [skillIdArr, setSkillIdArr] = useState([])
   // send skills array with id numbers!


   useEffect(() => {
       axios.get(`${API}/jobs/${jobID}`)
       .then(({data}) => {
           setJobDetails(data)
           const extractSkills = data.skills.map(obj => +Object.keys(obj)[0])
           setSkillIdArr(extractSkills)
       })
       .catch(err => console.log(err))
   }, [])


   return (
       <div className="job-show">
           <section className="job-show-header">
               <TfiAngleLeft
               size={"25px"}
               onClick={() => navigate("/jobs")} />
               {/* <MdWorkOutline className= "job-show-header-icon" color={"#FFDE59"} /> */}
               <h1><span>{jobDetails.title}</span></h1>
               <div className="job-show-header-details">
               <span className="job-show-company">
                <HiOutlineBuildingOffice2 size={"20px"} color={"#FFDE59"}/>
                <span>{jobDetails.company}</span>
                </span>
               <span className="job-show-location">
                <GoLocation size={"20px"} color={"#FFDE59"} />
                <span>{jobDetails.city}</span>
                </span>
               </div>
              
               <hr/>
               {
                  jobDetails.full_remote &&
                  <span className="job-show-remote"><span>REMOTE</span></span>
               }
               <button className="job-show-header-apply">APPLY</button>
           </section>
          
           <SkillsComponent
           skillsArr={skillIdArr}
           justList={true}/>
        
           <section className="job-show-details">
               <div className="job-show-description">
                   <span className="job-show-label">Description:</span>
                   <span>{jobDetails.details}</span>
               </div>
              
               <div className="job-show-description">
                   <span className="job-show-label">Tasks:</span>
                   <span className="job-show-role-list">
                       {
                       jobDetails.tasks &&
                       jobDetails.tasks.split(".").map(el => {
                           if(el){
                               return <li key = {uuidv4()}>
                                   <span>{el}</span>
                               </li>
                           }
                       })
                       }
                   </span>
               </div>
             
           </section>
  
           <button className="job-show-apply">
               Apply
           </button>
       </div>
   );
}


export default JobsShow;