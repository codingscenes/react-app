import { useContext, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const emailInputRef = useRef('');
  const passwordInputRef = useRef('');

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const sendData = async (url, email, password) => {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    if (response.ok) {
      return data;
    }
    let errorMessage = 'Authentication failed!';
    if (data && data.error && data.error.message) {
      errorMessage = data.error.message;
    }
    throw new Error(errorMessage);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setError(null);
    setIsLoading(true);
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // login or signup
    let url;
    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[Your Key]';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[Your Key]';
    }

    sendData(url, enteredEmail, enteredPassword)
      .then((result) => {
        console.log('result', result);
        //firebase secons * 1000 => milliscond in one hour
        // currentTime in millescond + firebaes time in millisecond
        // overall convert into date object
        const expirationTime = new Date(
          new Date().getTime() + +result.expiresIn * 1000
        );
        authCtx.login(result.idToken, expirationTime.toISOString());
        emailInputRef.current.value = '';
        passwordInputRef.current.value = '';
        history.replace('/');
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const showLoading = () => (
    <div className='ui active inverted dimmer'>
      <div className='ui large text loader'>Working. Please wait...</div>
    </div>
  );

  return (
    <section className='auth'>
      {isLoading && showLoading()}
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      {error && <div className='ui red message'>{error}</div>}
      <form className='ui form' onSubmit={submitHandler}>
        <div className='field'>
          <label htmlFor='email'>Your Email</label>
          <input
            type='email'
            id='email'
            required
            autoComplete='off'
            ref={emailInputRef}
          />
        </div>
        <div className='field'>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className='actions'>
          <button className='positive ui button'>
            {isLogin ? 'Login' : 'Create Account'}
          </button>
          <hr />
          <button
            className='ui button basic tiny'
            type='button'
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
