import { useState } from 'react';
import Section from '../../UI/Section';
import NoteForm from './NoteForm';
const NewNote = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const enterNoteHandler = async (noteText) => {
    setIsLoading(true);
    setError(null);

    console.log(noteText);
    try {
      const response = await fetch(
        'https://customhttp-project-default-rtdb.firebaseio.com/notes.json',
        {
          method: 'POST',
          body: JSON.stringify({ text: noteText }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Requet failed!'); //message
      }

      const data = await response.json();

      const generatedId = data.name;
      const createdNote = { id: generatedId, text: noteText };
      console.log(createdNote);
      props.onAddNote(createdNote);

    } catch (error) {
      setError(error.message || 'Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section>
      <NoteForm onEnterNote={enterNoteHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewNote;
