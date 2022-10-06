import React from 'react';
import FloorC from './FloorC';

const FloorB = (props) => {
  return (
    <FloorC
      bag={props.bag}
      doConfirm={props.doConfirm}
      isReceived={props.isReceived}
    />
  );
};

export default FloorB;
