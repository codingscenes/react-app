import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const increaseHandler = () => {
    dispatch({ type: 'increase', value: 20 });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  return (
    <main className='counter'>
      <h1>Redux Counter</h1>
      {showCounter && <div className='value'> {counter}</div>}
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
