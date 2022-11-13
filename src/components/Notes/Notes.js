import Section from '../UI/Section';
import NoteItem from './NoteItem';

const Notes = (props) => {
  let noteList = <h2>No notes found. Start adding first one.</h2>;

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
    content = 'Fetching notes. Please standby.';
  }

  return (
    <Section>
      <div className='container'>{content}</div>
    </Section>
  );
};

export default Notes;
