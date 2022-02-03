import { MdKeyboardBackspace } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { USERS_ROUTE } from "../../constants";
import ActionButton from "./ActionButton";

/**
 * ContentTitle
 * Display actionable title
 */
const ContentTitle = ({ title }) => {
    const history = useHistory();

    if (title === "Users") {
        return (
            <>
                <h4>{title}</h4>
                <ActionButton text="+ Create User" />
            </>
        )
    }

    return (
        <span>
            <span onClick={() => history.push(USERS_ROUTE)}>
                <MdKeyboardBackspace />
            </span>
            <strong>{title}</strong>
        </span>
    );
};

export default ContentTitle;