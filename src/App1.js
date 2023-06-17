import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('Calling UseEffect!');
    document.title = `About page`;
  }, [count]);

  const clickHandler = () => {
    setCount(0);
  };

  console.log('Component Rendered!');
  return (
    <div className='App'>
      <span>clicked {count} times</span>
      <hr />
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default App;
