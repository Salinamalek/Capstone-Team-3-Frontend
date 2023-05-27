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

  const skillsObject = {
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
  }

  export {
    skillsObject,
  }