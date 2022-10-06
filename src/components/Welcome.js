import React from 'react';

const Welcome = ({ onLogout }) => {
  return (
    <>
      <div className='card'>
        <h3>Today, i brought a new tablet pc 😁</h3>
        <img
          src='https://images.unsplash.com/photo-1661961111247-e218f67d1cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80'
          alt=''
        />
        <hr />
      </div>
    </>
  );
};

export default Welcome;
