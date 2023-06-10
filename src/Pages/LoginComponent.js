import Login from "../Components/Register-Login/Login.js";
import RecruiterProvider from "../Providers/RecruiterProvider.js";

export default function LoginComponent() {
  return (
    <RecruiterProvider>
      <Login/>
    </RecruiterProvider>
  );
}
