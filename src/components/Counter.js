import Button from './Button';
import { useReducer } from 'react';
import Panel from './Panel';

const reducer = (state, action) => {
  if (action.type === 'counter-increment') {
    return {
      ...state,
      counter: state.counter + (action.payload ?? 1),
    };
  }

  if (action.type === 'counter-decrement') {
    return {
      ...state,
      counter: state.counter - (action.payload ?? 1),
    };
  }

  if (action.type === 'add-change') {
    return {
      ...state,
      add: parseInt(action.payload) ?? 0,
    };
  }

  console.error(`Unkown action.type: ${action.type}`);
  return state;
};

function Counter({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, {
    counter: initialCount ?? 0,
    add: 0,
  });

  const increment = () => dispatch({ type: 'counter-increment' });
  const decrement = () => dispatch({ type: 'counter-decrement' });

  const handleAddChange = (event) => {
    dispatch({
      type: 'add-change',
      payload: event.target.value,
    });
  };
  const handleAddSumbit = (event) => {
    event.preventDefault();
    dispatch({ type: 'counter-increment', payload: state.add });
    dispatch({ type: 'add-change', payload: 0 });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count: {state.counter}</h1>
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
          value={state.add || ''}
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
