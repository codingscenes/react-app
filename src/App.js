import React from 'react';
import withAuthentication from './withAuthentication ';

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default withAuthentication(App);

