import React from 'react';
import FloorB from './FloorB';

const FloorA = (props) => {
  return (
    <FloorB
      product={props.product}
      doConfirm={props.doConfirm}
      isReceived={props.isReceived}
    />
  );
};

export default FloorA;
