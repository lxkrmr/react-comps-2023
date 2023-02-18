import Link from './components/Link';
import useNavigationContext from './hooks/use-navidation-context';

function App() {
  const { currentPath } = useNavigationContext();
  return (
    <div>
      {currentPath}
      <br />
      <Link to="/a1">Click me to go to a1</Link>
      <br />
      <Link to="/b1">Click me to go to b1</Link>
    </div>
  );
}

export default App;
