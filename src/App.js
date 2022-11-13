import React, { useEffect, useState } from 'react';

import NewNote from './components/NewNote/NewNote';
import Notes from './components/Notes/Notes';
import useHttp from './hooks/use-http';

function App() {
  const [notes, setNotes] = useState([]);

  const transformNotes = (notesObj) => {
    const loadedNotes = [];
    for (const noteKey in notesObj) {
      loadedNotes.push({ id: noteKey, text: notesObj[noteKey].text });
    }
    setNotes(loadedNotes);
  };
  const {
    isLoading,
    error,
    sendRequest: fetchNotes,
  } = useHttp(
    {
      url: 'https://react-learning-project-6b928-default-rtdb.firebaseio.com/notes.json',
    },
    transformNotes
  );

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
