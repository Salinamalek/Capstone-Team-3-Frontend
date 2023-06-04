import JobProvider from "../Providers/JobProvider.js";
import Applicants from "../Components/Recruiter/Applicants.js"

export default function JobApplicants() {
    return (
      <JobProvider>
        <Applicants />
      </JobProvider>
    
    );
  }