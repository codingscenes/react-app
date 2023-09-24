import { Link } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const HomePage = () => {
  return (
    <div>
      <MainNavigation />
      <h1>HomePage</h1>
      <Link to='/users'>Users</Link>
    </div>
  );
};
export default HomePage;
