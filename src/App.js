import React, { Fragment } from 'react';
import Header from './components/Layout/Header';
import Teas from './components/Teas/Teas';
const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Teas />
      </main>
    </Fragment>
  );
};

export default App;
