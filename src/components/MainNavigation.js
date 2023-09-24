import { Link } from 'react-router-dom';
const MainNavigation = () => {
  return (
    <header>
      <ul className='navigation'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/users'>Users</Link>
        </li>
      </ul>
    </header>
  );
};
export default MainNavigation;
