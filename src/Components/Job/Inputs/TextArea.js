

function TextArea({ label, formId, stateVar, setFunction, placeholder }) {
  function handleTextChange(e, stateVar, setFunction) {
    const value = e.target.value;
    setFunction({ ...stateVar, [formId]: value });
  }

  return (
    <label htmlFor={formId}>
      <span className="job-form-label">{label}</span>

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
