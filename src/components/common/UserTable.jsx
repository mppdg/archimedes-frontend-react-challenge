import { MdDeleteOutline } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { UPDATE_USER_ROUTE } from "../../constants";

const cols = ['Name', 'Email', 'Role', 'Actions']

const UsersTable = ({ rows = [], columns = cols }) => {
    const history = useHistory();

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
                        <td className="col-actions">{<MdDeleteOutline />}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UsersTable;