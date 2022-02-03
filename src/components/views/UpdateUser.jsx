import ContentCard from "../common/ContentCard";
import ContentTitle from "../common/ContentTitle";
import UserForm from "../common/UserForm";

/**
 * UpdateUser
 * Display and update user profile
 */
const UpdateUser = () => {

    return (
        <ContentCard 
            title={<ContentTitle title="Update User" />}
            content={<UserForm actionText="Update User" />} 
        />
    )
};

export default UpdateUser;