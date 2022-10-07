import React, { useState } from 'react';

const AddTask = ({ onAddTask, isDark }) => {
  const [inputVal, setInputVal] = useState('');

  const inputHandler = (e) => {
    setInputVal(e.target.value);
  };
  const clickHandler = () => {
    onAddTask(inputVal);
    setInputVal('');
  };
  return (
    <div className='row'>
      <div className='col'>
        <input
          type='text'
          className={`form-control ${isDark && 'input-black'}`}
          placeholder='Enter Task'
          onChange={inputHandler}
          value={inputVal}
        />

        <button
          className={`btn btn-primary margin-top-10 ${
            isDark && 'button-black '
          }`}
          onClick={clickHandler}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddTask;
