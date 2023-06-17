import { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [person, setPerson] = useState({
    name: '',
    isAlive: false,
  });

  useEffect(() => {
    console.log('Calling UseEffect!');
  }, [person]);

  const handleSetName = () => {
    setPerson((prev) => ({
      ...prev,
      name,
    }));
  };

  const handleMakeAlive = () => {
    setPerson((prev) => ({ ...prev, isAlive: true }));
  };
  console.log('Component Rendered!');
  return (
    <div className='App'>
      <input type='text' onChange={(event) => setName(event.target.value)} />
      <button onClick={handleSetName}> Set Name </button>
      <button onClick={handleMakeAlive}>Make Alive</button>
      <hr />
      {`Name: ${person.name}, Alive:${person.isAlive}`}
    </div>
  );
}

export default App;
