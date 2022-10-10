/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { createRef, useRef, useState } from 'react';
import Input from './UI/Input';

const App = () => {
  const [fullName, setFullName] = useState('');
  const childRef = useRef();

  const changeHandler = (event) => {
    const value = event.target.value;
    setFullName(value);
  };

  const focusHandler = () => {
    childRef.current.focusInput();
  };

  return (
    <div className='main'>
      <div className='card'>
        <Input
          type={'text'}
          name={'fullName'}
          value={fullName}
          label={'Full Name'}
          invalid={false}
          onInputChange={changeHandler}
          ref={childRef}
        />
        <button className='btn btn-primary' onClick={focusHandler}>
          Focus Input Field
        </button>
      </div>
    </div>
  );
};

export default App;
