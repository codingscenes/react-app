import PropTypes from 'prop-types';
import React from 'react';

const ErrorBlock = ({ message }) => {
  let errorMessage = message;

  if (typeof message === 'object') {
    errorMessage = Object.values(message.error).join(', ');
  }
  return (
    <div className='error-container'>
      <p className='error-message'>{errorMessage}</p>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorBlock;
