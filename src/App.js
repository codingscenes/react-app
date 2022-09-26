import React, { useState } from 'react';
import './App.css';

import TaskInput from './components/DailyTasks/TaskInput/TaskInput';
import TaskList from './components/DailyTasks/TaskList/TaskList';
const App = () => {

  const [tasks, setTasks] = useState([
    { id: 'a1', content: 'Wake up early!', completed: false },
    { id: 'a2', content: 'Switch off bathroom light !', completed: false },
  ]);

  // add new task to state
  const addTaskHandler = (enteredTask) => {
    setTasks((prevTasks) => {
      const modifiedTasks = [...prevTasks];
      modifiedTasks.unshift({
        id: Math.random().toString(),
        content: enteredTask,
        completed: false,
      });
      return modifiedTasks;
    });
  };

  // set completed task to true
  const completeTaskHandler = (taskId) => {
    const clonedTasks = [...tasks];
    const taskIndex = clonedTasks.findIndex(
      (eachTask) => eachTask.id === taskId
    );
    const singleTask = clonedTasks[taskIndex];
    const updatedTask = { ...singleTask, completed: true };
    clonedTasks[taskIndex] = updatedTask;
    setTasks(clonedTasks);
  };

  // When no task in the state, show default msg
  let taskContent = (
    <p style={{ alignCenter: 'center' }}>No task list. Add new one.</p>
  );

  // show content if task is available
  if (tasks.length) {
    taskContent = (
      <TaskList data={tasks} onCompleteTask={completeTaskHandler} />
    );
  }
  return (
    <div className='main-app'>
      <section id='task-form'>
        <TaskInput onAddTask={addTaskHandler} />
        <button className='button'>Test</button>
      </section>
      <section id='tasks'>{taskContent}</section>
    </div>
  );
};

export default App;
