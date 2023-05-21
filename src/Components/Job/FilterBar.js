import { useState, useEffect } from "react";
import { useJobProvider } from "../../Providers/JobProvider.js";
import SkillsComponent from "./SkillsComponent";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs"
import { MdChangeCircle } from "react-icons/md"
import "./FilterBar.css"

function FilterBar() {
    const { API, axios } = useJobProvider()
   const [filterOptions, setFilterOptions] = useState(false)
   const [cityDropdown, setCityDropdown] = useState("")
   const [remoteSearch, setRemoteSearch] = useState(false)
   const [skillNames, setSkillNames] = useState([])
   const [skillView, setSkillView] = useState(false)

    //will need get all skills call to map for names for checkbox toggle -> skills provider or add to jobsProvider
   function filterBarSlide(e) {
       setFilterOptions(!filterOptions)
   }


   function remoteFilter () {
       // will have access to job Provider to get and filter through all jobs
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
           className="filter-bar-arrow"  
           onClick={(event) => filterBarSlide(event)}>
               {
                   !filterOptions ?
                   <BsCaretDownFill
                   color = {"#41CDBC"}
                   size = {"25px"}
                    /> :
                   <BsCaretUpFill
                   color = {"#0914AE"}
                   size = {"25px"}
                    />
               }
                <span className={filterOptions && "filter-span"}>Filter Options</span>
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
               {/* remote checkbox */}
               <label htmlFor="remote-checkbox" className="remote-label">
               <span >Remote</span>
                   <input
                   className="remote-checkbox"
                   type="checkbox"
                   value={remoteSearch}
                   checked = {remoteSearch}
                   onChange={() => setRemoteSearch(!remoteSearch)}/>
               </label>
               {/* skills search options */}
               {/* need to toggle checkboxes and icons? */}
               <div className="filter-bar-skills">
              <MdChangeCircle 
              size={"23px"}
              color={"white"} 
              className="filter-bar-toggle"
              onClick={() => setSkillView(!skillView)}/>
               {
                !skillView ? 
                <SkillsComponent
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