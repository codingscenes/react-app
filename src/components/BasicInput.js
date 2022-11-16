import { useState } from 'react';

const BasicInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // Name validation check
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = enteredNameTouched && !enteredNameIsValid;

  // Email id validation check
  const enteredEmailIsValid =
    enteredEmail.trim() !== '' && enteredEmail.includes('@');
  const emailInputIsInvalid = enteredEmailTouched && !enteredEmailIsValid;

  // form validity code starts here
  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    // re-setting form state
    setEnteredName('');
    setEnteredEmail('');
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value); // setting state is async
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';
  const emailInputClasses = emailInputIsInvalid
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
      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email-ID</label>
        <input
          type='text'
          id='email'
          autoComplete='off'
          onChange={emailInputChangeHandler}
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
        />
        {emailInputIsInvalid && (
          <p className='error-text'>Email-ID is invalid!</p>
        )}
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
