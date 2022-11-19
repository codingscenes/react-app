import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  // state change refreshed value
  // setting subscription with state
  //new changes will be reflected on counter variable
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    // dispatching action
    dispatch({ type: 'increment' });
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
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
