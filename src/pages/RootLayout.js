import { useEffect } from 'react';
import { Outlet, useLoaderData, useNavigation, useSubmit } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import { getTokenValidDuration } from '../utils/util';

const RootLayout = () => {
  const navigation = useNavigation();
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === 'TOKEN_EXPIRED') {
      submit(null, { action: '/logout', method: 'POST' });
    }

    const validTokenDuration = getTokenValidDuration();

    console.log('validTokenDuration', validTokenDuration);
    
    setTimeout(() => {
      submit(null, { action: '/logout', method: 'POST' });
    }, validTokenDuration);
  }, [token, useSubmit]);

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
