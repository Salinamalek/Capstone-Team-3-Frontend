import { Link } from "react-router-dom";
import SkillsComponent from "./SkillsComponent";
import "./JobsCard.css";

function JobsCard({ jobObj }) {
  const { title, company, skill_name, skill_id, full_remote, city, job_id } =
    jobObj;

  // const combineSkills = skill_id.map((el, i) => {
  //     return { [el] : skill_name[i]}
  // })
  const combineSkills = skill_id.map((el) => el);

  return (
    <Link to={`/jobs/${job_id}`}>
      <div className="job-card">
        <span className="job-card-title">{title}</span>
        <section className="job-card-company">
          <span>{company}</span>
          {full_remote && <span className="job-card-remote">REMOTE</span>}
        </section>
        <span className="job-card-city">{city}</span>
        <span className="job-card-divider"></span>
        <section className="job-card-skills">
          <SkillsComponent skillsArr={combineSkills} justList={true} />
        </section>
      </div>
    </Link>
  );
}

export default JobsCard;
