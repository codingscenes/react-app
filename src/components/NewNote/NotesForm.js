import { useRef } from 'react';

const NoteForm = (props) => {
  const noteInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredValue = noteInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      props.onEnterNote(enteredValue);
    }
  };

  return (
    <form className='form' onSubmit={submitHandler}>
      <input type='text' ref={noteInputRef} />
      <button>{props.loading ? 'Sending...' : 'Add Note'}</button>
    </form>
  );
};

export default NoteForm;
