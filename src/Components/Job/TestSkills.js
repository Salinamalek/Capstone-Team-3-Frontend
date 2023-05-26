import { useState } from "react";
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

function TestSkills({ skillsArr, justList, checkbox, checkBoxHandle, checkedArr }) {

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

      function skillClick(val) {
        const currentValArr = [...skillsObj[val]];
        currentValArr[1] = !currentValArr[1];
        setSkillsObj({ ...skillsObj, [val]: currentValArr });
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
                        checked={checkedArr.includes(obj.id)}
                        onChange={(event) => checkBoxHandle(event)}
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
        {skillsArr.map((skill) => (
          <span
            id = {skill}
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

export default TestSkills;