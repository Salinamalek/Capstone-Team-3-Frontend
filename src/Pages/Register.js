import RegisterComponent from "../Components/Register/RegisterComponent.js";
import RegisterComponent2 from "../Components/Register/RegisterComponent2.js";
import LoginProvider from "../Providers/LoginProvider.js";

function Register(props) {
 

  return (
    <LoginProvider>
      <RegisterComponent />
      <RegisterComponent2 />
    </LoginProvider>
  );
}

export default Register;
