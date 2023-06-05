import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useJobProvider } from "../../Providers/JobProvider";
import TextInput from "../Job/Inputs/TextInput";
import TextArea from "../Job/Inputs/TextArea";
import Checkbox from "../Job/Inputs/Checkbox";
import Dropdown from "../Job/Inputs/Dropdown";
import SkillsComponent from "../Job/SkillsComponent.js";
import { dropdownCities } from "../Job/Data/Cities";
import { handleSearchBar } from "../Job/Functions/SearchBarFunctions";
import { IoMdAddCircle } from "react-icons/io";
import { CgAsterisk } from "react-icons/cg";
import { TfiAngleLeft } from "react-icons/tfi";
import "./NewEditJobForm.css";

export default function NewEditJobForm({ edit }) {
  const {
    API,
    axios,
    jobID,
    recruiterID,
    setRecruiterID,
    access,
    setAccess,
    isRecruiter,
    editJobForm,
    setEditJobForm,
  } = useJobProvider();
  const navigate = useNavigate();
  console.log(editJobForm);

  const [jobDropdown, setJobDropdown] = useState("");
  const [taskArr, setTaskArr] = useState(["", ""]);
  const [jobSkillArr, setJobSkillArr] = useState(editJobForm.skills || []);
  const [jobForm, setJobForm] = useState({
    title: "",
    company: "",
    city: "",
    details: "",
    full_remote: false,
    tasks: ["", ""],
    skills: [],
    recruiter_id: recruiterID,
  });

  function handleSkills(e) {
    const id = +e.target.id;
    if (!jobSkillArr.includes(id) && jobSkillArr.length < 4) {
      setJobSkillArr([...skills, id]);
      setEditJobForm({ ...editJobForm, ["skills"]: [...jobSkillArr, id] });
    } else {
      const remove = jobSkillArr.filter((el) => el !== id);
      setJobSkillArr(remove);
      setEditJobForm({ ...editJobForm, ["skills"]: remove });
    }
  }

  function taskButton(e) {
    e.preventDefault();
    setTaskArr([...taskArr, ""]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // const obj = {
    //   jobDetails: jobForm,
    //   skills : jobForm.skills
    // };
    // obj.jobDetails.tasks = taskArr;
    // obj.jobDetails.full_remote = `${obj.jobDetails.full_remote}`;
    // obj.skills = skills
    // console.log(obj.skills)
    if (edit) {
      axios
        .put(`${API}/jobs/${jobID}`, obj)
        .then(({ data }) => navigate(`/jobs/${jobID}`))
        .catch((err) => console.log(err));
    } else {
      axios
        .post(`${API}/jobs`, obj)
        .then(({ data }) => navigate(`/jobs/${data.id}`))
        .catch((err) => console.log(err));
    }
  }

  //   useEffect for edit
  useEffect(() => {
    if (edit && Object.keys(editJobForm).length > 0) {
      const { title, company, city, details, full_remote, tasks } =
        editJobForm.jobDetails;
      const { skills } = editJobForm.skills;
      setJobDropdown(city);
      setJobSkillArr(skills);
      setTaskArr(tasks);
    } else if (isRecruiter) {
      setAccess(true);
    } else if (!isRecruiter) {
      navigate("/not-found");
    }
  }, [jobID]);

  return (
    Object.keys(editJobForm).length > 0 && (
      <div className="job-form-page">
        <section className="job-form-header">
          <TfiAngleLeft onClick={() => navigate(-1)} size={"30px"} />
          <h2 className={edit ? "edit-header" : ""}>
            {edit ? "Edit Post" : "Post a New Opportunity!"}
          </h2>
        </section>

        <form className="job-form" onSubmit={(event) => handleSubmit(event)}>
          <TextInput
            label={"Job Title"}
            formId={"title"}
            stateVar={editJobForm}
            setFunction={setEditJobForm}
            required={true}
            placeholder={"Job Title"}
          />

          <TextInput
            label={"Company"}
            formId={"company"}
            stateVar={editJobForm}
            setFunction={setEditJobForm}
            required={true}
            placeholder={"Company"}
          />

          <section className="job-form-location">
            <Dropdown
              idVal={"city"}
              stateVar={jobDropdown}
              optionsArray={dropdownCities}
              onChange={(event) =>
                handleSearchBar(
                  event,
                  jobDropdown,
                  setJobDropdown,
                  editJobForm,
                  setEditJobForm
                )
              }
            />

            <Checkbox
              label={"Remote Work"}
              formId={"full_remote"}
              stateVar={editJobForm}
              setFunction={setEditJobForm}
            />
          </section>

          <TextArea
            label={"Job Details"}
            formId={"details"}
            stateVar={editJobForm}
            setFunction={setEditJobForm}
            required={true}
            placeholder={"Enter Job Overview details here"}
          />

          {/* Tasks */}
          <div className="job-form-tasks">
            <div className="task-container">
              {/* {taskArr.map((el, i) => (
              <section className="task-line" key={uuidv4()}>
                <TextInput
                  key={uuidv4()}
                  label={"Job Tasks"}
                  formId={"tasks"}
                  stateVar={taskArr}
                  setFunction={setTaskArr}
                  required={true}
                  placeholder={`Job Task (${i + 1})`}
                  index={i}
                  task={true}
                />
              </section>
            ))} */}
            </div>
            <section className="task-header">
              <span onClick={(event) => taskButton(event)}>
                Click to Add A Task
              </span>
              <IoMdAddCircle
                size={"20px"}
                onClick={(event) => taskButton(event)}
              />
            </section>
          </div>

          <section className="job-form-skills">
            <span>
              <span>Min. 1, Max. 4 Skills req.</span>
              <CgAsterisk color={"#cd5f41"} size={"15px"} />
            </span>
            {/* <SkillsComponent
            checkbox={true}
            checkedArr={jobSkillArr}
            checkBoxHandle={(event) => handleSkills(event)}
          /> */}
          </section>

          <input
            className="job-form-submit"
            type="submit"
            value={edit ? "Update Post" : "Post Job"}
          />
        </form>
      </div>
    )
  );
}
