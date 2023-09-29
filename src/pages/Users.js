import { Suspense } from 'react';
import { Await, defer, json, useLoaderData } from 'react-router-dom';
import UsersList from '../components/UsersList';

export const USER_API = 'http://localhost:8001/users';

const UsersPage = () => {
  const { users } = useLoaderData();

  return (
    <div className='container mt-5'>
      <div className='row'>
        <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading users data...</p>}>
          <Await resolve={users}>{(usersData) => <UsersList users={usersData} />}</Await>
        </Suspense>
      </div>
    </div>
  );
};
export default UsersPage;

async function loadUsers() {
  const response = await fetch(USER_API);
  if (!response.ok) {
    throw json({ msg: 'Can not fetch the user list!' }, { status: 500 });
  }
  const jsonData = await response.json();
  return jsonData;
}

export function loader() {
  return defer({
    // holds list of ongoing http requests
    users: loadUsers(),
  });
}
