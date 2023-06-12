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

function newFormCheck(arr, arr2, dropdown) {
  const content = arr.every(el => el)
  const content2 = arr2.every(el => el)
  if(arr.length < 1 || !content ){
    return false
  }
  if(arr2.length > 0 && !content2){
    return false
  }
  if(!dropdown){
    console.log("dropdown")
    return false
  }
  else {
    return true
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
    newFormCheck,
}