import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import './TaskList.css';

const TaskList = (props) => {
  return (
    <ul className='task-list'>
      {props.data.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          onComplete={props.onCompleteTask}
          isCompleted={task.completed}
        >
          {task.content}
        </TaskItem>
      ))}
    </ul>
  );
};

export default TaskList;
