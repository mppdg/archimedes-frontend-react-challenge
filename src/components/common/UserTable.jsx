import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { UPDATE_USER_ROUTE, USERS_API } from "../../constants";
import { useAppContext } from "../../context/AppContext";

const cols = ['Name', 'Email', 'Role', 'Actions']

const UsersTable = ({ rows = [], columns = cols, reLoadData }) => {
    const history = useHistory();
    const { setDisplay, setLoading } = useAppContext();

    const handleDelete = (userId) => async (e) => {
        e.stopPropagation();
        try {
            setLoading(true);
            const res = await axios.delete(`${USERS_API}${userId}`);
            setLoading(false);
            setDisplay(res.data);
            if (reLoadData) reLoadData();
        } catch (error) {
            setLoading(false);
            setDisplay({ message: "An error occured. Check and try again!" });
        }
    }

    return (
        <div className="users-table-wrapper">
        <table className="users-table">
            <thead>
                <tr>
                    {columns.map((column, idx) => (
                        <th key={idx}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((user, idx) => (
                    <tr key={idx} onClick={() => history.push(UPDATE_USER_ROUTE, { user })}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td className="col-actions" onClick={(e) => e.stopPropagation()}>
                            {<MdDeleteOutline onClick={handleDelete(user.id)} />}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};

export default UsersTable;