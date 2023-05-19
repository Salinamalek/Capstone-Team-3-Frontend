import RegisterComponent from "../Components/Register/RegisterComponent.js";
import LoginProvider from "../Providers/LoginProvider.js";

function Register(props) {
  return (
    <LoginProvider>
      <RegisterComponent />
    </LoginProvider>
  );
}

export default Register;
