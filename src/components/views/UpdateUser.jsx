import { MdKeyboardBackspace } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { USERS_ROUTE } from "../../constants";
import ContentCard from "../common/ContentCard";
import UserForm from "../common/UserForm";

/**
 * UpdateUser
 * Display and update user profile
 */
const UpdateUser = () => {
    const history = useHistory();

    const title = (
        <span>
            <span onClick={() => history.push(USERS_ROUTE)}><MdKeyboardBackspace /></span>
            <strong>Update User</strong>
        </span>
    )

    const content = <UserForm actionText="Update User" />

    return (
        <ContentCard content={content} title={title} />
    );
};

export default UpdateUser;