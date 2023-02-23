import logo from './logo.svg';
import './App.css';
import React, {useEffect,useState} from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(response => response.json())
    
    .then(response => setPokemon(response.results))
  });
  console.log(pokemon)
  return (
    <div className="App">
    {
      pokemon.map((one, idx)=> {
        return(
        <li key={idx}>{one.name}</li>
        )
      }) 
    }
    </div>
  );
}

export default App;
