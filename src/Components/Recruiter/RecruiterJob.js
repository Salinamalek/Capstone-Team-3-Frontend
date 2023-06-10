import { Link } from "react-router-dom";

import "./RecruiterJob.css";

export default function RecruiterJob ({object}) {
    const {title, company, users, id} = object;
    return(
        <div className="recruiter-job">
            <Link to={`/jobs/${id}`} className="recruiter-job-title">{title}</Link>
            <p>{company}</p>
            <Link className="recruiter-job-applicants" to={`/jobs/${id}/applicants`}>Applicants({users ? users.length : "0"})</Link>
        </div>
    )
}