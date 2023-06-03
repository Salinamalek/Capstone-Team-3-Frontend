import { CgAsterisk } from "react-icons/cg"

function TextArea({ label, formId, stateVar, setFunction, placeholder, required }) {
  function handleTextChange(e, stateVar, setFunction) {
    const value = e.target.value;
    setFunction({ ...stateVar, [formId]: value });
  }

  return (
    <label htmlFor={formId}>
      <span className="job-form-label job-textarea">
        {label}
        {required && <CgAsterisk color={"#cd5f41"} size={"15px"} />}
      </span>

      <textarea
        className="input-box"
        value={stateVar.formId}
        placeholder={placeholder}
        onChange={(event) => handleTextChange(event, stateVar, setFunction)}
      />
    </label>
  );
}

export default TextArea;
