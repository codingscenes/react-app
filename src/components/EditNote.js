import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Error from './Error';
import NoteForm from './NoteForm';

const EditNote = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    setError(null);
    fetch(`http://localhost:8001/notes/${params.id}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError('Something went wrong!'));
  }, []);

  const noteSubmissionHandler = (note) => {
    setError(null);
    fetch(`http://localhost:8001/notes/${params.id}/edit`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: note.title,
        description: note.description,
      }),
    })
      .then((response) => response.json())
      .then((data) => navigate('/'))
      .catch((error) => setError('Something went wrong!'));
  };

  return (
    <div className='new-note-container'>
      <h1>Edit Note!</h1>
      {error && <Error message={error} />}
      <NoteForm data={data} onSubmit={noteSubmissionHandler} />
    </div>
  );
};
export default EditNote;
