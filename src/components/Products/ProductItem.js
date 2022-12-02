import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { toggleFav } from '../../redux-store/actions/product';
import { useStore } from './../../hook-store/store';
import { ProductContext } from './../../store-context/product-context';

const ProductItem = React.memo((props) => {
  const dispatch = useStore(false)[1];
  console.log('Rendering product item');
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
