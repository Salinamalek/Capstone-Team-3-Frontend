import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useJobProvider } from "../../Providers/JobProvider";
import TextInput from "../Job/Inputs/TextInput";
import TextArea from "../Job/Inputs/TextArea";
import Checkbox from "../Job/Inputs/Checkbox";
import Dropdown from "../Job/Inputs/Dropdown";
import SkillsComponent from "../Job/SkillsComponent.js"
import { dropdownCities } from "../Job/Data/Cities";
import { handleSearchBar } from "../Job/Functions/SearchBarFunctions";
import { TfiAngleLeft } from "react-icons/tfi";
import "./NewEditJobForm.css";

export default function NewEditJobForm() {
  const { API, axios, jobID } = useJobProvider();
  const navigate = useNavigate();
  const [jobForm, setJobForm] = useState({
        title: "",
        company: "",
        city: "",
        details: "",
        full_remote: false,
        tasks: "",
        recruiter_id: "",
  });
  const [jobDropdown, setJobDropdown] = useState("")

  
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
            placeholder={"Enter Job Overview details here"}
            />

            {/* Tasks */}


        </form>
    </div>)
  ;
}
