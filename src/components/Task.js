import React from 'react';


const Task = (props) => {
    return (
        <li onClick={() => props.onDeleteTask(props.id)}>
            {props.children}
        </li>
    );
}

export default Task;