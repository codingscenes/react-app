import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <nav className='navbar navbar-expand navbar-dark bg-dark '>
      <div className='container-fluid'>
        <NavLink className='navbar-brand' to='/'>
          DemoApp
        </NavLink>

        <div className='collapse navbar-collapse' id='navbarText'>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item'>
              <NavLink to='/' className='nav-link' aria-current='page'>
                Home
              </NavLink>
            </li>
            <li className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
              <NavLink to='/users' className='nav-link'>
                Users
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default MainNavigation;
