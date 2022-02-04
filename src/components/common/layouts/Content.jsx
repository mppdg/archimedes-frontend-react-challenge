import { useAppContext } from "../../../context/AppContext";
import SpinLoader from "../SpinLoader";

const Content = ({ children }) => {
const { display, loading } = useAppContext();

    return (
        <div id="app-content">
            <SpinLoader loading={loading} />
            {display.success && <div className="display-success">{display.message}</div>}
            {!display.success && <div className="display-error">{display.message}</div>}
            {children}
        </div>
    );
};

export default Content;