import ActionButton from "./ActionButton";

const UserForm = ({ actionText }) => {
    return (
        <form className="user-form">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Your email" />
            </div>
            <div className="form-group">
                <label htmlFor="role">Role</label>
                <select id="role" name="role">
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
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