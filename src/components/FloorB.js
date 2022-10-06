import React from 'react';
import FloorC from './FloorC';

const FloorB = (props) => {
  return (
    <FloorC
      product={props.product}
      doConfirm={props.doConfirm}
      isReceived={props.isReceived}
    />
  );
};

export default FloorB;
