import { MdKeyboardBackspace } from "react-icons/md";
import ContentCard from "../common/ContentCard";
import UserForm from "../common/UserForm";

/**
 * UpdateUser
 * Display and update user profile
 */
const UpdateUser = () => {

    const title = <span><MdKeyboardBackspace /> <strong>Update User</strong></span>
    const content = <UserForm actionText="Update User" />
    
      return (
        <ContentCard content={content} title={title} />
      );
};

export default UpdateUser;