import React, {useContext} from 'react';
import ThemeContext from '../context/theme-context';


const Task = ({ content }) => {
    const context = useContext(ThemeContext);

    return <div className={`card width-100 ${context.isDark && 'black-card'}`}>
        {content}
    </div>;
};

export default Task;
