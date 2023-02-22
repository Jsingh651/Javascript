import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(response => setPokemon(response.data.results))
      console.log()
  }, []);
  return (
    <div>
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



