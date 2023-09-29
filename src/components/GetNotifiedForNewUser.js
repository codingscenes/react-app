import { useEffect } from 'react';
import { Form, useFetcher } from 'react-router-dom';

const GetNotifiedForNewUser = () => {
  const fetcher = useFetcher();

  const { data, state } = fetcher;

  useEffect(() => {
    if (state === 'idle' && data && data.message) {
      window.alert(data.message);
    }
  }, [state, data]);

  return (
    <fetcher.Form method='POST' action='/get-notified' className='d-flex flex-column notify-form'>
      <input
        className='form-control me-2 search-input'
        type='email'
        placeholder='Enter email 📧'
        aria-label='email'
        name='email'
        autoComplete='off'
      />
      <button className='btn btn-outline-dark btn-sm' type='submit'>
        Notify
      </button>
    </fetcher.Form>
  );
};
export default GetNotifiedForNewUser;
