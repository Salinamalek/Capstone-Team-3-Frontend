import Register from "../Components/Register-Login/Register.js";
import RecruiterProvider from "../Providers/RecruiterProvider.js";

export default function RegisterComponent() {
  return (
    <RecruiterProvider>
      <Register />
    </RecruiterProvider>
  );
}
