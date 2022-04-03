import React from 'react';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
    const [products,setProducts] = useProducts();
    return (
        <div>
            <h1>Order Items: {products.length}</h1>
        </div>
    );
};

export default Orders;