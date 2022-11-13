import { useRef } from 'react';

const NoteForm = (props) => {
  const noteInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredValue = noteInputRef.current.value;
    if (enteredValue.trim().length > 0) {
      props.onEnterNote(enteredValue);
      noteInputRef.current.value = '';
    }
  };
  return (
    <form className='form' onSubmit={submitHandler}>
      <input type='text' ref={noteInputRef} />
      <button> {props.loading ? 'Adding...' : 'Add Note'}</button>
    </form>
  );
};

export default NoteForm;
