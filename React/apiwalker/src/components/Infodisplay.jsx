import React from 'react'
import "../App.css"
const Infodisplay = (props) => {
    const {info} = props;

  return (
    <div className='infocont'>
        <h1>{info.name? `Name: ${info.name}`: ""}</h1>
        <h3>{info.height? `Height: ${info.height}`: ""}</h3>
        <h3>{info.hair_color? `Hair Color: ${info.hair_color}`: ""}</h3>
        <h3>{info.eye_color? `Eye Color: ${info.eye_color}`: ""}</h3>
        <h3>{info.skin_color? `Skin Color: ${info.skin_color}`: ""}</h3>

        <h3>{info.climate? `Climate: ${info.climate}`: ""}</h3>
        <h3>{info.terrain? `Terrain: ${info.terrain}`: ""}</h3>
        <h3>{info.surface_water? `Surface Water: ${info.surface_water}`: ""}</h3>
        <h3>{info.population? `Skin Color: ${info.population}`: ""}</h3>

    </div>
  )
}

export default Infodisplay
