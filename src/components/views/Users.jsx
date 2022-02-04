import { useEffect, useState } from "react";
import axios from "axios";
import ContentCard from "../common/ContentCard";
import ContentTitle from "../common/ContentTitle";
import UsersTable from "../common/UserTable";
import { USERS_API } from "../../constants";

const Users = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const  res = await axios.get(USERS_API);
              setUsers(res.data.users);
          } catch (error) {
              
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