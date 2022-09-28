/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import Timer from './components/Timer';
import Welcome from './components/Welcome';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // side-effects
    if (localStorage.getItem('isLoggedIn')) {
      setIsLoggedIn(true);
    }
    // call an api
  }, []); // [] => dependencies

  useEffect(
    function () {
      /*side-effects*/
      // call an api to show some one home page
    },
    []
  );

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', 1);
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };
  return (
    // <div className='main'>
    //   {!isLoggedIn && <Login onLogin={loginHandler} />}
    //   {isLoggedIn && <Welcome onLogout={logoutHandler} />}

      // {/* <Timer /> */}
    </div>
  );
};

export default App;
