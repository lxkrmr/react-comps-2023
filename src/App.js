import Sidebar from './components/Sidebar';
import Route from './components/Route';
import useNavigation from './hooks/use-navidation';
import AccordionPage from './pages/AccordionPage';
import DropDownPage from './pages/DropDownPage';
import ButtonPage from './pages/ButtonPage';

function App() {
  const { currentPath } = useNavigation();
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropDownPage />
        </Route>
        <Route path="/button">
          <ButtonPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
