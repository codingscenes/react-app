import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import styles from './Root.module.css';

const RootLayout = () => {
  return (
    <div>
      <MainNavigation />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};
export default RootLayout;
