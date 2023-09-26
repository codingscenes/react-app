import User from './User';

const UsersList = ({ users }) => {
  return users.map((user) => (
    <div className='col-md-4' key={user.id}>
      <User key={user.id} data={user} />
    </div>
  ));
};
export default UsersList;
