import React, { useState } from 'react';
import Modal from './Modal';
import Task from './Task';
const tasksData = [{ id: 'a1', content: 'Do Homework' }, { id: 'a2', content: 'Play football for an hour' }]
const TaskLists = () => {

    const [tasks, setTasks] = useState(tasksData);
    const [showModal, setShowModal] = useState(false);




    const deleteTaskHandler = (data) => {
        setShowModal(true)
    }


    return (
        <>
            <ul>
                {tasks.map(task => <Task key={task.id} id={task.id} onDeleteTask={deleteTaskHandler}>{task.content}</Task>)}
            </ul>
            {showModal && <Modal onClose={() => { setShowModal(false) }} content={'Do you want to delete?'} />}
        </>

    );
}


export default TaskLists;