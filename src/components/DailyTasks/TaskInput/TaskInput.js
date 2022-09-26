import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './TaskInput.css';

const TaskInput = (props) => {
  const [inputValue, setInputValue] = useState('');

  const taskInputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddTask(inputValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='Task Name'>Task Name</label>
        <input type='text' onChange={taskInputHandler} />
      </div>
      <Button type='submit'>Add Task</Button>
    </form>
  );
};

export default TaskInput;
