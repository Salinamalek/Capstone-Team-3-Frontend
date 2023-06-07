import NewEditJobForm from "../Components/Recruiter/NewEditJobForm.js";
import JobProvider from "../Providers/JobProvider.js";
// edit={true}
export default function JobForm({edit}) {
  return (
    <JobProvider>
      <NewEditJobForm edit={edit} />
    </JobProvider>
  );
}
