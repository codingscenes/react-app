import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';
import './TaskInput.css';


const TaskInput = (props) => {

  const FormControl = styled.div`
  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => props.invalid ? 'firebrick' : 'black'}
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => props.invalid ? 'rgb(180, 0, 0)' : '#ccc'};
  background: ${props => props.invalid ? 'rgb(197, 35, 35)' : 'transparent'};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.28rem;
  border-radius: 8px;
}

& input:focus {
  outline: none;
  background: #f3bcff;
  border-color: #e56fff85;
}

// &.invalid input {
//   border-color: rgb(180, 0, 0);
//   background: rgb(197, 35, 35);
// }

// &.invalid label {
//   color: firebrick;
// }

  `;

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
      {/* <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Task Name</label>
        <input
          value={inputValue} type='text' onChange={taskInputHandler} />
      </div> */}

      {/* <FormControl className={ !isValid && 'invalid' }>
        <label>Task Name</label>
        <input
          value={inputValue} type='text' onChange={taskInputHandler} />
      </FormControl> */}

      <FormControl invalid={!isValid}>
        <label>Task Name</label>
        <input
          value={inputValue} type='text' onChange={taskInputHandler} />
      </FormControl>

      <Button type='submit'>Add Task</Button>
    </form>
  );
};

export default TaskInput;
