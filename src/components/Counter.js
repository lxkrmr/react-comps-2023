import { useState, useEffect } from 'react';
import Button from './Button';

function Counter({ initialCount }) {
  const [counter, setCounter] = useState(initialCount ?? 0);

  useEffect(() => console.log(counter), [counter]);

  const handleClick = () => setCounter((current) => current + 1);

  return (
    <div>
      <div>Count: {counter}</div>
      <Button onClick={handleClick} primary>
        Click me!
      </Button>
    </div>
  );
}

export default Counter;
