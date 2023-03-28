import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
const ItemDetail = (props) => {
    const [item, setItem] = useState({})
    const navigate = useNavigate();
    const {id} = useParams(); 

    const deleteStore = (id) => {
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
            .then(navigate("/"))
            .catch(err => console.log(err));
    };

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then( res => {
                console.log(res.data);
                setItem(res.data);
            })
            .catch( err => console.log(err) );
    }, []);
    return (
        <div>
            <p>Title: {item.title}</p>
            <p>Price: {item.price}</p>
            <p>Description: {item.description}</p>
            <button onClick={(e) => deleteStore(item._id)} className='bttn'>Delete</button>
        </div>
    );
}
export default ItemDetail;
