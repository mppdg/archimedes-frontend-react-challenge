import { MdKeyboardBackspace } from "react-icons/md";
import { useHistory } from "react-router-dom";
import ContentCard from "../common/ContentCard";
import UserForm from "../common/UserForm";

/**
 * UpdateUser
 * Display and update user profile
 */
const UpdateUser = () => {

    const history = useHistory();

    const handleClick = () => history.push('/users')

    const title = <span><span onClick={}><MdKeyboardBackspace /></span> <strong>Update User</strong></span>
    const content = <UserForm actionText="Update User" />
    
      return (
        <ContentCard content={content} title={title} />
      );
};

export default UpdateUser;