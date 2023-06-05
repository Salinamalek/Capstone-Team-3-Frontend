import { useContext, createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContextProvider } from "./Provider.js";
import { convertSkills } from "../Components/Job/Functions/SkillsFunctions.js";

export const SkillContextData = createContext();
export function useSkillProvider() {
  return useContext(SkillContextData);
}

function SkillProvider({ children }) {
  const { API, axios } = useContextProvider();
  const { jobID } = useParams()
  const [allSkills, setAllSkills] = useState([]);
  const [jobSkillIDs, setJobSkillIDs] = useState([])

  useEffect(() => {
    axios
      .get(`${API}/skills`)
      .then(({ data }) => {
        setAllSkills(data)
      })
      .catch((error) => console.log(error));
    if(jobID){
      axios.get(`${API}/jobs/${jobID}`)
      .then(({data}) => {
        console.log(data, "skills")
        convertSkills(data.skills, setJobSkillIDs)
      })
      .catch(err)
    }
  }, []);

  return (
    <SkillContextData.Provider
      value={{
        allSkills,
        jobSkillIDs,
      }}
    >
      {children}
    </SkillContextData.Provider>
  );
}

export default SkillProvider;
