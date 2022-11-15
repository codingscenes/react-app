import { useEffect, useState } from 'react';

const BasicInput = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [inputIsValid, setInputIsValid] = useState(false);
  const [inputIsTouched, setInputIsTouched] = useState(false);

  useEffect(() => {
    //http
    if (inputIsValid) {
      console.log('Input is valid. please send to backend');
    }
  }, [inputIsValid]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setInputIsTouched(true);

    if (inputValue.trim() === '') {
      setInputIsValid(false);
      return;
    }
    setInputIsValid(true);
    console.log(inputValue);
    setInputValue('');
  };

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const inputIsInvalid = inputIsTouched && !inputIsValid;

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
