import { useEffect, useState } from 'react';
import UsersList from '../components/UsersList';

export const USER_API =
  'https://raw.githubusercontent.com/codingscenes/react-app/11-Data-Fetching-With-Loader/api/users.json';

const UsersPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedUsers, setFetchedUsers] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchUsers() {
      setIsLoading(true);
      const response = await fetch(USER_API);
      if (!response.ok) {
        setError('Fetching users failed!');
      } else {
        const responseData = await response.json();
        setFetchedUsers(responseData);
      }
      setIsLoading(false);
    }
    fetchUsers();
  }, []);
  return (
    <div className='container mt-5'>
      <div className='row'>
        {(isLoading || error) && (
          <div className='col mx-auto'>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
          </div>
        )}
        {!isLoading && fetchedUsers && <UsersList users={fetchedUsers} />}
      </div>
    </div>
  );
};
export default UsersPage;
