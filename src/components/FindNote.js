import { useEffect, useState } from 'react';
import Error from './Error';
import Note from './Note';

const FindNote = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    // debounce the API call
    const timeoutId = setTimeout(async () => {
      if (!searchTerm) return;
      setError('');
      try {
        const response = await fetch(`http://localhost:8001/search?query=${searchTerm}`);
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        setError('Something went wrong!');
      }
    }, 500); // wait for 500ms before making the API call

    // clear the timeout on every key press
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  return (
    <div className='find-note-container'>
      <input type='text' placeholder='Search notes' value={searchTerm} onChange={handleSearch} />
      <div className='search-results-container'>
        {searchResults.map((note) => (
          <Note key={note.id} note={note} />
        ))}
        {error && <Error message={error} />}
      </div>
    </div>
  );
};

export default FindNote;
