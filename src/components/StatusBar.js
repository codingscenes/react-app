import React, { useContext } from 'react';
import ProductContext from '../context/product-context';

const StatusBar = () => {
  //! context is pointing to ProductContext value
  const context = useContext(ProductContext);

  return (
    <nav className='navbar_container'>
      <ul className='navbar-nav'>
        <li>Product: {context.product}</li>
        <li>||</li>
        <li> Status: {context.isReceived ? 'Delivered' : 'Pending'}</li>
      </ul>
      <button
        type='button'
        className='btn btn-success btn-sm'
        onClick={context.doConfirm}
      >
        Confirm
      </button>
    </nav>
  );
};

export default StatusBar;
