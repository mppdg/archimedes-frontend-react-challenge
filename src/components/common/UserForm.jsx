import { useState } from "react";
import ActionButton from "./ActionButton";

const UserForm = ({ actionText, data = { name: "", email: "" } }) => {
    const [user, setUser] = useState(data);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.id]: e.target.value
        })
    }

    return (
        <form className="user-form">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={user.name} placeholder="Your name" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" value={user.email} placeholder="Your email" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="role">Role</label>
                <select id="role" name="role" placeholder="Your email" onChange={handleChange}>
                    <option disabled>Select user role</option>
                    <option value="User" selected={user.role === "User"}>User</option>
                    <option value="Admin" selected={user.role === "Admin"}>Admin</option>
                </select>
            </div>
            <div className="form-group" style={{ marginBottom: "3px" }}>
                <ActionButton className="btn-secondary" text="Cancel" />
            </div>
            <div className="form-group">
                <ActionButton text={actionText} type="submit" />
            </div>
        </form>
    );
};

export default UserForm;