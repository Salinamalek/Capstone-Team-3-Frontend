function handleSearchBar(event, stateVar1, setFunction1, stateVar2, setFunction2 ){
    const id = event.target.id
    const value = event.target.value
    if(id === "isRemote"){
      setFunction1(!stateVar1)
      setFunction2({...stateVar2, [id] : event.target.checked })  
    }
    if(id === "city"){
        setFunction1(value)
        setFunction2({...stateVar2, [id] : value})
    }
    if(id === "searchbar"){
        setFunction1(value)
        setFunction2({...stateVar2, [id] : value})
    }
}

// skill checkboxes filter bar
function handleSkillSelection(e, stateVar, setFunction) {
    const id = +e.target.id
    const select = stateVar.skills
    if(!select.includes(id) && select.length < 4){
        setFunction({...stateVar, skills :[...select, id]}) 
    }
    else {
        const remove = select.filter(el => el !== id)
        setFunction({...stateVar, skills :remove})
    }
}

// icon click filter bar
function skillClick(val, stateVar1, setFunction1, stateVar2, setFunction2) {
    const currentValArr = [...stateVar1[val]];
    currentValArr[1] = !currentValArr[1];
    setFunction1({ ...stateVar1, [val]: currentValArr });
    
    const select = stateVar2.skills
    if(!select.includes(val) && select.length < 4){
        setFunction2({...stateVar2, skills :[...select, val]})
        
    }
    else {
        const remove = select.filter(el => el !== val)
        setFunction2({...stateVar2, skills :remove})
    }
  }

const dropdownCities = [
    {
        val:"" ,
        name: "Select City"
    },
    {
        val: "New York City" ,
        name: "New York City, NY"
    },
    {
        val:"Austin" ,
        name: "Austin, TX"
    },
    {
        val: "Los Angeles" ,
        name: "Los Angeles, CA"
    },
    {
        val: "Huntsville" ,
        name: "Huntsville, AL"
    },
    {
        val: "Raleigh" ,
        name: "Raleigh, NC"
    },
    {
        val: "Jersey City" ,
        name: "Jersey City, NJ"
    },
    {
        val: "Atlanta" ,
        name: "Atlanta, GA"
    },
    {
        val: "Boulder" ,
        name: "Boulder, CO"
    },
    {
        val: "Seattle" ,
        name: "Seattle, WA"
    }
   ]


export {
    handleSearchBar,
    dropdownCities,
    handleSkillSelection,
    skillClick,
}