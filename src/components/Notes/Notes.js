import Section from '../UI/Section';
import NoteItem from './NotesItem';

const Notes = (props) => {
  let noteList = <h2>No notes found. Start adding some!</h2>;

  if (props.items.length > 0) {
    noteList = (
      <ul>
        {props.items.map((notes) => (
          <NoteItem key={notes.id}>{notes.text}</NoteItem>
        ))}
      </ul>
    );
  }

  let content = noteList;

  if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>;
  }

  if (props.loading) {
    content = 'Loading notes...';
  }

  return (
    <Section>
      <div className='container'>{content}</div>
    </Section>
  );
};

export default Notes;
