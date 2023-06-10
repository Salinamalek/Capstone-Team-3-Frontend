import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useJobProvider } from "../../Providers/JobProvider";
import { v4 as uuidv4 } from "uuid";
import Header from "../Job/Header.js";
import ApplicantCard from "./ApplicantCard";
import { jobCompany, jobLocation } from "../Job/Data/Icons";
import "./Applicants.css";
import { Link } from "react-router-dom";

export default function Applicants() {
  const { recruiterJobs, recruiterID, access, jobID } = useJobProvider();
  const navigate = useNavigate();
  const [applicants, setApplicants] = useState([]);
  const [thisJob, setThisJob] = useState({});

  useEffect(() => {
    const filter = recruiterJobs.find(({ id }) => id === +jobID);
    if (filter) {
      setThisJob(filter);
    }
    if (filter && filter.users) {
      setApplicants(filter.users);
    }
  }, [jobID, recruiterJobs.length]);

  return (
    <div className="job-applicant-page">
      <Header header={"Job Applicants"} />
      <section className="job-applicant-job-details">
        <Link to={`/jobs/${thisJob.id}`} className="applicant-title">
          <h2>{thisJob.title}</h2>
        </Link>
        <span className="applicant-company">
          {jobCompany}
          {thisJob.company}
        </span>
        <span className="applicant-city">
          {jobLocation}
          {thisJob.city}
        </span>
        <span className="applicant-remote">
          {thisJob.full_remote && "REMOTE"}
        </span>
      </section>

      <section className="applicant-list">
        <h3>
          {!applicants.length
            ? "No Applicants"
            : `Applicants (${applicants.length})`}
        </h3>
        {applicants.map((obj) => (
          <ApplicantCard key={uuidv4()} obj={obj} />
        ))}
      </section>

      <Link className="job-applicant-link" to={`/jobs/${thisJob.id}`}>
        VIEW JOB DETAILS
      </Link>
    </div>
  );
}
