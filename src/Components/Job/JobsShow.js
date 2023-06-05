import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useJobProvider } from "../../Providers/JobProvider";
import SkillsComponent from "./SkillsComponent";
import { convertDate } from "./Functions/JobFunctions";
import { convertSkills } from "./Functions/SkillsFunctions";
import { jobCompany, jobLocation, jobApplied } from "./Data/Icons";
import { GrEdit } from "react-icons/gr";
import { TfiAngleLeft } from "react-icons/tfi";
import "./JobsShow.css";

function JobsShow() {
  const {
    API,
    axios,
    jobID,
    userID,
    recruiterID,
    access,
    setAccess,
    isRecruiter,
  } = useJobProvider();
  const navigate = useNavigate();
  const [jobDetails, setJobDetails] = useState({});
  const [skillIdArr, setSkillIdArr] = useState([]);
  const [reload, setReload] = useState(false);
  const [applied, setApplied] = useState(false);

  function applyClick() {
    applyToJob();
  }
  function appliedClick() {
    navigate("/user");
  }
  function recruiterView() {
    navigate(`/jobs/${jobID}/edit`);
  }

  const applyButtonClick =
    !access && isRecruiter
      ? null
      : isRecruiter
      ? () => recruiterView()
      : applied
      ? () => appliedClick()
      : () => applyClick();

  const appliedButtonView =
    !access && isRecruiter
      ? null
      : isRecruiter
      ? "EDIT"
      : !applied
      ? "APPLY"
      : "APPLIED";

  const appliedButtonClass = isRecruiter
    ? "job-show-header-apply job-show-edit"
    : !applied
    ? "job-show-header-apply"
    : "job-show-header-applied";

  function applyToJob() {
    const obj = {
      user_id: userID,
      job_id: jobID,
    };
    axios
      .post(`${API}/user-jobs`, obj)
      .then(() => setReload(!reload))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    axios
      .get(`${API}/user-jobs/${userID}`)
      .then(({ data }) => {
        const match = data.find(({ id }) => id === +jobID);
        setApplied(match);
      })
      .catch((err) => console.log(data));

    axios
      .get(`${API}/jobs/${jobID}`)
      .then(({ data }) => {
        data["recruiter_id"] === recruiterID
          ? setAccess(true)
          : setAccess(false);

        setJobDetails(data);
        console.log(data.skills, "get")
        setSkillIdArr(convertSkills(data.skills));
      })
      .catch((err) => console.log(err));
  }, [reload, jobID, skillIdArr.length]);

  return (
    <div className="job-show">
      <section className="job-show-header">
        <TfiAngleLeft
          className="job-show-back"
          size={"25px"}
          onClick={() => navigate(-1)}
        />
        <h1>{jobDetails.title}</h1>
        <div className="job-show-header-details">
          <span className="job-show-company">
            {jobCompany}
            <span>{jobDetails.company}</span>
          </span>
          <span className="job-show-location">
            {jobLocation}
            <span>{jobDetails.city}</span>
          </span>
        </div>
        <hr />
        {jobDetails.full_remote && (
          <span className="job-show-remote">
            <span>REMOTE</span>
          </span>
        )}
        <button onClick={applyButtonClick} className={appliedButtonClass}>
          <span>
            {appliedButtonView}
            {isRecruiter && access && (
              <GrEdit size={"25px"} color={"#ffde59"} />
            )}
          </span>
        </button>
      </section>

      <SkillsComponent skillsArr={skillIdArr} justList={true} />

      <section className="job-show-details">
        <div className="job-show-description">
          <span className="job-show-label">Description:</span>
          <span>{jobDetails.details}</span>
        </div>

        <div className="job-show-description">
          <span className="job-show-label">Tasks:</span>
          <span className="job-show-role-list">
            {jobDetails.tasks &&
              jobDetails.tasks.split("__TASKBREAK__").map((el) => {
                if (el) {
                  return (
                    <li key={uuidv4()}>
                      <span>{el}</span>
                    </li>
                  );
                }
              })}
          </span>
        </div>
      </section>

      {!applied || isRecruiter ? (
        <button
          onClick={applyButtonClick}
          className={isRecruiter && !access ? "hide" : "job-show-apply"}
        >
          {appliedButtonView}
        </button>
      ) : (
        <div className="job-show-applied">
          {jobApplied}
          <span onClick={applyButtonClick}>
            APPLIED ON {convertDate(applied["date_applied"])}
          </span>
        </div>
      )}
    </div>
  );
}

export default JobsShow;
