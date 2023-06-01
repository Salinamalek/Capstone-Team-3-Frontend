import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GoLocation } from "react-icons/go";
import { BsClipboardCheck } from "react-icons/bs";
import {CiSearch} from  "react-icons/ci"


const jobCompany = <HiOutlineBuildingOffice2 size={"20px"} color={"#FFDE59"} />

const jobLocation = <GoLocation size={"20px"} color={"#FFDE59"} />

const jobApplied = <BsClipboardCheck color={"black"} size={"40px"} />
          
const searchIcon =  <CiSearch size ={"28px"} color={"#41CDBC"} className="search-bar-icon" />


export {
    jobCompany,
    jobLocation,
    jobApplied,
    searchIcon,

}