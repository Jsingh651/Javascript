import './App.css';
import Search from './components/Search';
import React, {useState} from "react";
import Infodisplay from './components/Infodisplay';

function App() {
  const [option, setOption] = useState(""); 
  const [info, setInfo] = useState("");
  return (
    <div className="app">
    <Search
    option ={option}
    setOption = {setOption}
    info = {info}
    setInfo = {setInfo}
    />
    
    <Infodisplay info = {info} />
    </div>
  );
}

export default App;
