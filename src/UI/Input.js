import React, {
  createRef,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';

const Input = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      focusInput: () => inputRef.current.focus(),
    };
  });
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
        ref={inputRef}
      />
    </div>
  );
});

export default Input;
