import { Link } from "react-router-dom";
import { useContextProvider } from "../../Providers/Provider";
import user from "../../Assets/USER.png"
import "./ApplicantCard.css"

function ApplicantCard({obj}) {
    const { setUserId } = useContextProvider()
    const { user_id, first_name, last_name, email} = obj
    
    function applicantClick() {
        
    }

    return (
        <div className="applicant-card">
            <div className="applicant-icon">
            <img src={user} alt="user-icon" />
            </div>
            <span className="applicant-name">{first_name} {last_name}</span>
            <hr/>
            <span className="applicant-email">{email}</span>
        </div>
    );
}

export default ApplicantCard;