/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import FloorA from './components/FloorA';
import StatusBar from './components/StatusBar';

const App = () => {
  return (
    <React.Fragment>
      <StatusBar />
      <FloorA />
    </React.Fragment>
  );
};

export default App;
