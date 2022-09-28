import React, { useState } from 'react';

const Timer = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [timerValue, setTimerValue] = useState(0);

  const btnHandler = () => {
    setIsStarted(true);
  };

  return (
    <div className='card' style={{ height: 100 }}>
      <h1 style={{ textAlign: 'center' }}>{timerValue}</h1>
      <button className='btn btn-primary' onClick={btnHandler}>Start</button>
    </div>
  );
};

export default Timer;
