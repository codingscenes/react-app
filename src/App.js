import React, { useState } from 'react';

import withState from './withState';

function App({ count, increment, decrement }) {
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default withState(App)

