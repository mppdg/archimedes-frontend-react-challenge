import { useHistory } from "react-router-dom";
import { HOME_ROUTE } from "../../constants";
import ActionButton from "../common/ActionButton";
import ContentCard from "../common/ContentCard";
import ContentTitle from "../common/ContentTitle";

/**
 * PageNotFound
 * 
 */
const PageNotFound = () => {
    const history = useHistory();

    return (
        <div className="page-not-found">
            <h2>404</h2>
            <h1>Page not found</h1>
            <div><ActionButton text="Go Home" onClick={() => history.push(HOME_ROUTE)} /></div>
        </div>
    )
};

export default PageNotFound;