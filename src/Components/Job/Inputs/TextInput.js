import { CgAsterisk } from "react-icons/cg"
import { HiMinusCircle } from "react-icons/hi"

function TextInput({label,formId, stateVar, setFunction, required, placeholder, remove}) {
      // handleTextChange
      function handleTextChange(e, stateVar, setFunction){
        const value = e.target.value
        const id = e.target.id
        setFunction({...stateVar, [id]: value})
    }

    return (
        <label 
        htmlFor={formId}>
            <span className="job-form-label">
                {label}
                {required && <CgAsterisk color={"#cd5f41"} size={"15px"} />}
            </span>
        <input 
            className="input-box"
            type="text"
            value={stateVar.formId}
            id = {formId}
            placeholder={placeholder ? placeholder : ""}
            onChange = {(event) => {handleTextChange(event, stateVar, setFunction)}}
        />
        {
            remove && 
            <HiMinusCircle 
            className="task-remove"
            size={"16px"}
            color={"#cd5f41"}
            onClick={(e) => delete e.target} />
        }
        </label>
    );
}

export default TextInput;