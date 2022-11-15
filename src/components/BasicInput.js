import { useState } from 'react';

const BasicInput = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [inputIsValid, setInputIsValid] = useState(true);

  const formSubmitHandler = (event) => {
    //stop refreshing webpage- default browser behavior
    event.preventDefault();

    if (inputValue.trim() === '') {
      setInputIsValid(false);
      return;
    }
    setInputIsValid(true);
    console.log(inputValue);
  };

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const inputClasses = inputIsValid ? 'form-control' : 'form-control invalid';
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          autoComplete='off'
          onChange={inputChangeHandler}
          value={inputValue}
        />
        {!inputIsValid && <p className='error-text'>Input is invalid!</p>}
      </div>
      <div className='form-actions'>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default BasicInput;
