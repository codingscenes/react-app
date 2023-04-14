import React, { useState } from 'react';

export const withState = WrappedComponent => {

    const WithState = (props) => {

        const [count, setCount] = useState(0);

        const increment = () => {
            setCount(prev => prev + 1);
        };

        const decrement = () => {
            setCount(prev => prev - 1);
        };

        return <WrappedComponent count={count} increment={increment} decrement={decrement} />;
    };

    return WithState;
};
