import React from 'react';
import { Form, Link, useActionData, useNavigation, useSearchParams } from 'react-router-dom';

const AuthForm = () => {
  const data = useActionData();

  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{isLogin ? 'Login' : 'Register yourself'}</h5>
        <hr />
        <ul>
          {data &&
            data.error &&
            Object.values(data.error).map((err) => (
              <li key={err} style={{ color: 'red' }}>
                {err}
              </li>
            ))}
        </ul>

        <Form method='POST'>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              className='form-control'
              id='email'
              aria-describedby='emailHelp'
              name='email'
              autoComplete='off'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <input type='password' className='form-control' id='password' name='password' />
          </div>
          <button disabled={isSubmitting} type='submit' className='btn btn-primary'>
            {isSubmitting ? 'Submitting' : (isLogin ? 'Login' : 'Signup')}
          </button>
          <div className='mt-4'>
            <Link to={`?mode=${isLogin ? 'signup' : 'login'}`} type='button' role='button' className='btn-link'>
              {isLogin ? ' Need Account?' : 'Already a user?'}
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AuthForm;
