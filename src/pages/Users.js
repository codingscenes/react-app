import { Link, Outlet } from 'react-router-dom';

const USERS = [
  {
    id: 1,
    name: 'Rohit',
  },
  {
    id: 2,
    name: 'Mohit',
  },
  {
    id: 3,
    name: 'Rolly',
  },
];

const UsersPage = () => {
  return (
    <div>
      <h1>Users</h1>
      <div className='users'>
        <ul>
          {USERS.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default UsersPage;
