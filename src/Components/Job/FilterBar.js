import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useJobProvider } from "../../Providers/JobProvider.js";
import SkillsComponent from "./SkillsComponent";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs"
import { MdChangeCircle } from "react-icons/md"
import "./FilterBar.css"

function FilterBar() {
    const { API, axios, jobs, setJobs, searchResult, setSearchResult } = useJobProvider()
   const [filterOptions, setFilterOptions] = useState(false)
   const [cityDropdown, setCityDropdown] = useState("")
   const [remoteSearch, setRemoteSearch] = useState(false)
   const [skillNames, setSkillNames] = useState([])
   const [skillView, setSkillView] = useState(false)

    //will need get all skills call to map for names for checkbox toggle -> skills provider or add to jobsProvider
   function filterBarSlide(e) {
       setFilterOptions(!filterOptions)
   }


   function remoteFilter (e) {
        setRemoteSearch(!remoteSearch)
        if(e.target.checked){
            const remoteJobs = jobs.filter(({full_remote}) => full_remote === true)
            setJobs(remoteJobs)
        }
        else {
            setJobs(searchResult)
        }
       
   }

   useEffect(() => {
    axios.get(`${API}/skills`)
    .then (({data}) => setSkillNames(data))
    .catch(err => console.log(err))
   }, [])
//    [{id: 1, skill_name: "JavaScript"}]

   return (
       <div className="filter-bar">
           <span 
           className="filter-bar-arrow">
               {
                   !filterOptions ?
                   <BsCaretDownFill
                   onClick={(event) => filterBarSlide(event)}
                   color = {"#41CDBC"}
                   size = {"25px"}
                    /> :
                   <BsCaretUpFill
                   onClick={(event) => filterBarSlide(event)}
                   color = {"#0914AE"}
                   size = {"25px"}
                    />
               }
                <span 
                className={filterOptions ? "filter-span expand-text" : "expand-text"}
                onClick={(event) => filterBarSlide(event)}>
                    {filterOptions ? "Collapse Filter Options" : "Expand Filter Options"}
                </span>
                <label htmlFor="remote-checkbox" >
                    <input
                    className={filterOptions ? "filter-remote remote-checkbox" : "remote-checkbox"}
                    type="checkbox"
                    value={remoteSearch}
                    checked = {remoteSearch}
                    onChange={(event) => remoteFilter(event)}
                    />
                    <span className={filterOptions ? "filter-remote-label remote-label" : "remote-label"}>Remote</span>
                </label>
           </span>
          
           {/* expanded filter bar */}
           <section
           className={filterOptions ? "filter-bar-expanded slide-down" : "filter-bar-expanded slide-up"}>
               <select
               onChange={(e) => {setCityDropdown(e.target.value)}}
               value={cityDropdown}>
                   <option value = {""}>Select City</option>
                   <option value={"newYorkCity"}>New York City, NY</option>
                   <option value={"houston"}>Houston, TX</option>
                   <option value={"sanFrancisco"}>San Francisco, CA</option>
                   <option value={"miami"}>Miami, FL</option>
                   <option value={"chicago"}>Chicago, IL</option>
               </select>
               {/* skills search options */}
               {/* need to toggle checkboxes and icons? */}
               <span className="filter-bar-toggle">
                <MdChangeCircle 
                size={"25px"}
                color={"#FFDE59"} 
                //   className="filter-bar-toggle"
                onClick={() => setSkillView(!skillView)}/>
                <span
                onClick={() => setSkillView(!skillView)}
                >{!skillView ? "Skill Text" : "Skill Icons"}</span>
               </span>
              
               <div className="filter-bar-skills">
               {
                !skillView ? 
                <SkillsComponent
                key={uuidv4()}
                skillsArr={[1,2,3,4,5,6,7,8,9,10,11,12]}/> :
                <SkillsComponent 
                skillsArr={skillNames}
                checkbox={true}/>
               }
               </div>

              
              <hr/>
             
           </section>
       </div>
   );
}


export default FilterBar;