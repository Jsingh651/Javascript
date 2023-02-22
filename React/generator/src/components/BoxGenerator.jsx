import React, { useState } from 'react';
import './BoxGenerator.css'

const BoxGenerator = () => {
    const [color, setColor] = useState('');
    const [boxes, setBoxes] = useState([]);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setBoxes([...boxes, { color}]);
        setColor('');
    };

    return (
        <h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="color-input">Color:</label>
                <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)} />
                    {console.log(color)}


                <button type="submit">Add Box</button>

            </form>

            <div className='newDiv'>
                {boxes.map((box, index) => (
                    <div className='box' key={index} style={{ backgroundColor: box.color, height: 100, width: 100 }} />
                ))}
            </div>
        </h1>
    );
};


export default BoxGenerator;
