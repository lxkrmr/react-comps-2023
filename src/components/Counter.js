import Button from './Button';
import { useReducer } from 'react';
import Panel from './Panel';

const AT_COUNTER_INCREMENT = 'counter-increment';
const AT_COUNTER_DECREMENT = 'counter-decrement';
const AT_ADD_CHANGE = 'add-change';

const reducer = (state, action) => {
  switch (action.type) {
    case AT_COUNTER_INCREMENT:
      return {
        ...state,
        counter: state.counter + (action.payload ?? 1),
      };
    case AT_COUNTER_DECREMENT:
      return {
        ...state,
        counter: state.counter - (action.payload ?? 1),
      };
    case AT_ADD_CHANGE:
      return {
        ...state,
        add: parseInt(action.payload) ?? 0,
      };
    default:
      console.error(`Unkown action.type: ${action.type}`);
      return state;
  }
};

function Counter({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, {
    counter: initialCount ?? 0,
    add: 0,
  });

  const increment = () => dispatch({ type: AT_COUNTER_INCREMENT });
  const decrement = () => dispatch({ type: AT_COUNTER_DECREMENT });

  const handleAddChange = (event) => {
    dispatch({
      type: AT_ADD_CHANGE,
      payload: event.target.value,
    });
  };
  const handleAddSumbit = (event) => {
    event.preventDefault();
    dispatch({ type: AT_COUNTER_INCREMENT, payload: state.add });
    dispatch({ type: AT_ADD_CHANGE, payload: 0 });
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
