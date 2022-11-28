import { useRef, useState } from 'react';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBN29U0If0bHmVTqtA-9V5zpDMZ5x2IeVM';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBN29U0If0bHmVTqtA-9V5zpDMZ5x2IeVM';
    }
    sendData(url, enteredEmail, enteredPassword)
      .then((result) => {
        console.log('result', result);
        emailInputRef.current.value = '';
        passwordInputRef.current.value = '';
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
