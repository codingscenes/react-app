import React from 'react';
import FloorB from './FloorB';

const FloorA = (props) => {
  return (
    <FloorB
      bag={props.bag}
      doConfirm={props.doConfirm}
      isReceived={props.isReceived}
    />
  );
};

export default FloorA;
