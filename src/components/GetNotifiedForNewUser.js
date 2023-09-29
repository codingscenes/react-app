import { useState } from 'react';

const GetNotifiedForNewUser = () => {
  const [value, setValue] = useState('');

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className='d-flex flex-column notify-form'>
      <input
        className='form-control me-2 search-input'
        type='email'
        placeholder='Enter email 📧'
        aria-label='email'
        value={value}
        name='email'
        onChange={handleInputChange}
        autoComplete='off'
      />
      <button className='btn btn-outline-dark btn-sm' type='submit'>
        Notify
      </button>
    </form>
  );
};
export default GetNotifiedForNewUser;
