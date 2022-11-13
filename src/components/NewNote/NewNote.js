import { useState } from 'react';

import Section from '../UI/Section';
import NoteForm from './NoteForm';

const NewNote = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const enterNoteHandler = async (noteText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://react-learning-project-6b928-default-rtdb.firebaseio.com/notes.json',
        {
          method: 'POST',
          body: JSON.stringify({ text: noteText }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      const generatedId = data.name;
      const createdNote = { id: generatedId, text: noteText };

      props.onAddNote(createdNote);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };

  return (
    <Section>
      <NoteForm onEnterNote={enterNoteHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewNote;
