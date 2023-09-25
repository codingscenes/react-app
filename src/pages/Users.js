import { useLoaderData } from 'react-router-dom';
import UsersList from '../components/UsersList';

export const USER_API = 'http://localhost:8001/users';

const UsersPage = () => {
  const users = useLoaderData();

  return (
    <div className='container mt-5'>
      <div className='row'>
        <UsersList users={users} />
      </div>
    </div>
  );
};
export default UsersPage;

export async function loader() {
  const response = await fetch(USER_API);
  if (!response.ok) {
    // TODO : handle it later
  } else {
    const responseData = await response.json();
    return responseData;
  }
}
