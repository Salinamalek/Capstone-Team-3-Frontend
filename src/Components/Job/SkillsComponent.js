import { useState } from "react";
import { SiNodedotjs, SiJavascript, SiReact, SiExpress, SiPython, SiRuby, SiHtml5, SiCss3, SiCplusplus, SiMysql, SiSwift, SiGo, SiPhp, SiRust  } from "react-icons/si"
import { FaJava } from "react-icons/fa"
import "./SkillsComponent.css"


function SkillsComponent({skillsArr, justList}) {
   const [skillsObj, setSkillsObj] = useState(
       {
           1 : [<SiJavascript />, false],
           2: [<SiExpress  />, false],
           3: [<SiReact />, false],
           4: [<SiPython />, false],
           5: [<FaJava />,false],
           6: [<SiCplusplus />,false],
           7: [<SiRuby />,false],
           8: [<SiMysql />,false],
           9: [<SiSwift />,false],
           10: [<SiGo />,false],
           11: [<SiRust />,false],
           12: [<SiHtml5/>,false],
           13: [<SiPhp />,false],


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
                   skillsObj[skill][0] 
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