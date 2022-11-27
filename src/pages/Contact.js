import { Fragment, useRef, useState } from 'react';

import { Prompt, useHistory } from 'react-router-dom';

const Contact = () => {
  const messageRef = useRef('');
  const history = useHistory();

  const [iAmTyping, setIAmTyping] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const message = messageRef.current.value;
    messageRef.current.value = '';
    history.push('/welcome');
  };

  const formFocusHandler = (event) => {
    setIAmTyping(true);
  };

  const setIAmTypingFalseHandler = () => {
    setIAmTyping(false);
  };
  return (
    <Fragment>
      <Prompt
        when={iAmTyping}
        message={(location) =>
          'Are you sure, you want to leave? All your data will be lost!'
        }
      />

      <form onFocus={formFocusHandler} onSubmit={onSubmitHandler}>
        <div className='ui form '>
          <div className='field'>
            <label>Write your message:</label>
            <textarea rows='2' ref={messageRef}></textarea>
          </div>
          <button
            className='positive ui button'
            onClick={setIAmTypingFalseHandler}
          >
            Submit
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Contact;
