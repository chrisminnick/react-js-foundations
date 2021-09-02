import React from 'react';
import CartItems from './CartItems';
import DisplayTotal from './DisplayTotal';
import CheckoutButton from './CheckoutButton';
import styles from './Cart.css.js';

function Cart(props){
  return(
    <>
    <div style={styles.cart}>
      <h2>Cart</h2>
      
        <CartItems items = {props.inCart} />

        <DisplayTotal items = {props.inCart} />

        <CheckoutButton />

    </div>
    <pre>
{`import React from 'react';
import CartItems from './CartItems';
import DisplayTotal from './DisplayTotal';
import CheckoutButton from './CheckoutButton';
import styles from './Cart.css.js';

function Cart(props){
  return(
    <div style={styles.cart}>
      <h2>Cart</h2>
      
        <CartItems items = {props.inCart} />

        <DisplayTotal items = {props.inCart} />

        <CheckoutButton />

    </div>
  );
}

export default Cart;`}
    </pre>
    </>
  );
}

export default Cart;