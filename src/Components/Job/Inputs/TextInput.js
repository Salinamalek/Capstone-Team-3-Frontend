import { CgAsterisk } from "react-icons/cg"
import { HiMinusCircle } from "react-icons/hi"

function TextInput({label,formId, stateVar, setFunction, required, placeholder, index, task }) {
    
      // handleTextChange
      function handleTextChange(e, stateVar, setFunction){
        const value = e.target.value
        const id = e.target.id
        setFunction({...stateVar, [id]: value})
    }

    function handleTasks(e, stateVar, setFunction){
        const value = e.target.value
        const copyArr = [...stateVar]
        copyArr[index] = value
        setFunction(copyArr)
    }

    function removeTask() {
        const remove = [...stateVar].filter((el,i) => i !== index)
        setFunction(remove)
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
            value={task ? stateVar[index]: stateVar.formId}
            id = {formId}
            placeholder={placeholder ? placeholder : ""}
            onChange = {(event) => { !task ? handleTextChange(event, stateVar, setFunction) : handleTasks(event, stateVar, setFunction)}}
        />
        {
            task && 
            <HiMinusCircle 
            className="task-remove"
            size={"16px"}
            color={"#cd5f41"}
            onClick={() => removeTask()} />
        }
        </label>
    );
}

export default TextInput;