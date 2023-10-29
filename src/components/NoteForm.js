import { useRef } from 'react';

const NoteForm = ({ onSubmit, data = {} }) => {
  const titleRef = useRef(null);
  const descRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const description = descRef.current.value;
    console.log(`Title: ${title}, Description: ${description}`);
    onSubmit({ title, description });
  };

  return (
    <form onSubmit={handleSubmit} className='note-form'>
      <label htmlFor='title' className='note-form__label'>
        Title:
      </label>
      <input
        type='text'
        id='title'
        name='title'
        className='note-form__input'
        defaultValue={data?.title}
        ref={titleRef}
      />

      <label htmlFor='description' className='note-form__label'>
        Description:
      </label>
      <textarea
        id='description'
        name='description'
        className='note-form__textarea'
        rows={5}
        defaultValue={data?.description}
        ref={descRef}
      />

      <button type='submit' className='note-form__button'>
        Submit
      </button>
    </form>
  );
};

export default NoteForm;
