import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useJobProvider } from "../../Providers/JobProvider";
import SkillsComponent from "./SkillsComponent";
import { convertDate } from "../../Functions/JobFunctions";
import { TfiAngleLeft } from "react-icons/tfi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GoLocation } from "react-icons/go";
import { BsClipboardCheck } from "react-icons/bs";
import "./JobsShow.css";

function JobsShow() {
  const { API, axios, jobID, userID } = useJobProvider();
  const navigate = useNavigate();
  const [jobDetails, setJobDetails] = useState({});
  const [skillIdArr, setSkillIdArr] = useState([]);
  const [reload, setReload] = useState(false);
  const [applied, setApplied] = useState(false);

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
    //   check if user-jobs table already has pairing
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
        setJobDetails(data);
        const extractSkills = data.skills.map((obj) => +Object.keys(obj)[0]);
        setSkillIdArr(extractSkills);
      })
      .catch((err) => console.log(err));
  }, [reload, jobID]);

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
            <HiOutlineBuildingOffice2 size={"20px"} color={"#FFDE59"} />
            <span>{jobDetails.company}</span>
          </span>
          <span className="job-show-location">
            <GoLocation size={"20px"} color={"#FFDE59"} />
            <span>{jobDetails.city}</span>
          </span>
        </div>

        <hr />
        {jobDetails.full_remote && (
          <span className="job-show-remote">
            <span>REMOTE</span>
          </span>
        )}
        <button
          onClick={!applied ? () => applyToJob() : () => navigate("/user")}
          className={
            !applied ? "job-show-header-apply" : "job-show-header-applied"
          }
        >
          {!applied ? "APPLY" : "APPLIED"}
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
              jobDetails.tasks.split(".").map((el) => {
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

      {!applied ? (
        <button onClick={() => applyToJob()} className="job-show-apply">
          Apply
        </button>
      ) : (
        <div className="job-show-applied">
          <BsClipboardCheck color={"black"} size={"40px"} />
          <span onClick={() => navigate("/user")}>
            APPLIED ON {convertDate(applied["date_applied"])}
          </span>
        </div>
      )}
    </div>
  );
}

export default JobsShow;
