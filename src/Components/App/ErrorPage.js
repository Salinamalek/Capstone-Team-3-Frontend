import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div className="error">
            <Link to = "/"> Back to Home </Link>
        </div>
    );
}

export default ErrorPage;