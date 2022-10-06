import React, { useReducer } from 'react';

const EMAIL_ID = 'EMAIL_ID';
const EMAIL_PASSWORD = 'PASSWORD';

const initialLoginState = {
  email: '',
  isEmailValid: true,
  password: '',
  isPasswordValid: true,
  isFormValid: false,
};

const loginReducerFn = (state, { type, payload }) => {
  switch (type) {
    case EMAIL_ID:
      return {
        ...state,
        email: payload,
        isEmailInValid: state.email.length && !payload.includes('@'),
        isPasswordInValid: state.password && state.password.length < 6,
        isFormValid: state.isEmailValid && state.isPasswordValid,
      };

    case EMAIL_PASSWORD:
      return {
        ...state,
        password: payload,
        isEmailInValid: state.email.length && !state.email.includes('@'),
        isPasswordInValid: state.password && payload.length < 6,
        isFormValid: state.isEmailValid && state.isPasswordValid,
      };

    default:
      return state;
  }
};

const Login = (props) => {
  const [loginState, dispatchLoginAction] = useReducer(
    loginReducerFn,
    initialLoginState
  );

  const inputHandler = (event) => {
    const nameAttr = event.target.name;
    const value = event.target.value;
    if (nameAttr === 'email') {
      dispatchLoginAction({ type: EMAIL_ID, payload: value });
    }
    if (nameAttr === 'password') {
      dispatchLoginAction({ type: EMAIL_PASSWORD, payload: value });
    }
  };
  const loginHandler = () => {
    props.onLogin();
  };

  return (
    <div className='card'>
      <div className='form-group'>
        <input
          type='text'
          name='email'
          autoComplete='off'
          className='form-control'
          placeholder='Email-ID'
          value={loginState.email}
          onChange={inputHandler}
        />
        {loginState.isEmailInValid ? (
          <span className='error'>Email is invalid</span>
        ) : (
          ''
        )}
      </div>
      <div className='form-group'>
        <input
          type='password'
          name='password'
          className='form-control'
          placeholder='Password'
          value={loginState.password}
          onChange={inputHandler}
        />
      </div>
      {loginState.isPasswordInValid ? (
        <span className='error'>
          Password should contain at-least 6 characters
        </span>
      ) : (
        ''
      )}

      <button
        type='button'
        className='btn btn-primary margin15'
        onClick={loginHandler}
        disabled={!loginState.isFormValid}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
