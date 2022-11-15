import { useState } from 'react';

const BasicInput = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [inputIsTouched, setInputIsTouched] = useState(false);

  // evaluating input validation with input value
  const inputIsValid = inputValue.trim() !== '';
  const inputIsInvalid = inputIsTouched && !inputIsValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setInputIsTouched(true);

    if (!inputIsValid) {
      return;
    }

    // re-setting form state
    setInputValue('');
    setInputIsTouched(false);
  };

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value); // setting state is async
  };

  const inputBlurHandler = (event) => {
    setInputIsTouched(true);
  };

  const inputClasses = inputIsInvalid ? 'form-control invalid' : 'form-control';

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
          onBlur={inputBlurHandler}
        />
        {inputIsInvalid && <p className='error-text'>Input is invalid!</p>}
      </div>
      <div className='form-actions'>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default BasicInput;
