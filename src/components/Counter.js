import useCounter from '../hooks/use-counter';
import Button from './Button';

function Counter({ initialCount }) {
  const { counter, increment } = useCounter(initialCount);
  return (
    <div>
      <div>Count: {counter}</div>
      <Button onClick={increment} primary>
        Click me!
      </Button>
    </div>
  );
}

export default Counter;
