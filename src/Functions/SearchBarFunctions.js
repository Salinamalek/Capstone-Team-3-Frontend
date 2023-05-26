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


export {
    handleSearchBar,
}