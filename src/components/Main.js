import React from 'react';
import NavBar from './NavBar';
import Welcome from './Welcome';

const Main = ({ LoggedOut }) => {
  return (
    <React.Fragment>
      <NavBar onLogout={LoggedOut} />
      <Welcome />
    </React.Fragment>
  );
};

export default Main;
