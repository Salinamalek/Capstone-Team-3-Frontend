import NewEditJobForm from "../Components/Recruiter/NewEditJobForm.js";
import JobProvider from "../Providers/JobProvider.js";

export default function JobForm({edit}) {
  return (
    <JobProvider>
      <NewEditJobForm edit={edit} />
    </JobProvider>
  );
}
