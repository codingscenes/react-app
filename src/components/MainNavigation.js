import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <nav className='navbar navbar-expand navbar-dark bg-dark '>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          DemoApp
        </a>

        <div className='collapse navbar-collapse' id='navbarText'>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item'>
              <NavLink to='/' className='nav-link' aria-current='page'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/users' className='nav-link'>
                Users
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/users/new' className='nav-link'>
                Add User
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default MainNavigation;
