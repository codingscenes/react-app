import React from 'react';
import Button from './../../UI/Button/Button';
import './TaskItem.css';

const TaskItem = (props) => {
  const clickHandler = () => {
    props.onComplete(props.id);
  };
  let content = (
    <Button type='button' onClick={clickHandler}>
      Complete
    </Button>
  );

  if (props.isCompleted) {
    content = <span className='emoji-font30 '>✔️</span>;
  }
  return (
    <li className='task-item'>
      {props.children}

      <span className='pos-right'>{content}</span>
    </li>
  );
};

export default TaskItem;
