import { useLoaderData } from 'react-router-dom';
import UsersList from '../components/UsersList';

export const USER_API =
  'https://raw.githubusercontent.com/codingscenes/react-app/11-Data-Fetching-With-Loader/api/users.json';

const UsersPage = () => {
  // can access closest loader data
  // const users = useLoaderData();

  return (
    <div className='container mt-5'>
      <div className='row'>
        <UsersList users={''} />
      </div>
    </div>
  );
};
export default UsersPage;
