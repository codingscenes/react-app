import React, { useEffect, useState } from 'react';
import AddTask from './components/AddTask';
import DisplayTask from './components/DisplayTask';
import Header from './components/Header';
const bodyElem = document.getElementsByTagName('body')[0];

const App = () => {
  const [tasks, addTasks] = useState(['Sleeping now']);
  const [isDark, setIsDark] = useState(false);

  const addTaskHandler = (data) => {
    addTasks((prev) => [...prev, data]);
  };
  useEffect(() => {
    if (isDark) {
      bodyElem.classList.add('body-black');
    } else {
      bodyElem.classList.remove('body-black');
    }
  }, [isDark]);

  return (
    <div className='container'>
      <div className='row col'>
        <Header
          onThemeChanged={() => setIsDark((prev) => !prev)}
          isDark={isDark}
        />
      </div>
      <div className='row col-md-8 col-lg-6 margin-top20'>
        <AddTask onAddTask={addTaskHandler} isDark={isDark} />
      </div>

      <div className='row col-md-8 col-lg-6'>
        <DisplayTask tasks={tasks} isDark={isDark} />
      </div>
    </div>
  );
};

export default App;
