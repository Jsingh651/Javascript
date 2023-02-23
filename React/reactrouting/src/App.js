import './App.css';
import {BrowserRouter,Routes, Route,useParams} from "react-router-dom";
import Welcome from './components/Welcome';

const Number = (props) => { 
  const { number } = useParams();
  if (isNaN(number)){
    return (
      <h1>The word is {number}</h1>
    )
  }
  return (
    <h1>The number is: {number}</h1>
  )
}

const Colored = (props) => { 
  const { colorword, color1, color2 } = useParams();
  return (
    <h1 style={{ backgroundColor: color2, color: color1, margin:0, padding:12 }}>The Word is {colorword}</h1>
    )
  }
  

  function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="/home" element={<Welcome/>}/>
      <Route path = "/:number" element={<Number/>}/>
      <Route path = "/:colorword/:color1/:color2" element={<Colored/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
