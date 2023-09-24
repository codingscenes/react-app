import { Link, NavLink } from 'react-router-dom';
import styles from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header>
      <ul className={styles.navigation}>
        <li>
          <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : undefined)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' className={({ isActive }) => (isActive ? styles.active : undefined)} end>
            Users
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
export default MainNavigation;
