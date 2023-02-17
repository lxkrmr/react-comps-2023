import Accordion from './components/Accordion';

function App() {
  const items = [
    {
      id: 'id-1',
      label: 'This is the first label with a bit more text.',
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
    },
    {
      id: 'id-2',
      label: 'This is a second label!',
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
    },
    {
      id: 'id-3',
      label: 'Finally a third label.',
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
    },
  ];

  return <Accordion items={items} />;
}

export default App;
