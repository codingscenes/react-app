import { useMutation } from '@tanstack/react-query';

import { useNavigate } from 'react-router-dom';
import { addNewNote } from '../utility/http';
import { queryClient } from '../utility/queryClient';
import ErrorBlock from './ErrorBlock';
import NoteForm from './NoteForm';

const NewNote = () => {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: addNewNote,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['notes'],
        // exact: true
      });
      navigate('/');
    },
  });

  const noteSubmissionHandler = (note) => {
    mutate(note);
  };
  return (
    <div className='new-note-container'>
      <h1>Add Note!</h1>

      {isError && <ErrorBlock message={error.message} />}
      <NoteForm onSubmit={noteSubmissionHandler} />
      {isPending && 'Sending data to backend!'}
    </div>
  );
};
export default NewNote;
