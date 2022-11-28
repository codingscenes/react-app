import { useState } from 'react';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <section className='auth'>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form className='ui form'>
        <div className='field'>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required autoComplete='off' />
        </div>
        <div className='field'>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required />
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
