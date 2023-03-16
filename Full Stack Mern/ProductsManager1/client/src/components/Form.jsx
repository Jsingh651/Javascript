import React, {useState} from 'react'
import axios from 'axios';
import "./Form.css"
const Form = (props) => {
    const {items, setItems} = props;
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState(); 
    const [description, setDescription] = useState(""); 

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,    
            price,
            description   
        })
            .then((res)=>{
                // console.log(res); 
                console.log(res.data);
                setItems([...items, res.data]); 
                setTitle("");
                setPrice("");
                setDescription("");
            })

            .catch(err=>console.log(err))
    }   
    return (
        <div className='form'>
            <form onSubmit={onSubmitHandler}>
                <input type="text" value={title} placeholder='Title' onChange={(e) => setTitle(e.target.value)}/>
                <input type="number" value={price} placeholder='Price' onChange={(e) => setPrice(e.target.value)}  />
                <input type="text" value={description} placeholder='Description' onChange={(e) => setDescription(e.target.value)}/>
                <button>Create</button>
                <div className="line"></div>
            </form>
        </div>
    )
}

export default Form
