import React from 'react';

const Input = (props) => {
  return (
    <div className='form-group'>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        className={`form-control ${props.invalid && 'invalid'} `}
        onChange={props.onInputChange}
        autoComplete={'off'}
      />
    </div>
  );
};

export default Input;
