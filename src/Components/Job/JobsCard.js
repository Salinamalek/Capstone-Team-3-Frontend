import { Link } from "react-router-dom";
import { convertCities } from "./Functions/JobFunctions";
import SkillsComponent from "./SkillsComponent";
import "./JobsCard.css";

function JobsCard({ jobObj }) {
  const { title, company, skill_id, full_remote, city, job_id } = jobObj;
  const skills = typeof skill_id === "number" ? [skill_id] : skill_id;
  const combineSkills = skills.map((el) => el);

  return (
    <Link to={`/jobs/${job_id}`}>
      <div className="job-card">
        <span className="job-card-title">{title}</span>
        <section className="job-card-company">
          <span>{company}</span>
          {full_remote && <span className="job-card-remote">REMOTE</span>}
        </section>
        <span className="job-card-city">{convertCities(city)}</span>
        <span className="job-card-divider"></span>
        <section className="job-card-skills">
          <SkillsComponent skillsArr={combineSkills} justList={true} />
        </section>
      </div>
    </Link>
  );
}

export default JobsCard;
