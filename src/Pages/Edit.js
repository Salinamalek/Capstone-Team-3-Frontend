import UserEdit from '../Components/User/UserEdit';
import UserProvider from '../Providers/UserProvider.js';


function Edit(props) {
    return (
        <UserProvider>
            <UserEdit />
       </UserProvider>
    );
}

export default Edit;