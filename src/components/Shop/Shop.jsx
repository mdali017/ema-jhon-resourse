import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    console.log(products)

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="products-container">
               {/* <h1>Product Comming Soon: {product.length}</h1> */}
               {
                // products.map(product => console.log(product))
                products.map(product => <Product
                                      key={product.id}
                                      product={product}
                                   >{product}</Product>)
               }
            </div>
            <div className="card-container">
                <h4>Order Summary</h4>
            </div>
        </div>
    );
};

export default Shop;