import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/index';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle()); // {type: UNIQUE_IDENTIFER, payload: undefined}
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(20)); // {type: 'UNIQUE_GENERATED_IDENTIFIER', payload: 20}
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
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
