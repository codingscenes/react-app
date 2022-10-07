import React from 'react';
import Task from './Task';

const DisplayTask = ({ tasks }) => {
  return (
    <div className='row'>
      <div className='col'>
        {tasks.map((eachTask, i) => (
          <Task key={i} content={eachTask} />
        ))}
      </div>
    </div>
  );
};

export default DisplayTask;
