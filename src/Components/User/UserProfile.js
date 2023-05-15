import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useContextProvider } from "../../Providers/Provider.js";
import axios from "axios";
import "./UserProfile.css";

export default function UserProfile() {
  const { userID } = useParams();
  const navigate = useNavigate();
  const { API } = useContextProvider();
  const [user, setUser] = useState({});

  let AUTH_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNtQGVtYWlsLmNvbSIsImlhdCI6MTY4NDE3MjM2MiwiZXhwIjoxNjg0MjU4NzYyfQ.8GhfUcrAdXXOrgQEFHB6oWTikH21Pw9S2i_uRvFhET8";
  axios.defaults.headers.common["authorization"] = `Bearer ${AUTH_TOKEN}`;

  useEffect(() => {
    axios
      .get(`${API}/users/${userID}`)
      .then((res) => setUser(res.data))
      .catch((error) => {
        console.log(error);
        navigate("/not-found");
      });
  }, [userID]);
  return (
    <div>
      User Profile
    </div>
  );
}
