import { useState, useEffect } from "react"
import { useJobProvider } from "../../Providers/JobProvider"
import {v4 as uuidv4} from "uuid"
import ApplicantCard from "./ApplicantCard";
import { jobCompany, jobLocation } from "../Job/Data/Icons";
import { TfiAngleLeft } from "react-icons/tfi";
import "./Applicants.css"

export default function Applicants() {
    const {recruiterJobs, recruiterID, access, jobID} = useJobProvider()
    const [applicants, setApplicants] = useState([])
    const [thisJob, setThisJob] = useState({})

    useEffect(() => {
        const filter = recruiterJobs.find(({id}) => id === +jobID )
        setApplicants(filter.users)
        setThisJob(filter)
    }, [jobID, recruiterJobs.length])

    return (
        <div className="job-applicant-page">
            <section className="job-applicant-header">
                <TfiAngleLeft onClick={() => navigate(-1)} size={"30px"} />
                <h2 className="applicant-title">{thisJob.title}</h2>
                <span className="applicant-company">{jobCompany}{thisJob.company}</span>
                <span className="applicant-city">{jobLocation}{thisJob.city}</span>
                <span className="applicant-remote">{thisJob.full_remote && "REMOTE"}</span>
            </section>

            <section className="applicant-list">
                <h2>Candidates</h2>
                {
                    applicants.map(obj => 
                        <ApplicantCard 
                        key={uuidv4()}
                        obj ={obj}
                        />)
                }
            </section>
            
        </div>
    )
}