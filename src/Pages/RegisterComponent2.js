import UserProvider from "../Providers/UserProvider.js";
import Register2 from "../Components/Register-Login/Register2.js";

export default function RegisterComponent2() {
  return (
    <UserProvider>
      <Register2 />
    </UserProvider>
  );
}
