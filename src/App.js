import React, { useCallback, useState, useMemo } from 'react';
import CustomList from './CustomList';
import Button from './UI/Button';

const App = () => {
  const [title, setTitle] = useState('Default Title');

  const changeTitleHandler = useCallback(() => {
    setTitle('New Title');
  }, []);

  const listItems = useMemo(() => [3, 5, 4, 1, 2], []);//memoized version

  console.log('APP Component Running!');

  return (
    <div className='app'>
      <CustomList title={title} list={listItems} />
      <Button onClick={changeTitleHandler}>Change Title</Button>
    </div>
  );
};

export default App;
