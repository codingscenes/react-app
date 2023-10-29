import { useNavigate } from 'react-router-dom';

const Note = ({ note }) => {
  const navigate = useNavigate();
  const dateInstance = new Date(note.date);
  const date = dateInstance.toLocaleDateString('en-GB');
  const time = dateInstance.toLocaleTimeString('en-US');

  const onEdit = () => {
    navigate(`/edit-notes/${note.id}`);
  };
  return (
    <div className='note-card'>
      <div className='note-content'>
        <h2>{note.title}</h2>
        <p>{note.description}</p>
      </div>
      <div className='note-footer'>
        <p>
          {date} {time}
        </p>
        <button className='edit-button' onClick={onEdit}>
          Edit
        </button>
      </div>
    </div>
  );
};
export default Note;
