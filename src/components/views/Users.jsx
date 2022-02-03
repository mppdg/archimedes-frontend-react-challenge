import ContentCard from "../common/ContentCard";
import ContentTitle from "../common/ContentTitle";

const Users = () => {
    return (
        <ContentCard 
            title={<ContentTitle title="Users" />}
            content="User Table"
        />
      );
  };
  
  export default Users;