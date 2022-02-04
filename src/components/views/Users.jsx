import ContentCard from "../common/ContentCard";
import ContentTitle from "../common/ContentTitle";
import UsersTable from "../common/UserTable";

const Users = () => {
    return (
        <ContentCard 
            title={<ContentTitle title="Users" />}
            content={<UsersTable />}
        />
      );
  };
  
  export default Users;