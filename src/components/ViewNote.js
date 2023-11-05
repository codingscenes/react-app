import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchNoteById } from '../utility/http';
import ErrorBlock from './ErrorBlock';
import LoadingBlock from './LoadingBlock';
import Note from './Note';

const dummyNote = {
  id: 77,
  title: 'This is after using invalidateQueries',
  description: 'reading about invalidateQueries',
  date: '2023-10-31T19:26:27.700Z',
};
const ViewNote = () => {
  const params = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['notes', { id: params.id }],
    queryFn: ({ signal }) => fetchNoteById({ signal, id: params.id }),
    staleTime: 10 * 1000, // second
  });

  let content = '';

  if (isLoading) {
    content = <LoadingBlock />;
  }

  if (isError) {
    content = <ErrorBlock message={error.message} />;
  }

  if (data) {
    content = <Note note={data} />;
  }

  return (
    <div className='notes-container'>
      <h1>Viewing Note!</h1>
      <div className='notes-wrapper'>{content}</div>
    </div>
  );
};
export default ViewNote;
