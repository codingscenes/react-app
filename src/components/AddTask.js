import React, { useContext, useState } from 'react';
import ThemeContext from '../context/theme-context';

const AddTask = ({ onAddTask }) => {
  const [inputVal, setInputVal] = useState('');
  const context = useContext(ThemeContext);

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
          className={`form-control ${context.isDark && 'input-black'}`}
          placeholder='Enter Task'
          onChange={inputHandler}
          value={inputVal}
        />

        <button
          className={`btn btn-primary margin-top-10 ${
            context.isDark && 'button-black '
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
