const Note = ({ note }) => {
  return (
    <div className='note-card'>
      <div className='note-content'>
        <h2>{note.title}</h2>
        <p>{note.description}</p>
      </div>
      <div className='note-footer'>
        <p>{note.date}</p>
        <button className='edit-button'>Edit</button>
      </div>
    </div>
  );
};
export default Note