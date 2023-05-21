import { useNavigate, Link } from "react-router-dom";
import { useUserProvider } from "../../Providers/UserProvider.js";
import userIcon from "../../Assets/USER.png";
import pencil from "../../Assets/pencil.png"
import "./UserProfile.css";

export default function UserProfile() {
  const navigate = useNavigate();
  const { userProfile, userJobs } = useUserProvider();

  const dateFormat = (date) => {
    const newDate = date.split("T")[0].split("-");
    return `${newDate[1]}/${newDate[2]}/${newDate[0].substring(2)}`;
  };

  return (
    <div>
      {userProfile.id && (
        <div className="profile">
          <div className="top-profile">
            <div>
              <p>Name</p>
              <p className="bold label-spacing">
                {userProfile["first_name"] + " " + userProfile["last_name"]}
              </p>
              <br />
              <p>Education</p>
              <p className="bold label-spacing">{userProfile.education}</p>
              <br/>
              <p>Skills and Technologies</p>
          <ul>
            {userProfile.skills &&
              userProfile.skills.map((e, i) => (
                <li key={i} className="bold">
                  {e}
                </li>
              ))}
          </ul>
            </div>
            <div className="icon-edit">
              <img id="icon-user" src={userIcon} alt="user icon" />
              <button
                onClick={() => navigate(`/user/edit`)}
                className="profile-button"
              >
                EDIT <img src={pencil} alt="pencil" />
              </button>
            </div>
          </div>
          <br />
          <p>Portfolio Projects</p>
          <ul className="portfolio">
            <li className="bold label-spacing">
              {userProfile["project_one"] ? (
                <a href={userProfile["project_one"]} target="_blank">
                  LINK 1
                </a>
              ) : (
                "add link"
              )}
            </li>
            <li className="bold">
              {userProfile["project_two"] ? (
                <a href={userProfile["project_two"]} target="_blank">
                  LINK 2
                </a>
              ) : (
                "add link"
              )}
            </li>
          </ul>
          <br/>
            <p>About me</p>
            <p className="bold label-spacing">{userProfile.bio}</p>
          <br/>
          <div className="applications">
            <p className="bold">My Applications</p>
            <div>
              {userJobs.length > 0 &&
                userJobs.map(({ id, title, company, date_applied }, i) => (
                  i < 2 ? <p key={id}>
                    <br />
                    <strong><Link to={`/jobs/${id}`}>{title}</Link></strong>
                    <br/>
                    <em>{company}</em> - {dateFormat(date_applied)}
                  </p> : null
                ))}
              <br />
              <button id="activity-button">
                {userJobs.length > 0 ? "VIEW ALL" : "FIND JOBS"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
