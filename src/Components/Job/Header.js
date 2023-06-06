import { useNavigate } from "react-router-dom";
import { TfiAngleLeft } from "react-icons/tfi";
import "./Header.css"

function Header({header}) {
    const navigate = useNavigate()

    return (
        <div className="app-header">
        <TfiAngleLeft
        size={"25px"}
        onClick={() => navigate(-1)}
        />
        <h2>{header}</h2>
        </div>
    );
}

export default Header;