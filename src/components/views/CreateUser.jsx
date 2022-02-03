import { MdKeyboardBackspace } from "react-icons/md";
import ContentCard from "../common/ContentCard";
import UserForm from "../common/UserForm";

/**
 * CreateUser
 * Modal to add a new user record
 */
const CreateUser = () => {
    const title = <span><MdKeyboardBackspace /> <strong>Create User</strong></span>
    const content =<UserForm actionText="Create User" />

      return (
        <ContentCard content={content} title={title} />
      );
};

export default CreateUser;