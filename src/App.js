import React, { useEffect, useState } from 'react';
import AddTask from './components/AddTask';
import DisplayTask from './components/DisplayTask';
import Header from './components/Header';


const App = () => {
  const [tasks, addTasks] = useState(['Sleeping now']);

  const addTaskHandler = (data) => {
    addTasks((prev) => [...prev, data]);
  };

  return (
    <div className='container'>
      <div className='row col'>
        <Header />
      </div>
      <div className='row col-md-8 col-lg-6 margin-top20'>
        <AddTask onAddTask={addTaskHandler} />
      </div>

      <div className='row col-md-8 col-lg-6'>
        <DisplayTask tasks={tasks} />
      </div>
    </div>
  );
};

export default App;
