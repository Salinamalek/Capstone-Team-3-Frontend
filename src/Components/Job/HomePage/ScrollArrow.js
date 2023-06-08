import { AiOutlineCaretUp, AiFillCaretDown } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs"

function ScrollArrow({ direction, child, element }) {
  function homeScroll(index) {
    element.current.children[index].scrollIntoView();
  }


  return (
    <div className="home-scroll-container">
        <BsFillCircleFill 
        onClick={() => homeScroll(0)}
        />
        <BsFillCircleFill 
        onClick={() => homeScroll(1)}
        />
        <BsFillCircleFill 
        onClick={() => homeScroll(2)}
        />
        <BsFillCircleFill 
        onClick={() => homeScroll(3)}
        />
    </div>
  )

//   if (direction === "up") {
//     return (
//       <AiOutlineCaretUp
//         size={"60px"}
//         className="home-scroll-up"
//         onClick={() => homeScroll(child)}
//       />
//     );
//   } else {
//     return (
//       <AiFillCaretDown
//         size={"60px"}
//         className="home-scroll-down"
//         onClick={() => homeScroll(child)}
//       />
//     );
//   }
}

export default ScrollArrow;
