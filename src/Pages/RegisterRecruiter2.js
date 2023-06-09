import UserProvider from "../Providers/UserProvider.js";
import RecruiterRegister2 from "../Components/Recruiter/RecruiterRegister2.js";

export default function RegisterRecruiter() {
  return (
    <UserProvider>
      <RecruiterRegister2 />
    </UserProvider>
  );
}
