/* eslint-disable no-unused-vars */
import React, { useReducer, useState } from 'react';
import Flower from './components/Flower';
import flowerURI from './urls';

const WATER_WHITE = 'WATER_WHITE';
const WATER_PINK = 'WATER_PINK';
const WATER_ORANGE = 'WATER_ORANGE';

const initialState = {
  isWhiteChecked: true,
  isOrangeChecked: false,
  isPinkChecked: false,
};
//pure function does not depend on anything
const flowerReducer = (state, { type, data }) => {
  switch (type) {
    case WATER_PINK:
      return { ...state, isPinkChecked: data };
    case WATER_ORANGE:
      return { ...state, isOrangeChecked: data };
    case WATER_WHITE:
      return { ...state, isWhiteChecked: data };
    default:
      return state;
  }
};
const App = () => {
  const [flowerState, flowerDispatchAction] = useReducer(flowerReducer, {
    isWhiteChecked: true,
    isOrangeChecked: false,
    isPinkChecked: false,
  });

  const checkedHandler = (event, type) => {
    const isChecked = event.target.checked;

    switch (type) {
      case 'pink':
        flowerDispatchAction({ type: WATER_PINK, data: isChecked });
        break;
      case 'orange':
        flowerDispatchAction({ type: WATER_ORANGE, data: isChecked });
        break;
      case 'white':
        flowerDispatchAction({ type: WATER_WHITE, data: isChecked });
        break;
      default:
        // do nothing
        break;
    }
  };

  return (
    <div className='main'>
      <div className='flower-pot '>
        <Flower
          value={flowerState.isPinkChecked}
          type={'pink'}
          imgUrl={flowerURI.pink}
          onChecked={checkedHandler}
        />
        <Flower
          value={flowerState.isWhiteChecked}
          type={'white'}
          imgUrl={flowerURI.white}
          onChecked={checkedHandler}
        />
        <Flower
          value={flowerState.isOrangeChecked}
          type={'orange'}
          imgUrl={flowerURI.orange}
          onChecked={checkedHandler}
        />
      </div>
    </div>
  );
};

export default App;
