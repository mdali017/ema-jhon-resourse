import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const { img, name, seller, ratings, price } = props.product;
    return (
        <div className='product'>
            {/* <h1>this is product</h1> */}
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <p>Price: ${price}</p>
                <p>Menufacturer: {seller}</p>
                <p>Rating: {ratings} Star</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;