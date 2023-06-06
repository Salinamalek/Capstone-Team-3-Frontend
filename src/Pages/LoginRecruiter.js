import RecruiterLogin from "../Components/Recruiter/RecruiterLogin.js";
import RecruiterProvider from "../Providers/RecruiterProvider.js";

export default function LoginRecruiter() {
  return (
    <RecruiterProvider>
      <RecruiterLogin />
    </RecruiterProvider>
  );
}
