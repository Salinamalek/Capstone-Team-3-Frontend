function convertSkills(arr, setFunction) {
    const newArr = arr.map((obj) => +Object.keys(obj)[0]);
    
    if(setFunction){
        setFunction(newArr)
    }
    else {
      return newArr
    }
    
  }





  export {
    convertSkills,
  }