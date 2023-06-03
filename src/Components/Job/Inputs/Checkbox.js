import { useState } from "react";

function Checkbox({label, formId, stateVar, setFunction}) {
    const [checkbox, setCheckbox] = useState(false)

    // handleCheckbox
    function handleCheckBox(e, var1, setFunc){
        const value = e.target.value
        const checked = e.target.checked
       setCheckbox(!checkbox)
       setFunc({...var1, [value]: checked})
   }

    return (
        <label htmlFor={formId}>
            <span className="job-form-label job-form-remote">{label}</span>
            <input
            type="checkbox"
            value={formId} 
            checked={checkbox}
            onChange={(event) => handleCheckBox(event, stateVar, setFunction)}
            />
        </label>
    );
}

export default Checkbox;