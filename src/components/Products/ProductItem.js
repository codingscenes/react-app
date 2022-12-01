import React from 'react';
import { useStore } from '../../hooks-store/store';

const ProductItem = React.memo((props) => {
  const dispatch = useStore(false)[1];
  console.log('Product Item called!');
  
  const toggleHandler = () => {
    dispatch('TOGGLE_FAV', props.id);
  };
  return (
    <div className='item'>
      <i className='ui coffee icon icon-item ' />
      <div className='content'>
        <a className='header'>{props.title}</a>
        <div className='description'>{props.description}</div>
      </div>
      <button
        className={`ui  button favorite-btn ${props.isFavorite && 'green'}`}
        onClick={toggleHandler}
      >
        <i className='icon heart'></i>{' '}
        {props.isFavorite ? 'Unfavorite' : 'Favorite'}
      </button>
    </div>
  );
});

export default ProductItem;
