import { useNavigate } from 'react-router-dom';

const Note = ({ note }) => {
  const navigate = useNavigate();
  const dateInstance = new Date(note.date);
  const date = dateInstance.toLocaleDateString('en-GB');
  const time = dateInstance.toLocaleTimeString('en-US');

  const onEdit = () => {
    navigate(`/edit-note/${note.id}`);
  };
  const onRemove = async () => {
    try {
      await fetch(`http://localhost:8001/notes/${note.id}/delete`, {
        method: 'DELETE',
      });
      navigate('/');
    } catch (error) {
      console.error(error);
    }
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
        <div>
          <button className='edit-button' onClick={onEdit}>
            Edit
          </button>
          <button className='delete-button' onClick={onRemove}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};
export default Note;
