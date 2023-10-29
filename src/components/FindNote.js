import { useEffect, useState } from 'react';
import ErrorBlock from './ErrorBlock';
import LoadingBlock from './LoadingBlock';
import Note from './Note';

const FindNote = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    // debounce the API call
    const timeoutId = setTimeout(async () => {
      setSearchResults([]);
      if (!searchTerm) return;
      setError('');
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:8001/search?query=${searchTerm}`);
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        setError('Something went wrong!');
      } finally {
        setIsLoading(false);
      }
    }, 500); // wait for 500ms before making the API call

    // clear the timeout on every key press
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  return (
    <div className='find-note-container'>
      <input type='text' placeholder='Search notes' value={searchTerm} onChange={handleSearch} />
      <div className='search-results-container'>
        {isLoading && !searchResults.length && <LoadingBlock />}

        {searchResults.map((note) => (
          <Note key={note.id} note={note} />
        ))}
        {error && <ErrorBlock message={error} />}
      </div>
    </div>
  );
};

export default FindNote;
