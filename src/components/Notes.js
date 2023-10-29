import { useEffect, useState } from 'react';
import Error from './Error';
import Note from './Note';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError('');
    fetch('http://localhost:8001/notes')
      .then((response) => response.json())
      .then((data) => setNotes(data))
      .catch((error) => setError('Unable to fetch notes'));
  }, []);

  return (
    <div className='notes-container'>
      <h1>All Notes</h1>
      <div className='notes-wrapper'>
        {notes.map((note, index) => (
          <Note key={index} note={note} />
        ))}
        {error && <Error message={error} />}
      </div>
    </div>
  );
};

export default Notes;
