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
      <div className='row'>
        <div className='col'>
          <Header
            onThemeChanged={() => setIsDark((prev) => !prev)}
            isDark={isDark}
          />
        </div>
      </div>
      <div className='row margin-top20'>
        <div className='col-xs-12 col-md-8 col-lg-6'>
          <AddTask onAddTask={addTaskHandler} isDark={isDark} />
        </div>
      </div>

      <div className='row'>
        <div className='col-xs-12 col-md-8 col-lg-6'>
          <DisplayTask tasks={tasks} isDark={isDark} />
        </div>
      </div>
    </div>
  );
};

export default App;
