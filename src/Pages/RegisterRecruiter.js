import RecruiterRegister from "../Components/Recruiter/RecruiterRegister.js";
import RecruiterProvider from "../Providers/RecruiterProvider.js";

export default function RegisterRecruiter() {
  return (
    <RecruiterProvider>
      <RecruiterRegister />
    </RecruiterProvider>
  );
}
