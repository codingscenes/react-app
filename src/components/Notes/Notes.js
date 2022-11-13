import Section from '../../UI/Section';
import NoteItem from './NoteItem';

const Notes = (props) => {

  let noteList = <h2>No notes found. Start adding new one.</h2>

  if (props.items.length > 0) {
      noteList = (
        <ul>
          {props.items.map((note) => (
            <NoteItem key={note.id}>{note.text}</NoteItem>
          ))}
        </ul>
      );
  }

  let content = noteList;

  if (props.error) {
   content = <button onClick={props.onFetch}>Try again</button>;
  }

  if (props.loading) {
    content = 'Fetching notes.. Please standby.'
  }


  return (
    <Section>
      <div className='container'>
        {content}
      </div>
    </Section>
  );
};

export default Notes;
