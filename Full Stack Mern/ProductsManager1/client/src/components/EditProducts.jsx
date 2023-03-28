import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const EditProducts = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: "",
    });

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/product/${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    const onChangeHandler = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/product/update/${id}`, product)
            .then((res) => { console.log(res);
                navigate(`/`);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className='playerForm'>
            <div className='form'>
                <form className='form' onSubmit={handleSubmit}>
                    <input type='text' className='form-control' name='title' id='title' value={product.title} onChange={onChangeHandler} />
                    <input type='number' className='form-control' name='price' id='price' value={product.price} onChange={onChangeHandler} />
                    <input type='text' className='form-control' name='description' id='description' value={product.description} onChange={onChangeHandler} />
                    <button>Update</button>
                </form>
                
                <div className="line"></div>
            </div>
        </div>
    );
};

export default EditProducts;
