import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useJobProvider } from "../../Providers/JobProvider.js";
import TestSkills from "./TestSkills.js";
import SkillsComponent from "./SkillsComponent";
import Dropdown from "./Dropdown.js";
import { dropdownCities, handleSearchBar } from "../../Functions/SearchBarFunctions.js";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs"
import { MdChangeCircle } from "react-icons/md"
import "./FilterBar.css"

function FilterBar({searchOptions, setSearchOptions}) {
    const { API, axios} = useJobProvider()
   const [filterOptions, setFilterOptions] = useState(false)
   const [cityDropdown, setCityDropdown] = useState("")
   const [remoteSearch, setRemoteSearch] = useState(false)
   const [skillView, setSkillView] = useState(false)

//    will replace with  new skill provider/ no use effect needed
const [skillData, setSkillData] = useState([])

    function handleSkillSelection(e) {
        const id = +e.target.id
        const select = searchOptions.skills
        if(!select.includes(id) && select.length < 4){
            setSearchOptions({...searchOptions, skills :[...select, id]}) 
        }
        else {
            const remove = select.filter(el => el !== id)
            setSearchOptions({...searchOptions, skills :remove})
        }
    }


   useEffect(() => {
    axios.get(`${API}/skills`)
    .then (({data}) => setSkillData(data))
    .catch(err => console.log(err))
   }, [])

   return (
       <div className="filter-bar">
           <span 
           className="filter-bar-arrow">
               {
                   !filterOptions ?
                   <BsCaretDownFill
                   className="filter-arrow-up"
                   onClick={() => setFilterOptions(!filterOptions)}
                   color = {"#41CDBC"}
                   size = {"25px"}
                    /> :
                   <BsCaretUpFill
                   className="filter-arrow-up"
                   onClick={() => setFilterOptions(!filterOptions)}
                   color = {"#0914AE"}
                   size = {"25px"}
                    />
               }
                <span 
                className={filterOptions ? "filter-span expand-text" : "expand-text"}
                onClick={() => setFilterOptions(!filterOptions)}>
                    {filterOptions ? "Collapse Filter Options" : "Expand Filter Options"}
                </span>
                <label htmlFor="remote-checkbox" >
                    <input
                    className={filterOptions ? "filter-remote remote-checkbox" : "remote-checkbox"}
                    id = "isRemote"
                    type="checkbox"
                    value={remoteSearch}
                    checked = {remoteSearch}
                    onChange={(event) => handleSearchBar(event, remoteSearch, setRemoteSearch, searchOptions, setSearchOptions)}
                    />
                    <span className={filterOptions ? "filter-remote-label remote-label" : "remote-label"}>Remote</span>
                </label>
           </span>
          
           {/* expanded filter bar */}
           <section
           className={filterOptions ? "filter-bar-expanded slide-down" : "filter-bar-expanded slide-up"}>
                <Dropdown
                idVal={"city"}
                stateVar={cityDropdown}
                optionsArray={dropdownCities} 
                onChange={(event) => handleSearchBar(event, cityDropdown, setCityDropdown, searchOptions, setSearchOptions)}
                />
               {/* skills search options */}
               <span className="filter-bar-toggle">
                    <MdChangeCircle 
                    size={"25px"}
                    color={"#FFDE59"} 
                    onClick={() => setSkillView(!skillView)}/>
                    <span
                    onClick={() => setSkillView(!skillView)}>
                        {!skillView ? "Skill Text" : "Skill Icons"}
                    </span>
               </span>
              
               <div className="filter-bar-skills">
               {
                !skillView ? 
                // <SkillsComponent
                // key={uuidv4()}
                // skillsArr={[1,2,3,4,5,6,7,8,9,10,11,12]}/> :
                <TestSkills
                key={uuidv4()}
                skillsArr={skillData.map(({id}) => id)}
                checkedArr={searchOptions.skills}
                stateVar={searchOptions}
                setFunction={setSearchOptions}

                /> :
                <TestSkills
                key={uuidv4()}
                skillsArr={skillData}
                checkbox={true}
                checkedArr={searchOptions.skills}
                checkBoxHandle={handleSkillSelection}/>
                // <SkillsComponent 
                // skillsArr={skillNames}
                // checkbox={true}/>
               }
               </div>
              <hr/>
             
           </section>
       </div>
   );
}


export default FilterBar;