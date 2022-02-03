import ContentCard from "../common/ContentCard";

const Users = () => {
  const title = <><h4>Users</h4>+ Create User</>

  const content = "User table"
  
    return (
      <ContentCard content={content} title={title} />
    );
  };
  
  export default Users;