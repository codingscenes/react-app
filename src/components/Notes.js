import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '../utility/http';
import ErrorBlock from './ErrorBlock';
import LoadingBlock from './LoadingBlock';
import Note from './Note';

const Notes = () => {
  const { data, isPending, isLoading, isError, error } = useQuery({
    queryKey: ['notes'],
    queryFn: fetchNotes,
  });

  return (
    <div className='notes-container'>
      <h1>All Notes</h1>
      <div className='notes-wrapper'>
        {isLoading && <LoadingBlock />}
        {data && data.map((note, index) => <Note key={index} note={note} />)}
        {error && <ErrorBlock message={error.message} />}
      </div>
    </div>
  );
};

export default Notes;
