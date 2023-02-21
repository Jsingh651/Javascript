import './App.css';
import PersonCard from './components/PersonCard';
function App() {
  return (
    <div className="App">
    <PersonCard firstName = {"Jane"}
    lastName = {"Doe"}
    initialAge = {45}
    hairColor={"Black"}/>
    
    <PersonCard firstName = {"Smith"}
    lastName = {"John"}
    initialAge = {88}
    hairColor={"Pink"}/>
    
    <PersonCard firstName = {"Filmore"}
    lastName = {"Millard"}
    initialAge = {50}
    hairColor={"blue"}/>
    
    <PersonCard firstName = {"Smith"}
    lastName = {"Maria"}
    initialAge = {62}
    hairColor={"Bald"}/>
    </div>
  );
}

export default App;
