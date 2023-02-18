import Link from './components/Link';
import Route from './components/Route';
import useNavigation from './hooks/use-navidation';
import AccordionPage from './pages/AccordionPage';
import DropDownPage from './pages/DropDownPage';

function App() {
  const { currentPath } = useNavigation();
  return (
    <div>
      {currentPath}
      <br />
      <Link to="/accordion">Go to accordion</Link>
      <br />
      <Link to="/dropdown">Go to drop down</Link>
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropDownPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
