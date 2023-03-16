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
    return (

        <div>
            <div className="products"><h1>All Products:</h1></div>
            {
                items.map((item, index) => {
                    return(
                        <h3 key={index}>
                        <Link to={`/api/product/${item._id}`}> {item.title}'s Page! </Link>
                        </h3>
                    )
                })
            }
        </div>
    )
}

export default Product
