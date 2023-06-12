import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useJobProvider } from "../../Providers/JobProvider";
import Header from "../Job/Header.js"
import TextInput from "../Job/Inputs/TextInput";
import TextArea from "../Job/Inputs/TextArea";
import Checkbox from "../Job/Inputs/Checkbox";
import Dropdown from "../Job/Inputs/Dropdown";
import SkillsComponent from "../Job/SkillsComponent.js";
import { dropdownCities } from "../Job/Data/Cities";
import { handleSearchBar } from "../Job/Functions/SearchBarFunctions";
import { convertTasks } from "../Job/Functions/JobFunctions";
import { checkForm, editFormCheck, newFormCheck } from "../Job/Functions/JobFormFunctions";
import { convertSkills } from "../Job/Functions/SkillsFunctions";
import { asterisk } from "../Job/Data/Icons.js"
import { IoMdAddCircle } from "react-icons/io";
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
    isRecruiterAcc,
    isSignedIn,
  } = useJobProvider();
  const navigate = useNavigate();
  const [originalData, setOriginalData] = useState({})
  const [jobDropdown, setJobDropdown] = useState("");
  const [taskArr, setTaskArr] = useState(["", ""]);
  const [skills, setSkills] = useState([]);
  const [jobForm, setJobForm] = useState({
    title: "",
    company: "",
    city: "",
    details: "",
    full_remote: false,
    tasks: ["", ""],
    recruiter_id: recruiterID,
  });
  const [formError, setFormError] = useState(null)

  function handleSkills(e) {
    const id = +e.target.id;
    if (!skills.includes(id) && skills.length < 4) {
      setSkills([...skills, id]);
      setJobForm({ ...jobForm, ["skills"]: [...skills, id] });
    } else {
      const remove = skills.filter((el) => el !== id);
      setSkills(remove);
      setJobForm({ ...jobForm, ["skills"]: remove });
    }
  }

  function taskButton(e) {
    e.preventDefault();
    setTaskArr([...taskArr, ""]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const obj = {
      jobDetails: jobForm,
    };
    const taskFilter = taskArr.filter(el => el !== "")
    obj.jobDetails.tasks = taskFilter;
    obj.skills = skills;
    // check form values
    
    const changedForm = newFormCheck(skills, taskFilter , jobDropdown)

    // for edit
    // const arrayCheck = newFormCheck(obj.skills, taskArr, city)
    // const compareCheck = editFormCheck(originalData.jobDetails, obj.jobDetails )
    // console.log(arrayCheck, compareCheck, "edit")
    
    obj.jobDetails.full_remote = `${obj.jobDetails.full_remote}`;

      if (edit) {
        console.log(obj.jobDetails, originalData)
        const arrayCheck = newFormCheck(obj.skills, taskFilter, city)
        const compareCheck = editFormCheck(originalData, obj.jobDetails )
        console.log(arrayCheck, compareCheck, "edit")
        // if(arrayCheck && !)
        // console.log(obj.jobDetails, originalData.jobDetails)
        // if(arrayCheck && )
        // axios
        //   .put(`${API}/jobs/${jobID}`, obj)
        //   .then(({ data }) => navigate(`/jobs/${data.id}`))
        //   .catch((err) => console.log(err));
      } 
   if(!edit) {
    if(changedForm){
      axios
          .post(`${API}/jobs`, obj)
          .then(({ data }) => navigate(`/jobs/${data.id}`))
          .catch((err) => console.log(err));
    }
    else {
      setFormError(true)
    }
        
      }

    // }
   
  }
  //   useEffect for edit
  useEffect(() => {
    if (edit) {
      axios
        .get(`${API}/jobs/${jobID}`)
        .then(({ data }) => {
          // setRecruiterID(data["recruiter_id"]);
          if (data["recruiter_id"] === recruiterID) {
            setAccess(true);
            if (data["full_remote"] === "false") {
              data["full_remote"] = false;
            }
            if (data["full_remote"] === "true") {
              data["full_remote"] = true;
            }
            const form = {
              ...data,
              ["tasks"]: convertTasks(data.tasks),
              ["city"]: data.city,
              ["skills"]: convertSkills(data.skills),
            };
            setOriginalData({...form}) 
            setJobForm(form);
            setTaskArr(convertTasks(data.tasks));
            setSkills(convertSkills(data.skills));
            setJobDropdown(data.city);
          } else {
            setAccess(false);
            navigate("/not-found");
          }
        })
        .catch((err) => console.log(err));
    } 
    // if(!isRecruiterAcc){
    //   navigate("/not-found")
    //  }
  }, [jobID]);

  return (
    <div className="job-form-page">
      <Header header={ edit ? "Edit Post": "New Job" } />

      <form className="job-form" onSubmit={(event) => handleSubmit(event)}>
        <TextInput
          label={"Job Title"}
          formId={"title"}
          stateVar={jobForm}
          setFunction={setJobForm}
          required={true}
          placeholder={"Job Title"}
        />

        <TextInput
          label={"Company"}
          formId={"company"}
          stateVar={jobForm}
          setFunction={setJobForm}
          required={true}
          placeholder={"Company"}
        />

        <section className="job-form-location">
          <label htmlFor="city" className="job-form-label-dropdown">
            <span>City{asterisk}</span>
          </label>
          <Dropdown
            idVal={"city"}
            stateVar={jobDropdown}
            optionsArray={dropdownCities}
            onChange={(event) =>
              handleSearchBar(
                event,
                jobDropdown,
                setJobDropdown,
                jobForm,
                setJobForm
              )
            }
          />

          <Checkbox
            label={"Remote Work"}
            formId={"full_remote"}
            stateVar={jobForm}
            setFunction={setJobForm}
          />
        </section>

        <TextArea
          label={"Job Details"}
          formId={"details"}
          stateVar={jobForm}
          setFunction={setJobForm}
          required={true}
          placeholder={"Enter Job Overview details here"}
        />

        {/* Tasks */}
        <div className="job-form-tasks">
          <div className="task-container">
            {taskArr.map((el, i) => (
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
            ))}
          </div>
          <section className="task-header">
            <span onClick={(event) => taskButton(event)}>
              Click to Add A Task
            </span>
            <IoMdAddCircle
              size={"20px"}
              color ={"#41cdbc"}
              onClick={(event) => taskButton(event)}
            />
          </section>
        </div>

        <section className="job-form-skills">
          <span>
            <span>Min. 1, Max. 4 Skills req.</span>
            {asterisk}
          </span>
          <SkillsComponent
            checkbox={true}
            checkedArr={skills}
            checkBoxHandle={(event) => handleSkills(event)}
          />
        </section>

        <input
          className="job-form-submit"
          type="submit"
          value={edit ? "SAVE" : "SUBMIT"}
        />
      </form>
     {
      formError &&
      <span className="job-form-error">
      "Form is incomplete"
     </span>
     }
    </div>
  );
}
