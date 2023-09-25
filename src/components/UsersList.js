import { useLoaderData } from 'react-router-dom';
import User from './User';

const UsersList = () => {
  const users = useLoaderData();

  return users.map((user) => (
    <div className='col' key={user.id}>
      <User key={user.id} data={user} />
    </div>
  ));
};
export default UsersList;
