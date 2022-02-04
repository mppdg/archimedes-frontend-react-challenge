import { useEffect, useState } from "react";
import axios from "axios";
import ContentCard from "../common/ContentCard";
import ContentTitle from "../common/ContentTitle";
import UsersTable from "../common/UserTable";
import { USERS_API } from "../../constants";
import { useAppContext } from "../../context/AppContext";

const Users = () => {
    const [users, setUsers] = useState([]);
    const { setDisplay, setLoading } = useAppContext();

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const res = await axios.get(USERS_API);
            setUsers(res.data.users);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setDisplay({ message: "An error occured. Check and try again!" });
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [])


    return (
        <ContentCard
            title={<ContentTitle title="Users" />}
            content={<UsersTable rows={users} reLoadData={fetchUsers} />}
        />
    );
};

export default Users;