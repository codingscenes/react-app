import PropTypes from 'prop-types';
import React from 'react';

const ErrorBlock = ({ message }) => {
  return (
    <div className='error-container'>
      <p className='error-message'>{message}</p>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorBlock;
