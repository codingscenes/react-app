import { Outlet } from 'react-router-dom';
import UserNavigation from '../components/UserNavigation';

const UserLayout = () => {
  return (
    <>
      <UserNavigation />
      <Outlet />
    </>
  );
};
export default UserLayout;
