import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './TaskInput.css';

const TaskInput = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const taskInputHandler = (event) => {
    setIsValid(true);
    setInputValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (inputValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddTask(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid': ''}`}>
        <label>Task Name</label>
        <input
          value={inputValue} type='text' onChange={taskInputHandler} />
      </div>
      <Button type='submit'>Add Task</Button>
    </form>
  );
};

export default TaskInput;
