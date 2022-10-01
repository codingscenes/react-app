/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Flower from './components/Flower';
import flowerURI from './urls';

const App = () => {
  const [isWhiteChecked, setIsWhiteChecked] = useState(true);
  const [isOrangeChecked, setIsOrangeChecked] = useState(false);
  const [isPinkChecked, setIsPinkChecked] = useState(false);

  const checkedHandler = (event, type) => {
    const isChecked = event.target.checked;
    if (type === 'pink') setIsPinkChecked(isChecked);
    if (type === 'orange') setIsOrangeChecked(isChecked);
    if (type === 'white') setIsWhiteChecked(isChecked);
  };

  return (
    <div className='main'>
      <div className='flower-pot '>
        <Flower
          value={isPinkChecked}
          type={'pink'}
          imgUrl={flowerURI.pink}
          onChecked={checkedHandler}
        />
        <Flower
          value={isWhiteChecked}
          type={'white'}
          imgUrl={flowerURI.white}
          onChecked={checkedHandler}
        />
        <Flower
          value={isOrangeChecked}
          type={'orange'}
          imgUrl={flowerURI.orange}
          onChecked={checkedHandler}
        />
      </div>
    </div>
  );
};

export default App;
