import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { UPDATE_USER_ROUTE, USERS_API } from "../../constants";

const cols = ['Name', 'Email', 'Role', 'Actions']

const UsersTable = ({ rows = [], columns = cols, reLoadData }) => {
    const history = useHistory();

    const handleDelete = (userId) => async (e) => {
        e.stopPropagation();
        try {
            await axios.delete(`${USERS_API}${userId}`);
            if (reLoadData) reLoadData();
        } catch (error) {
            
        }
    }

    return (
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
                        <td className="col-actions" onClick={(e)=> e.stopPropagation()}>{<MdDeleteOutline onClick={handleDelete(user.id)} />}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UsersTable;