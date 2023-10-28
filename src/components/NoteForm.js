import { useState } from 'react';

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Title: ${title}, Description: ${description}`);
    // Add logic to submit form data to backend or perform other actions
  };

  return (
    <form onSubmit={handleSubmit} className='note-form'>
      <label htmlFor='title' className='note-form__label'>
        Title:
      </label>
      <input
        type='text'
        id='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='note-form__input'
      />

      <label htmlFor='description' className='note-form__label'>
        Description:
      </label>
      <textarea
        id='description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className='note-form__textarea'
        rows={5}
      />

      <button type='submit' className='note-form__button'>
        Submit
      </button>
    </form>
  );
};

export default NoteForm;
