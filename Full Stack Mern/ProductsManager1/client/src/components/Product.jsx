import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
const Product = (props) => {
    const { items, setItems } = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setItems(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const deleteItem = (id) => {
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
            .then(res => {
                const filterdItems = items.filter(items => items._id !== id);
                setItems(filterdItems);
            })
            .catch(err => console.log(err));
    };
    return (

        <div>
            <div className="products"><h1>All Products:</h1></div>
            {
                items.map((item, index) => {
                    return(
                        <h3 key={index}>
                        <div className="linked">
                        <Link to={`/api/product/${item._id}`}> {item.title}'s Page! </Link>
                        <td><a href={`/product/edit/${item._id}`}>Edit</a></td>
                        <button onClick={(e) => deleteItem(item._id)} className='bttn'>Delete</button>
                        </div>

                        </h3>
                    )
                })
            }
        </div>
    )
}

export default Product
