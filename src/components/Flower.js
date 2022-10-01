import React from 'react';

const Flower = ({ imgUrl, onChecked, type, value }) => {
  return (
    <div className='flower card'>
      <img className={!value ? 'dry' : ''} src={imgUrl} alt={imgUrl} />
      <div className='watering'>
        <span> Watered {type} flower?</span>{' '}
        <input
          checked={value}
          type='checkbox'
          className='form-control'
          onChange={(e) => onChecked(e, type)}
        />
      </div>
    </div>
  );
};

export default Flower;
