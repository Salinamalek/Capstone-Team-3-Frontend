import { Link } from "react-router-dom";
import error from "../../Assets/404page.png";
import "./ErrorPage.css";


function ErrorPage() {
  return (
    <div className="error">
      <img id="error-img" src={error} alt="error"></img>
      <br />
      <Link className="backHome" to="/">
        HOME
      </Link>
    </div>
  );
}

export default ErrorPage;
