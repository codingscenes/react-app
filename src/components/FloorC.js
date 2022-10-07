import React, { useContext } from 'react';

import ProductContext from '../context/product-context';

const FloorC = () => {
  const context = useContext(ProductContext);

  return (
    <div className='container'>
      <h2>Product received: {context.product}</h2>
      <hr />
      {context.isReceived ? (
        '✔️ Thank you for confirmation!'
      ) : (
        <button
          className='btn btn-primary'
          type='button'
          onClick={context.doConfirm}
        >
          Confirm
        </button>
      )}
    </div>
  );
};

export default FloorC;
