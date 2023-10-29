import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='header__logo'>
          <h1 className='header__logo-text'>Plain Notes</h1>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to='/notes' className={({ isActive }) => (isActive ? 'active' : '')}>
                Notes
              </NavLink>
            </li>
            <li>
              <NavLink to='/new-notes' className={({ isActive }) => (isActive ? 'active' : '')}>
                New Note
              </NavLink>
            </li>
            <li>
              <NavLink to='/find-notes' className={({ isActive }) => (isActive ? 'active' : '')}>
                Find Notes
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
