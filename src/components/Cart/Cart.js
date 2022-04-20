import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;

    // const totalPrice = cart.reduce((total , product) => total + product.price , 0);
    let totalPrice = 0 ;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice = totalPrice + product.price ;
    }

    let shippingCost = 0 ;
    if(totalPrice > 35){
        shippingCost = 0 ;
    }
    else if(totalPrice > 15){
        shippingCost = 4.99 ;
    }
    else if(totalPrice > 0){
        shippingCost = 12.99 ;
    }
    
    const tex = (totalPrice / 10) . toFixed (2) ;

    const grandTotal = (totalPrice + shippingCost +Number(tex)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div className='cart-container'>
            <h2>Order Summery</h2>
            <hr />
            <p>Items Ordered : {cart.length}</p>
            <p>Product Price : {formatNumber(totalPrice)}</p>
            <p><small>Shipping Cost : {shippingCost}</small></p>
            <p><small>Tex + Vat: {tex} </small></p>
            <p className='grand-total'>Total Price : {grandTotal}</p>
        </div>
    );
};

export default Cart;