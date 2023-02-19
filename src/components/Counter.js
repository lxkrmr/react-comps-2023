import Button from './Button';
import { useState } from 'react';
import Panel from './Panel';

function Counter({ initialCount }) {
  const [counter, setCounter] = useState(initialCount ?? 0);
  const [add, setAdd] = useState(0);

  const increment = () => setCounter((current) => current + 1);
  const decrement = () => setCounter((current) => current - 1);

  const handleAddChange = (event) => setAdd(parseInt(event.target.value) || 0);
  const handleAddSumbit = (event) => {
    event.preventDefault();
    setCounter((current) => current + add);
    setAdd(0);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count: {counter}</h1>
      <div className="flex flex-row">
        <Button onClick={increment} outline>
          increment
        </Button>
        <Button onClick={decrement} outline>
          decrement{' '}
        </Button>
      </div>

      <form onSubmit={handleAddSumbit}>
        <label>Add a lot!</label>
        <input
          value={add || ''}
          onChange={handleAddChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button outline>Add it!</Button>
      </form>
    </Panel>
  );
}

export default Counter;
