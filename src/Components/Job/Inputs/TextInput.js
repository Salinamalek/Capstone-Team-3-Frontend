import { CgAsterisk } from "react-icons/cg"
import { HiMinusCircle } from "react-icons/hi"
import { useState } from "react"

function TextInput({label,formId, stateVar, setFunction, required, placeholder, index, task }) {
    const [taskTest, setTaskTest] = useState(stateVar)
      // handleTextChange
      function handleTextChange(e, stateVar, setFunction){
        const value = e.target.value
        const id = e.target.id
        setFunction({...stateVar, [id]: value})
    }
    
    function handleTasks(e){
        const value = e.target.value
        const copyArr = [...taskTest]
        copyArr[index] = value
        setTaskTest(copyArr)   
    }
    function handleTaskBlur() {
        // const value = taskTest
        // const copyArr = [...stateVar]
        // copyArr[index] = value
        setFunction(taskTest)
    }
    // function handleTasks(e, stateVar, setFunction){
        // handleTasks(event, stateVar, setFunction)}
    //     const value = e.target.value
    //     const copyArr = [...stateVar]
    //     copyArr[index] = value
    //     setFunction(copyArr)
    // }

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
            value={task ? taskTest[index]: stateVar[formId]}
            id = {formId}
            placeholder={placeholder ? placeholder : ""}
            onChange = {(event) => { !task ? handleTextChange(event, stateVar, setFunction) : handleTasks(event)}}
            onBlur={task ? () =>handleTaskBlur() : null}
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