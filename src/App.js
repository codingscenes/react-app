/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import Input from './UI/Input';
const App = () => {
  const [fullName, setFullName] = useState('');
  const childInputRef = useRef(null);

  const changeHandler = (event) => {
    const value = event.target.value;
    setFullName(value);
  };

  useEffect(() => {
    console.log(childInputRef);
    childInputRef.current.focusChildInput();
  }, []);

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
          ref={childInputRef}
        />
      </div>
    </div>
  );
};

export default App;
