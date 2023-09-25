import { NavLink } from 'react-router-dom';

const UserNavigation = () => {
  return (
    <ul className='nav nav-pills nav-fill user-nav'>
      <li className='nav-item'>
        <NavLink
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          aria-current='page'
          to='/users'
          end
        >
          Users
        </NavLink>
      </li>

      <li className='nav-item'>
        <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to='new'>
          New User
        </NavLink>
      </li>
    </ul>
  );
};
export default UserNavigation;
