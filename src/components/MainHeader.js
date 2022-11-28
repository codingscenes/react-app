import { NavLink } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header className='header'>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? 'active' : '')}
              to='/welcome'
            >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? 'active' : '')}
              to='/products'
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
