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

function SkillsComponent({ skillsArr, justList, checkbox }) {
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
  /* 
ruby Hex: #CC0000
html Hex: #E34C26 + black
python #306998 + #FFE873
css3 #264de4 + #ebebeb
c++ #044F88 + #5E97D0
Mysql #00758F + #F29111
swift #F05138 #FFFFFF
GO #29BEB0
c# (c sharp) #9B4993 + #FFFFFF
php #787CB5 black + white
java #f89820 + #5382a1
rust #281C1C + #CE422B
   } */

  function skillClick(val) {
    const currentValArr = [...skillsObj[val]];
    currentValArr[1] = !currentValArr[1];
    setSkillsObj({ ...skillsObj, [val]: currentValArr });
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
                value={obj.id}
                onChange={() => {}}
              />
              {obj["skill_name"]}
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
