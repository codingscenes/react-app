import React, { useState } from 'react';

import Button from '../UIElements/Button';
import Card from '../UIElements/Card';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredMob, setEnteredMob] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    props.onAddUser(enteredName, enteredMob);
    setEnteredName('');
    setEnteredMob('');
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const mobChangeHandler = (event) => {
    setEnteredMob(event.target.value);
  };

  return (
    <div>
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Name</label>
          <input
            id='username'
            type='text'
            value={enteredName}
            onChange={nameChangeHandler}
          />
          <label htmlFor='mobile Number'>Mobile Number</label>
          <input
            id='mobileNo'
            type='number'
            value={enteredMob}
            onChange={mobChangeHandler}
          />
          <Button type='submit'>ADD</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
