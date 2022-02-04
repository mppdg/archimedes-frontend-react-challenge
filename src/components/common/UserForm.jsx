import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { USERS_API, USERS_ROUTE } from "../../constants";
import ActionButton from "./ActionButton";

const initUser = { name: "", email: "", role: "" };

const UserForm = ({ actionText, data = initUser }) => {
    const [user, setUser] = useState(data);
    const [error, setError] = useState({});

    const history = useHistory();

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.id]: e.target.value
        })
    }

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError({});

        let res;
        try {
            if (user.id) {
                res = await axios.put(`${USERS_API}/${user.id}`, { user });
            } else {
                res = await axios.post(USERS_API, { user });
            }

            history.push(USERS_ROUTE);

        } catch (err) {
            if(err.response && err.response.data) return  setError(err.response.data);
            setError({message: "Something went wrong!"});
        }
    }

    return (
        <form className="user-form">
            <div className="form-group">
                <span className="form-error-top">{error.message || error.detail}</span>
            </div>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={user.name} placeholder="Your name" onChange={handleChange} />
                <span className="form-error">{error?.name ? error.name[0] : ''}</span>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" value={user.email} placeholder="Your email" onChange={handleChange} />
                <span className="form-error">{error?.email ? error.email[0] : ''}</span>
            </div>
            <div className="form-group">
                <label htmlFor="role">Role</label>
                <select id="role" name="role" placeholder="Your email" value={user.role} onChange={handleChange}>
                    <option value="" disabled>Select user role</option>
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                </select>
                <span className="form-error">{error?.role ? error.role[0] : ''}</span>
            </div>
            <div className="form-group" style={{ marginBottom: "3px" }}>
                <ActionButton className="btn-secondary" text="Cancel" onClick={()=>history.push(USERS_ROUTE)} />
            </div>
            <div className="form-group">
                <ActionButton text={actionText} onClick={handleSubmit} />
            </div>
        </form>
    );
};

export default UserForm;