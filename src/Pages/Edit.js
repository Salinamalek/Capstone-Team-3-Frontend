import UserEdit from "../Components/User/UserEdit";
import UserProvider from "../Providers/UserProvider.js";

function Edit() {
  return (
    <UserProvider>
      <UserEdit />
    </UserProvider>
  );
}

export default Edit;
