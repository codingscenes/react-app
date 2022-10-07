import React from 'react';

const Task = ({ isDark, content }) => {
    return <div className={`card width-100 ${isDark && 'black-card'}`}>
        {content}
    </div>;
};

export default Task;
