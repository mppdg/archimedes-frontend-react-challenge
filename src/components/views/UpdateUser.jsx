import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { CREATE_USER_ROUTE } from "../../constants";
import ContentCard from "../common/ContentCard";
import ContentTitle from "../common/ContentTitle";
import UserForm from "../common/UserForm";

/**
 * UpdateUser
 * Display and update user profile
 */
const UpdateUser = () => {
    const {state} = useLocation();
    const history = useHistory();

    useEffect(() => {
        if (!state?.user) history.push(CREATE_USER_ROUTE);
    }, [state]);

    return (
        <ContentCard 
            title={<ContentTitle title="Update User" />}
            content={<UserForm actionText="Update User" data={state?.user} />} 
        />
    )
};

export default UpdateUser;