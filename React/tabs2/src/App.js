import {useState} from 'react';
import './App.css';
import Results from './components/Results';
import Tabs from './components/Tabs'
function App() {
  const tablist = [
    {label: 'Tab 1', content: "This is tab one and it's content"},
    {label: 'Tab 2', content: "This is tab two and it's content"},
    {label: 'Tab 3', content: "This is tab three and it's content"},
    {label: 'Tab 4', content: "This is tab four and it's content"},
  ]
  const [alltabs, setAllTabs] = useState(tablist);
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <div className="App">
    <Tabs
    tablist={ tablist } 
    tabIndex={ tabIndex }
    setTabIndex={ setTabIndex }
    />
    <Results tablist={ tablist } tabIndex={ tabIndex } />


    </div>
  );
}

export default App;
