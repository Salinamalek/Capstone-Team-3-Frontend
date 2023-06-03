import { CgAsterisk } from "react-icons/cg"

function TextInput({label,formId, stateVar, setFunction, required, placeholder}) {
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
                {required && <CgAsterisk color={"red"} size={"15px"} />}
            </span>
        <input 
            className="input-box"
            type="text"
            value={stateVar.formId}
            id = {formId}
            placeholder={placeholder ? placeholder : ""}
            onChange = {(event) => {handleTextChange(event, stateVar, setFunction)}}
        />
        </label>
    );
}

export default TextInput;