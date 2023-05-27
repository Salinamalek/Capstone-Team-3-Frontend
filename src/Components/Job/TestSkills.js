import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { skillClick } from "../../Functions/SearchBarFunctions";
import {
  SiNodedotjs,
  SiJavascript,
  SiReact,
  SiPython,
  SiRuby,
  SiCplusplus,
  SiMysql,
  SiSwift,
  SiGo,
  SiPhp,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import "./SkillsComponent.css";

function TestSkills({ skillsArr, justList, checkbox, checkBoxHandle, checkedArr, stateVar, setFunction}) {

    const [skillsObj, setSkillsObj] = useState({
        1: [<SiJavascript 
            key={uuidv4()} 
            id={1}
            />, false],
        2: [<SiNodedotjs 
            key={uuidv4()} 
            id={2}
            />, false],
        3: [<SiReact 
            key={uuidv4()} 
            id={3}
             />, false],
        4: [<SiPython 
            key={uuidv4()} 
            id={4}
             />, false],
        5: [<FaJava 
            key={uuidv4()} 
            id={5}
             />, false],
        6: [<SiCplusplus 
            key={uuidv4()} 
            id={6}
             />, false],
        7: [<SiRuby 
            key={uuidv4()} 
            id={7}
             />, false],
        8: [<SiMysql 
            key={uuidv4()} 
            id={8}
             />, false],
        9: [<SiSwift 
            key={uuidv4()} 
            id={9}
             />, false],
        10: [<SiGo 
            key={uuidv4()} 
            id={10}
             />, false],
        11: [<SiTypescript 
            key={uuidv4()} 
            id={11}
             />, false],
        12: [<SiPhp 
            key={uuidv4()} 
            id={12}
             />, false],
      });

      const [checkboxObj, setCheckboxObj] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
      })

      // function skillClick(val) {
      //   const currentValArr = [...skillsObj[val]];
      //   currentValArr[1] = !currentValArr[1];
      //   setSkillsObj({ ...skillsObj, [val]: currentValArr });
        
      //   const select = stateVar.skills
      //   if(!select.includes(val) && select.length < 4){
      //       setFunction({...stateVar, skills :[...select, val]})
            
      //   }
      //   else {
      //       const remove = select.filter(el => el !== val)
      //       setFunction({...stateVar, skills :remove})
      //   }
      // }

      useEffect(() => {
        if(!checkbox && !justList){
            checkedArr.forEach(el => {
                const currentValArr = [...skillsObj[el]];
                currentValArr[1] = true;
                setSkillsObj({...skillsObj, [el]: currentValArr})
            })
        }
      },[checkedArr.length])

   
        if (checkbox) {
            return (
              <div className="skills-checkboxes">
                {skillsArr.map((obj) => (
                  <>
                    <label key={uuidv4()} htmlFor={obj.id}>
                      <input
                        type="checkbox"
                        id={obj.id}
                        checked={checkedArr.includes(obj.id)}
                        // for Dan may need to update
                        onChange={checkBoxHandle}
                      />
                      {obj["skill_name"]}
                    </label>
                  </>
                ))}
              </div>
            )
}
else {
    return (
      <div className="skills-component">
        {skillsArr.map((skill) => 
             <span
             key={uuidv4()}
             className={checkedArr.includes(skill)? "skill-icon" : null}
             onClick={() => skillClick(skill, skillsObj, setSkillsObj, stateVar, setFunction)}
           >
             {skillsObj[skill]}
           </span>
        )}
      </div>
    );
  }
}

export default TestSkills;