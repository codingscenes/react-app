import User from './User';

const UsersList = ({ users }) => {
  return users.map((user) => (
    <div className='col' key={user.id}>
      <User key={user.id} data={user} />
    </div>
  ));
};
export default UsersList;
