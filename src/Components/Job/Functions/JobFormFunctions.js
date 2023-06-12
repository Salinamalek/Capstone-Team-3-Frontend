 // handleTextChange
 function handleTextChange(e, stateVar, setFunction){
    const value = e.target.value
    const id = e.target.id
    setFunction({...stateVar, [id]: value})
}

function handleTasks(e, stateVar, setFunction, index){
    const value = e.target.value
    const copyArr = [...stateVar]
    copyArr[index] = value
    setFunction(copyArr)   
}

function removeTask(stateVar, setFunction, index) {
    const remove = [...stateVar].filter((el,i) => i !== index)
    setFunction(remove)
}

function checkArrays(arr, compareArr) {
  console.log(arr.length)
  if(arr.length < 1){
    return false
  }
  if(compareArr){
    if(compareArr.length === arr.length){
      return arr.every((el,i) => el !== compareArr[i])
    }
  }
  

}
function checkForm(obj, stateVar) {
    const { jobDetails } = obj;
    // key values
    const originalForm = Object.values(stateVar);
    const updatedForm = Object.values(jobDetails);
  console.log(updatedForm, originalForm )
    for (let i = 0; i < updatedForm.length; i++) {
      if((i === 8) && (updatedForm[i].length < 1 || updatedForm[i].length > 5 )){
        return false
      }
      if( i=== 6 && updatedForm[i].length < 1){
        return false
      }
      // if ((i === 8 || i === 6) && updatedForm[i].length < 1) {
      //   return true;
      // }
    
      if((i === 6 || i === 8) && (originalForm[i].length === updatedForm[i].length)){
        const originalArr = originalForm[i];
        const updatedArr = updatedForm[i];
        const changedArr = updatedArr.every((el) =>
        originalArr.includes(el)
        );
        if (changedArr) {
        return false;
        }
      }
      // if (i !== 6 && i !== 8 && updatedForm[i] !== originalForm[i]) {
      //   return true;
      // }
    }
    return true;
  }

export {
    handleTextChange,
    handleTasks,
    removeTask,
    checkForm,
    checkArrays,
}