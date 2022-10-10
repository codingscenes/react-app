/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import Input from './UI/Input';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    if (!email) {
      setInvalidEmail(true);
    } else if (!password) {
      setInvalidPassword(true);
    } else {
      console.log('Form is ready to  submit');
    }
  };
  const changeHandler = (event) => {
    const inputName = event.target.name;
    const value = event.target.value;
    if (inputName === 'email') setEmail(value);
    if (inputName === 'password') setPassword(value);
  };

  return (
    <div className='main'>
      <div className='card'>
        <form onSubmit={submitHandler}>
          <Input
            type={'text'}
            name={'email'}
            value={email}
            label={'Email ID'}
            invalid={invalidEmail}
            onInputChange={changeHandler}
          />
          <Input
            type={'password'}
            name={'password'}
            value={password}
            label={'Password'}
            invalid={invalidEmail}
            onInputChange={changeHandler}
          />
          <button className='btn btn-success' type='submit'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
