import JobsIndex from "../Components/Job/JobsIndex.js";
import JobProvider from "../Providers/JobProvider.js";

function Jobs() {
  return (
    <JobProvider>
      <JobsIndex />
    </JobProvider>
  );
}

export default Jobs;
