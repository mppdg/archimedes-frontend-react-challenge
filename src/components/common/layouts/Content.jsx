import { useAppContext } from "../../../context/AppContext";

const Content = ({ children }) => {
const { display } = useAppContext();

    return (
        <div id="app-content">
            {display.success && <div className="display-success">{display.message}</div>}
            {!display.success && <div className="display-error">{display.message}</div>}
            {children}
        </div>
    );
};

export default Content;