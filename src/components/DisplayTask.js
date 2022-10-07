import React from 'react';

const DisplayTask = ({ tasks, isDark }) => {
  return (
    <div className='row'>
      <div className='col'>
        {tasks.map((eachTask, i) => (
          <div key={i} className={`card ${isDark && 'black-card'}`}>
            {eachTask}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayTask;
