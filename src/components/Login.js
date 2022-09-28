import React, { useEffect, useState } from 'react';

const Login = (props) => {
  const [otp, setOtp] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(otp.length !== 4 && otp !== '');
  }, [otp]); // if otp variable is changed, plz run the function

  const otpHandler = (event) => {
    const otpValue = event.target.value;
    setOtp(otpValue);
  };
  const loginHandler = () => {
    if (!(otp === '0000')) {
      setIsError(true);
      return;
    }
    props.onLogin();
  };

  return (
    <div className='card'>
      <div className='form-group'>
        <input
          type='text'
          name='otp'
          className='form-control'
          placeholder='OTP'
          value={otp}
          onChange={otpHandler}
        />
      </div>
      {isError && <span className='error'>Invalid OTP</span>}

      <button
        type='button'
        className='btn btn-primary margin15'
        onClick={loginHandler}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
