import './App.css';
import Tabs from './components/tabs/Tabs';

const tabs = [
  {
    id: 'tab-1',
    name: 'Tab 1',
    text: 'Tab 1 content is showing here.'
  }, {
    id: 'tab-2',
    name: 'Tab 2',
    text: 'Tab 2 content is showing here.'
  }, {
    id: 'tab-3',
    name: 'Tab 3',
    text: 'Tab 3 content is showing here.'
  }
];

function App() {
  return (
    <div className="App">
      <Tabs tabs={tabs}></Tabs>
    </div>
  );
}

export default App;
