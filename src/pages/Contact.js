import { useRef } from 'react';

const Contact = () => {
  const messageRef = useRef('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const message = messageRef.current.value;
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className='ui form '>
        <div className='field'>
          <label>Write your message:</label>
          <textarea rows='2' ref={messageRef}></textarea>
        </div>
        <button className='positive ui button'>Submit</button>
      </div>
    </form>
  );
};

export default Contact;
