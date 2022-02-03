import ContentCard from "../common/ContentCard";
import { MdKeyboardBackspace } from "react-icons/md";

/**
 * CreateUser
 * Modal to add a new user record
 */
const CreateUser = () => {
    const title = <span><MdKeyboardBackspace /> <strong>Update User</strong></span>
    const content = "The user form"
    
      return (
        <ContentCard content={content} title={title} />
      );
};

export default CreateUser;