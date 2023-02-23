import React,{useState} from 'react'
import '../App.css'
import axios from "axios";

const Search = (props) => {
  const {option, setOption, info, setInfo} = props;
  const [inputId, setInputId] = useState(0);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(option + inputId)
      .then(response => { setInfo(response.data)})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Search for:</h1>
        <select className='select'  onChange={(e) => setOption(e.target.value)}>
          <option disabled selected >Choose</option>
          <option value="https://swapi.dev/api/planets/" >Planets</option>
          <option value ="https://swapi.dev/api/people/">People</option>
          <option value ="https://swapi.dev/api/films/">Films</option>
          <option value ="https://swapi.dev/api/species/">Species</option>
          <option value ="https://swapi.dev/api/starships/">Starships</option>
          <option value ="https://swapi.dev/api/vehicles/">Vehicles</option>
        </select>
        <h3>ID:</h3>
        <input className='numberinput' type="number" onChange={(e) => setInputId(e.target.value)}/>
        <button>Search</button>
      </form>
    </div>
  )
}

export default Search
