import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4} from "uuid"
import { useJobProvider } from "../../Providers/JobProvider";
import TextInput from "../Job/Inputs/TextInput";
import TextArea from "../Job/Inputs/TextArea";
import Checkbox from "../Job/Inputs/Checkbox";
import Dropdown from "../Job/Inputs/Dropdown";
import SkillsComponent from "../Job/SkillsComponent.js"
import { dropdownCities } from "../Job/Data/Cities";
import { handleSearchBar } from "../Job/Functions/SearchBarFunctions";
import { IoMdAddCircle } from "react-icons/io"
import { HiMinusCircle } from "react-icons/hi"
import { TfiAngleLeft } from "react-icons/tfi";
import "./NewEditJobForm.css";

export default function NewEditJobForm() {
  const { API, axios, jobID } = useJobProvider();
  const navigate = useNavigate();
  const [jobDropdown, setJobDropdown] = useState("")
  const [taskCount, setTaskCount] = useState([1])
  const [taskArr, setTaskArr] = useState([""])
  const [jobForm, setJobForm] = useState({
        title: "",
        company: "",
        city: "",
        details: "",
        full_remote: false,
        tasks: [],
        recruiter_id: "",
  });

  function taskButton(e) {
    e.preventDefault()
    setTaskArr([...taskArr, ""])
  }

  function handleTasks(e, stateVar, setFunction, index){
    const value = e.target.value
    const copyArr = [...stateVar]
    copyArr[index] = value
    setFunction(copyArr)
}
  

  
  return (
    <div className="job-form-page">
        <h2>Post a New Opportunity!</h2>

        <form className="job-form">
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
            <Dropdown
            idVal={"city"}
            stateVar={jobDropdown}
            optionsArray={dropdownCities}
            onChange={(event)=>handleSearchBar(event, jobDropdown, setJobDropdown, jobForm, setJobForm)}
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
                {
                    taskArr.map((el, i) => 
                        <section 
                        className="task-line"
                        key={uuidv4()}>
                             <TextInput 
                             key={uuidv4()}
                            label={"Job Tasks"}
                            formId={"tasks"}
                            stateVar={taskArr}
                            setFunction={setTaskArr}
                            required={true}
                            placeholder={"List A Job Task"}
                            index={i}
                            task={true}
                            onChange= {(event) => handleTasks(event, taskArr, setTaskArr, i)}
                            />
                            {/* <HiMinusCircle 
                            className="task-remove"
                            size={"16px"}
                            color={"#cd5f41"}
                            onClick={(e) => delete e.target} /> */}
                        </section>
                       )
                }
                </div>
                <section className="task-header">
                <span
                onClick={(event) =>taskButton(event)}>Click to Add A Task</span>
                <IoMdAddCircle size={"20px"}
                onClick={(event) =>taskButton(event)} />
                
                </section>
            </div>
            


        </form>
    </div>)
  ;
}
