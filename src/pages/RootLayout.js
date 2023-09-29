import { Outlet, useNavigation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const RootLayout = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading';
  return (
    <>
      <MainNavigation />
      <main>
        {/* {isLoading && <p>Loading page...</p>} */}
        <Outlet />
      </main>
    </>
  );
};
export default RootLayout;
