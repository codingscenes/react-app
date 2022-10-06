import React from 'react';

const StatusBar = ({ bag, isReceived }) => {
  return (
    <nav className='navbar_container'>
      <ul className='navbar-nav'>
        <li>Product: {bag}</li>
        <li> Status: {isReceived ? 'YES' : 'NO'}</li>
      </ul>
    </nav>
  );
};

export default StatusBar;
