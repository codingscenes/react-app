const AuthForm = () => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>Login</h5>
        <hr />
        <form>
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
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
          <div className='mt-4'>
            <a role='button' href='#' className='btn-link'>
              Need Account?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AuthForm;
