import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const increaseHandler = () => {
    // sending extra data or payload on action object
    // it wil sent to reducer function and data can be accessed on action object
    dispatch({ type: 'increase', value: 20 });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  return (
    <main className='counter'>
      <h1>Redux Counter</h1>
      <div className='value'> {counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment By 20</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
