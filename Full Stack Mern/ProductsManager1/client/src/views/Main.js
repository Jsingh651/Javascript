import React, { useState } from 'react'
import Form from "../components/Form";
import Product from '../components/Product';

const Main = () => {
    const [items, setItems] = useState([]);

    return (
        <div>
            <Form items={items} setItems={setItems} />
            <Product items={items} setItems={setItems} />
        </div>
    )
}

export default Main
