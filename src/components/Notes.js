import { useEffect, useState } from 'react';
import Note from './Note';

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/notes')
      .then((response) => response.json())
      .then((data) => setNotes(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='notes-container'>
      <h1>All Notes</h1>
      <div className='notes-wrapper'>
        {notes.map((note, index) => (
          <Note key={index} note={note} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
