import React from 'react';

const FloorC = ({ bag, doConfirm, isReceived }) => {
  return (
    <div className='container'>
      <h2>Product in bag: {bag}</h2>
      <hr />
      {isReceived ? (
        '✔️ Thank you for confirmation!'
      ) : (
        <button className='btn btn-primary' type='button' onClick={doConfirm}>
          Confirm
        </button>
      )}
    </div>
  );
};

export default FloorC;
