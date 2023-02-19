import Counter from '../components/Counter';

function CounterPage() {
  return (
    <div>
      <h1>Counter</h1>
      <p className="m-4">By default counter will start at 0</p>
      <Counter />
      <p className="m-4">
        But one can define value via the <strong>initialCount</strong> prop
      </p>
      <Counter initialCount={120} />
    </div>
  );
}

export default CounterPage;
