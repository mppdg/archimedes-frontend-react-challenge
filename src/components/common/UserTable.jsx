import { MdDeleteOutline } from "react-icons/md";

const cols = ['Name', 'Email', 'Role', 'Actions']

const UsersTable = ({ rows = [], columns = cols }) => {

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
                {rows.map(({ name, email, role }, idx) => {
                    <tr key={idx}>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{role}</td>
                        <td>{<MdDeleteOutline />}</td>
                    </tr>
                })}
            </tbody>
        </table>
    );
};

export default UsersTable;