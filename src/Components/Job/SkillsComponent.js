import { useState } from "react";
import { SiNodedotjs, SiJavascript, SiReact, SiExpress, SiPython, SiRuby, SiHtml5, SiCss3, SiCplusplus, SiMysql, SiSwift, SiGo, SiPhp, SiRust, SiTypescript  } from "react-icons/si"
import { FaJava } from "react-icons/fa"
import "./SkillsComponent.css"


function SkillsComponent({skillsArr, justList, checkbox}) {
   const [skillsObj, setSkillsObj] = useState(
       {
           1 : [<SiJavascript />, false],
           2: [<SiNodedotjs  />, false],
           3: [<SiReact />, false],
           4: [<SiPython />, false],
           5: [<FaJava />,false],
           6: [<SiCplusplus />,false],
           7: [<SiRuby />,false],
           8: [<SiMysql />,false],
           9: [<SiSwift />,false],
           10: [<SiGo />,false],
           11: [<SiTypescript />,false],
           12: [<SiPhp />,false],
       }
   )
   const [skillsWithColor, setSkillsWithColor] = useState(
    {
        1 : <SiJavascript color ={"#f0db4f"} style={{backgroundColor: "black"}} />,
        2: <SiNodedotjs color={"#3c873a"} />,
        3: [<SiReact color={"#61DBFB"} style={{backgroundColor: "black"}} />],
        4: [<SiPython color={"#306998"} style={{backgroundColor: "#FFE873"}} />],
        5: [<FaJava color={"white"} style={{backgroundColor: "#5382a1"}}/>],
        6: [<SiCplusplus color={"#044F88"} />],
        7: [<SiRuby color={"#CC0000"}  />],
        8: [<SiMysql color={"#00758F"} style={{backgroundColor: "#F29111"}} />],
        9: [<SiSwift color={"#F05138"} />],
        10: [<SiGo color={"#29BEB0"} />],
        11: [<SiTypescript color={"#007acc"} style={{backgroundColor: "white"}} />],
        12: [<SiPhp color={"#787CB5"} style={{backgroundColor: "black"}}/>]
    }
)
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

// console.log(skillsArr)
  
   function skillClick(val){
       // console.log(val)
       const currentValArr = [...skillsObj[val]]
       currentValArr[1] = !currentValArr[1]
       setSkillsObj({...skillsObj, [val]:currentValArr})
   }




   if(justList){
       return (
           <div className="skills-component">
           {
               skillsArr.map(skill =>
                   skillsWithColor[+Object.keys(skill)]
              )
           }
       </div>
       )
   }
   if(checkbox){
    return (
        <div className="skills-checkboxes">
            {
                skillsArr.map(obj => 
                    <>
                    <label htmlFor={obj.id}>
                    <input
                    type="checkbox"
                    id = {obj.id}
                    value = {obj.id}
                    onChange={() => {}}
                    />
                    {obj["skill_name"]}
                    </label>
                   
                    </>
                    )
            }
        </div>
    )
   }
   else {
       return (
           <div className="skills-component">
               {
                   skillsArr.map(skill =>
                   <span
                   className= {skillsObj[skill][1] ? "skill-icon" : null }
                   onClick={() => skillClick(skill)}>
                       {skillsObj[skill]}
                   </span>)
               }
           </div>
       );
   }
  
}


export default SkillsComponent;