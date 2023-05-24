import { useState } from "react";
// import { useJobProvider } from "../../Providers/JobProvider";
import { v4 as uuidv4 } from "uuid";
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

function SkillsComponent({ skillsArr, justList, checkbox }) {
  // const {searchResults, setSearchResults, jobs, setJobs} = useJobProvider()

  const [skillsObj, setSkillsObj] = useState({
    1: [<SiJavascript key={uuidv4()} />, false],
    2: [<SiNodedotjs key={uuidv4()} />, false],
    3: [<SiReact key={uuidv4()} />, false],
    4: [<SiPython key={uuidv4()} />, false],
    5: [<FaJava key={uuidv4()} />, false],
    6: [<SiCplusplus key={uuidv4()} />, false],
    7: [<SiRuby key={uuidv4()} />, false],
    8: [<SiMysql key={uuidv4()} />, false],
    9: [<SiSwift key={uuidv4()} />, false],
    10: [<SiGo key={uuidv4()} />, false],
    11: [<SiTypescript key={uuidv4()} />, false],
    12: [<SiPhp key={uuidv4()} />, false],
  });
  const [skillsWithColor, setSkillsWithColor] = useState({
    1: (
      <SiJavascript
        color={"#f0db4f"}
        style={{ backgroundColor: "black" }}
        key={uuidv4()}
      />
    ),
    2: <SiNodedotjs color={"#3c873a"} key={uuidv4()} />,
    3: [
      <SiReact
        color={"#61DBFB"}
        style={{ backgroundColor: "black" }}
        key={uuidv4()}
      />,
    ],
    4: [
      <SiPython
        color={"#306998"}
        style={{ backgroundColor: "#FFE873" }}
        key={uuidv4()}
      />,
    ],
    5: [
      <FaJava
        color={"white"}
        style={{ backgroundColor: "#5382a1" }}
        key={uuidv4()}
      />,
    ],
    6: [<SiCplusplus color={"#044F88"} key={uuidv4()} />],
    7: [<SiRuby color={"#CC0000"} key={uuidv4()} />],
    8: [
      <SiMysql
        color={"#00758F"}
        style={{ backgroundColor: "#F29111" }}
        key={uuidv4()}
      />,
    ],
    9: [<SiSwift color={"#F05138"} key={uuidv4()} />],
    10: [<SiGo color={"#29BEB0"} key={uuidv4()} />],
    11: [
      <SiTypescript
        color={"#007acc"}
        style={{ backgroundColor: "white" }}
        key={uuidv4()}
      />,
    ],
    12: [
      <SiPhp
        color={"#787CB5"}
        style={{ backgroundColor: "black" }}
        key={uuidv4()}
      />,
    ],
  });


  function skillClick(val) {
    const currentValArr = [...skillsObj[val]];
    currentValArr[1] = !currentValArr[1];
    setSkillsObj({ ...skillsObj, [val]: currentValArr });
  }

  // checkbox onchange highlights icon vice versa
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

  const [selectedSkills, setSelectedSkills]= useState([])
// searchResult=> {skill_id} = [idvalues]
  function handleSkillCheckbox(e) {
    const skillId = e.target.id
    const currentState = checkboxObj[skillId]
    setCheckboxObj({...checkboxObj, [skillId] : !currentState})
    if(!selectedSkills.includes(skillId)){
      setSelectedSkills([...selectedSkills, skillId])
      const skillFilter = jobs.filter(({skill_id})=> 
        skill_id.includes(+skillId)
      )
      console.log(skillFilter, jobs)
      setJobs(skillFilter)
    }
    else {
      const remove = selectedSkills.filter(el => el !== skillId)
      setSelectedSkills(remove)
    }
    
  }


  if (justList) {
    return (
      <div className="skills-component">
        {skillsArr.map(
          (skill) =>
            //    skillsWithColor[+Object.keys(skill)]
            skillsWithColor[skill]
        )}
      </div>
    );
  }
  if (checkbox) {
    return (
      <div className="skills-checkboxes">
        {skillsArr.map((obj) => (
          <>
            <label key={uuidv4()} htmlFor={obj.id}>
              <input
                type="checkbox"
                id={obj.id}
                checked={checkboxObj[obj.id]}
                onChange={(event) => handleSkillCheckbox(event)}
              />
              <span>{obj["skill_name"]}</span>
            </label>
          </>
        ))}
      </div>
    );
  } else {
    return (
      <div className="skills-component">
        {skillsArr.map((skill) => (
          <span
            key={uuidv4()}
            className={skillsObj[skill][1] ? "skill-icon" : null}
            onClick={() => skillClick(skill)}
          >
            {skillsObj[skill]}
          </span>
        ))}
      </div>
    );
  }
}

export default SkillsComponent;
