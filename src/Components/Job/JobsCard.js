import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { HiOutlineBuildingOffice2 } from "react-icons/hi2"
import { SiNodedotjs, SiJavascript, SiReact, SiExpress } from "react-icons/si"
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from"react-icons/ai"
import "./JobsCard.css"


function JobsCard({jobObj}) {
   const { title, company, skill_name, full_remote, city, job_id} = jobObj


   return (
       <Link to ={`/jobs/${job_id}`}>
       <div className='job-card'>
           <span className="job-card-title">{title}</span>
           <section className='job-card-company'>
               <span>{company}</span>
                   {
                       full_remote &&
                       <span className='job-card-remote'>
                           REMOTE
                       </span>
                   }
              
           </section>
           <span className='job-card-city'>
               {city}
           </span>
           <span className='job-card-divider'></span>
           <section className="job-card-skills">               
                   {
                       skill_name.map(el => {
                           if(el.toLowerCase() === "express"){
                               return <SiNodedotjs
                               key ={uuidv4()}
                               size= {"23px"}
                               color={"#3c873a"} />
                           }
                           if(el.toLowerCase() === "react"){
                               return <SiReact
                               key ={uuidv4()}
                               size= {"23px"}
                               color={"#61DBFB"}
                               style={{backgroundColor: "black"}}/>
                           }
                           if(el.toLowerCase() === "javascript"){
                               return <SiJavascript
                               key ={uuidv4()} 
                               size= {"23px"}
                               color ={"#f0db4f"}
                               style={{backgroundColor: "black"}} />
                           }
                       })
                   }
              
           </section>
       </div>
       </Link>
   
   );
}


export default JobsCard;