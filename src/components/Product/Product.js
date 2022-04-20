import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const {img , name , seller , price , stock} = props.product ;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className="product-name">{name}</h3>
                <p><small>by:{seller}</small></p>
                <br/>
                <p>${price}</p>
                <p><small>Only {stock} left in stoke - order soon</small></p>

                <button className='add-cart' 
                onClick={() => props.handleAddProduct(props.product)}>

                <FontAwesomeIcon icon={faShoppingCart}/> Add to Cart</button>
            </div>
            
            
        </div>
    );
};

export default Product;