import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { USERS_API, USERS_ROUTE } from "../../constants";
import ActionButton from "./ActionButton";
import { useAppContext } from "../../context/AppContext";

const initUser = { name: "", email: "", role: "" };

const UserForm = ({ actionText, data = initUser }) => {
    const [user, setUser] = useState(data);
    const [error, setError] = useState({});

    const history = useHistory();
    const { setDisplay, setLoading } = useAppContext();

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
            setLoading(true);
            if (user.id) {
                res = await axios.put(`${USERS_API}${user.id}`, { user });
            } else {
                res = await axios.post(USERS_API, { user });
            }
            setDisplay(res.data);
            setLoading(false);
            history.push(USERS_ROUTE);

        } catch (err) {
            setLoading(false);
            if(err.response && err.response.data) setError(err.response.data);
            setDisplay({ message: "An error occured. Check and try again!" });
        }
    }

    return (
        <form className="user-form">
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