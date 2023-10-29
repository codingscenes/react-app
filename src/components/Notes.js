import { useEffect, useState } from 'react';
import ErrorBlock from './ErrorBlock';
import LoadingBlock from './LoadingBlock';
import Note from './Note';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError('');
    setIsLoading(true);
    fetch('http://localhost:8001/notes')
      .then((response) => {
        if (!response.ok) throw new Error('Unable to fetch Notes!');
        return response.json();
      })
      .then((data) => {
        setNotes(data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className='notes-container'>
      <h1>All Notes</h1>
      <div className='notes-wrapper'>
        {isLoading && <LoadingBlock />}
        {notes.map((note, index) => (
          <Note key={index} note={note} />
        ))}
        {error && <ErrorBlock message={error} />}
      </div>
    </div>
  );
};

export default Notes;
