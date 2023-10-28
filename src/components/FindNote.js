import { useState } from 'react';

const FindNote = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // filter notes based on search term
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(filteredNotes);
  };

  const notes = [
    { id: 1, title: 'Note 1', content: 'This is the content of note 1' },
    { id: 2, title: 'Note 2', content: 'This is the content of note 2' },
    { id: 3, title: 'Note 3', content: 'This is the content of note 3' },
    { id: 4, title: 'Note 4', content: 'This is the content of note 4' },
    { id: 5, title: 'Note 5', content: 'This is the content of note 5' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10rem' }}>
      <input
        type='text'
        placeholder='Search notes'
        value={searchTerm}
        onChange={handleSearch}
        style={{ padding: '10px', margin: '20px', width: '50%' }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {searchResults.map((note) => (
          <div key={note.id} style={{ border: '1px solid black', padding: '10px', margin: '10px', width: '50%' }}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindNote;
