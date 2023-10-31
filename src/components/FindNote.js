import { useQuery } from '@tanstack/react-query';

import { useState } from 'react';
import { searchNotes } from '../utility/http';
import ErrorBlock from './ErrorBlock';
import LoadingBlock from './LoadingBlock';
import Note from './Note';
import { useDebounce } from './useDebounce';

const FindNote = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedValue = useDebounce(searchTerm, 800);
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['notes', { mySearchTerm: debouncedValue }],
    queryFn: () => searchNotes(debouncedValue),
    enabled: !!debouncedValue,
    staleTime: 1000 * 30,
  });

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  let content = 'Type anything to search notes!';

  if (isLoading) {
    content = <LoadingBlock />;
  }

  if (isError) {
    content = <ErrorBlock message={error.message} />;
  }

  if (data) {
    content = data.map((note) => <Note key={note.id} note={note} />);
  }

  return (
    <div className='find-note-container'>
      <input type='text' placeholder='Search notes' value={searchTerm} onChange={handleSearch} />
      <div className='search-results-container'>{content}</div>
    </div>
  );
};

export default FindNote;
