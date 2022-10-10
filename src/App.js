/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import Input from './UI/Input';

const App = () => {
  const [fullName, setFullName] = useState('');

  const changeHandler = (event) => {
    const value = event.target.value;
    setFullName(value);
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
        />
      </div>
    </div>
  );
};

export default App;
