import React, {useState} from 'react'

const PersonCard = (props) => {
  const [age, setAge] = useState(props.initialAge);
  return (
    <div>
    <h1>{props.firstName}, {props.lastName}</h1>
    <h4>Age: {age}</h4>
    <h4>Hair Color: {props.hairColor}</h4>
    <button onClick={(event) => setAge(age +1)}> Birthday button for {props.firstName} {props.lastName}</button>
    </div>
  )
}

export default PersonCard