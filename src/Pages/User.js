import UserProfile from "../Components/User/UserProfile.js";
import UserProvider from "../Providers/UserProvider.js";

function User() {
  return (
    <UserProvider>
      <UserProfile />
    </UserProvider>
  );
}

export default User;
