import Button from './Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Components</h1>
      <div>
        <Button
          primary
          onClick={() => console.log('You have clicked the button.')}
        >
          <GoBell />
          Primary
        </Button>
      </div>
      <div>
        <Button
          primary
          rounded
          onMouseEnter={() =>
            console.log('You have entered the button with your mouse.')
          }
        >
          <GoCloudDownload />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          <GoDatabase />
          Secondary
        </Button>
      </div>
      <div>
        <Button secondary>Secondary</Button>
      </div>
      <div>
        <Button success>Success</Button>
      </div>
      <div>
        <Button warning>Warning</Button>
      </div>
      <div>
        <Button danger>Danger</Button>
      </div>
    </div>
  );
}

export default App;
