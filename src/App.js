import Button from './Button';

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Components</h1>
      <div>
        <Button primary>Primary</Button>
      </div>
      <div>
        <Button primary rounded>
          Primary
        </Button>
      </div>
      <div>
        <Button primary rounded outline>
          Primary
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
