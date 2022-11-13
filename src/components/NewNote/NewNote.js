import { useState } from 'react';

import Section from '../UI/Section';
import NoteForm from './NoteForm';

import useHttp from '../../hooks/use-http';

const NewNote = (props) => {
  const { isLoading, error, sendRequest: sendNoteRequest } = useHttp();

  const createNote = (noteText, noteData) => {
    const generatedId = noteData.name;
    const createdNote = { id: generatedId, text: noteText };
    props.onAddNote(createdNote);
  };

  const enterNoteHandler = async (noteText) => {

    sendNoteRequest(
      {
        url: 'https://react-learning-project-6b928-default-rtdb.firebaseio.com/notes.json',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { text: noteText },
      },
      createNote.bind(null, noteText)  // createNote('334xx', data)
    );
  };

  return (
    <Section>
      <NoteForm onEnterNote={enterNoteHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewNote;
