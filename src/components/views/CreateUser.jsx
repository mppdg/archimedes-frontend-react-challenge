import ContentCard from "../common/ContentCard";
import ContentTitle from "../common/ContentTitle";
import UserForm from "../common/UserForm";

/**
 * CreateUser
 * Modal to add a new user record
 */
const CreateUser = () => {
      return (
        <ContentCard 
            title={<ContentTitle title="Create User" />}
            content={<UserForm actionText="Create User" />} 
        />
      );
};

export default CreateUser;