import React from 'react';

const FloorC = ({ product, doConfirm, isReceived }) => {
  return (
    <div className='container'>
      <h2>Product received: {product}</h2>
      <hr />
      {isReceived ? (
        '✔️ Thank you for confirmation!'
      ) : (
          <button className='btn btn-primary'
            type='button' onClick={doConfirm}>
          Confirm
        </button>
      )}
    </div>
  );
};

export default FloorC;
