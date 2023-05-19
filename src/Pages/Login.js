import LoginComponent from "../Components/Login/LoginComponent.js";
import LoginProvider from "../Providers/LoginProvider.js";

const Login = () => {
  return (
    <LoginProvider>
      <LoginComponent />
    </LoginProvider>
  );
};

export default Login;
