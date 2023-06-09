import "./RecruiterJob.css";

export default function RecruiterJob ({object}) {
    const {title, company, users, id} = object;
    return(
        <div className="recruiter-job">
            <p className="recruiter-job-title">{title}</p>
            <p>{company}</p>
            <p>Applicants({users.length})</p>
        </div>
    )
}