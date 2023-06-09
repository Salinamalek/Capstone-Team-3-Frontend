import { useNavigate } from "react-router-dom";
import { TfiAngleLeft } from "react-icons/tfi";
import "./Header.css"

function Header({header, noBack}) {
    const navigate = useNavigate()

    return (
        <div className="app-header">
        {!noBack && <TfiAngleLeft
        size={"25px"}
        onClick={() => navigate(-1)}
        />}
        <h1>{header}</h1>
        </div>
    );
}

export default Header;