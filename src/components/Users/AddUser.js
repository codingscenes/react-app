import React, { useRef, useState } from 'react';

import Button from '../UIElements/Button';
import Card from '../UIElements/Card';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  // const [enteredName, setEnteredName] = useState('');
  // const [enteredMob, setEnteredMob] = useState('');
  // scoped. will not affect other component
  const useNameRef = useRef(); //only in curren component
  const useMobileRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    const username = useNameRef.current.value;
    const mobileNo = useMobileRef.current.value;

    console.dir(document.getElementById('username'));
    props.onAddUser(username, mobileNo);
    console.log(useNameRef);
    useNameRef.current.value = '';
    useMobileRef.current.value = '';
    // setEnteredName('');
    // setEnteredMob('');
  };

  const nameChangeHandler = (event) => {
    // setEnteredName(event.target.value);
  };

  const mobChangeHandler = (event) => {
    // setEnteredMob(event.target.value);
  };

  return (
    <div>
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Name</label>
          <input
            id='username'
            type='text'
            onChange={nameChangeHandler}
            ref={useNameRef}
          />
          <label htmlFor='mobile Number'>Mobile Number</label>
          <input
            id='mobileNo'
            type='number'
            onChange={mobChangeHandler}
            ref={useMobileRef}
          />
          <Button type='submit'>ADD</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
