import ContentCard from "../common/ContentCard";
import { MdKeyboardBackspace } from "react-icons/md";

/**
 * UpdateUser
 * Display and update user profile
 */
const UpdateUser = () => {

    const title = <span><MdKeyboardBackspace /> <strong>Update User</strong></span>
    const content = "The user form"
    
      return (
        <ContentCard content={content} title={title} />
      );
};

export default UpdateUser;