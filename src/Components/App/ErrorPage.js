import { Link } from "react-router-dom";
import "./ErrorPage.css";
import error from "../../Assets/404page.png";

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
