import { useState } from 'react';

const BasicInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // evaluating input validation with input value
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = enteredNameTouched && !enteredNameIsValid;

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    // re-setting form state
    setEnteredName('');
    setEnteredNameTouched(false);
  };

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value); // setting state is async
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          autoComplete='off'
          onChange={nameInputChangeHandler}
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && <p className='error-text'>Name is invalid!</p>}
      </div>

      <div className='form-actions'>
        <button disabled={!formIsValid} type='submit'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicInput;
