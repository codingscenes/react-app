import React, { useEffect, useState } from 'react';
import NewNote from './components/NewNotes/NewNote';
import Notes from './components/Notes/Notes';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://customhttp-project-default-rtdb.firebaseio.com/notes.json'
      );

      if (!response.ok) {
        throw new Error('Request failed!'); //message
      }

      const data = await response.json();

      const loadedNotes = [];
      for (const noteKey in data) {
        loadedNotes.push({
          id: noteKey,
          text: data[noteKey].text,
        });
      }
      setError(null);
      setNotes(loadedNotes);
    } catch (error) {
      setError(error.message || 'Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  };

  const noteAddHandler = (note) => {
    // write the logic later
    setNotes(prevNotes => prevNotes.concat(note))
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
