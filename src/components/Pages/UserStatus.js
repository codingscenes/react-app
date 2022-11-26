import { useState } from 'react';

const UserStatus = (props) => {
  const [value, setValue] = useState('');
  return (
    <>
      <h3>{props.username}</h3>
      <select
        name='status'
        id='status'
        className='form-control'
        value={value || props.status}
        onChange={(event) => setValue(event.target.value)}
      >
        <option value='Online'>Online</option>
        <option value='Offline'>Offline</option>
      </select>
      <hr />
      <button
        className='btn btn-primary'
        onClick={() => props.onStatusUpdate(value, props.id)}
      >
        Update
      </button>
    </>
  );
};

export default UserStatus;
