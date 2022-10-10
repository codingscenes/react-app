import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const Input = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      // key: value
      focusChildInput: focusInput,
      myName: 'Rohit Sharma',
    };
  });

  return (
    <div className='form-group'>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        className='form-control'
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onInputChange}
        autoComplete={'off'}
        ref={inputRef}
      />
    </div>
  );
});

export default Input;
