import React from 'react'
import "./Form.css"
const Form = () => {
    return (
        <div className='form'>
            <form>
                <input type="text" placeholder='Title' />
                <input type="number" placeholder='Price' />
                <input type="text" placeholder='Description'/>
                <button>Create</button>
            </form>
        </div>
    )
}

export default Form
