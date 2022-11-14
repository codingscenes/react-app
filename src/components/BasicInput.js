import { useRef, useState } from 'react';

const BasicInput = (props) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');

  const formSubmitHandler = (event) => {
    event.preventDefault(); //stop refresh- default behavior

    console.log(inputValue);
    console.log(inputRef.current.value);
    // setInputValue('') // React suggestion (handled by React)
    inputRef.current.value = ''; // vanilla javascript => realDOM
    // it is not suggested to touch or interact with DOM
  };

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          autoComplete='off'
          onChange={inputChangeHandler}
          ref={inputRef}
          value={inputValue}
        />
      </div>
      <div className='form-actions'>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default BasicInput;
