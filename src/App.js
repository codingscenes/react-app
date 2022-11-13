import React, { useEffect, useState } from 'react';

import NewNote from './components/NewNote/NewNote';
import Notes from './components/Notes/Notes';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://react-learning-project-6b928-default-rtdb.firebaseio.com/notes.json'
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      const loadedNotes = [];
      for (const noteKey in data) {
        loadedNotes.push({ id: noteKey, text: data[noteKey].text });
      }

      setNotes(loadedNotes);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const noteAddHandler = (note) => {
    setNotes((prevNotes) => prevNotes.concat(note));
  };

  return (
    <React.Fragment>
      <NewNote onAddNote={noteAddHandler} />
      <Notes
        items={notes}
        loading={isLoading}
        error={error}
        onFetch={fetchNotes}
      />
    </React.Fragment>
  );
}

export default App;
