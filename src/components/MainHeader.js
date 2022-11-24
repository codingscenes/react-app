import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/welcome'>Welcome</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
