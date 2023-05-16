import { Link } from "react-router-dom";
import "/Users/Salina/Documents/9.1/module-six/project/capstone/capstone-frontend/Capstone-Team-3-Frontend/src/Components/App/ErrorPage.css";
import error from "/Users/Salina/Documents/9.1/module-six/project/capstone/capstone-frontend/Capstone-Team-3-Frontend/src/Assets/404page.png";

function ErrorPage() {
  return (
    <div className="error">
      <img id="error" src={error} alt="error"></img>
      <br />
      <Link className="backHome" to="/">
        {" "}
        Back to Home{" "}
      </Link>
    </div>
  );
}

export default ErrorPage;
