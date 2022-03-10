import React, { useState } from 'react';
import styles from './Cart.css.js';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function Cart(props) {
  const [inCart, setInCart] = useState(props.inCart);

  const removeFromCart = (item) => {
    const index = inCart.indexOf(item);
    const newCart = [...inCart.slice(0, index), ...inCart.slice(index + 1)];
    setInCart(newCart);
  };

  const calculatedTotal = inCart.reduce(
    (accumulator, item) => accumulator + (item.price || 0),
    0
  );

  let ItemList = inCart.map((item) => {
    return (
      <div key={item.id}>
        {item.title} - {item.price}
        <button
          onClick={() => {
            removeFromCart(item);
          }}
        >
          remove
        </button>
      </div>
    );
  });

  return (
    <>
      <div style={styles.cart}>
        <h2>Cart</h2>

        {ItemList}

        <p>total: ${calculatedTotal}</p>

        <button>Checkout</button>
      </div>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import React,{useState} from 'react';
import styles from './Cart.css.js';

function Cart(props){

  const [inCart,setInCart] = useState(props.inCart);

  const removeFromCart = (item)=>{
    const index = inCart.indexOf(item);
    const newCart = [...inCart.slice(0, index), ...inCart.slice(index + 1)];
    setInCart(newCart);
  };

  const calculatedTotal = inCart.reduce((accumulator, item) => accumulator + (item.price || 0), 0);
  
  let ItemList = inCart.map((item)=>{
    return (<div key={item.id}>{item.title} - {item.price}
      <button onClick={()=>{removeFromCart(item)}}>remove</button></div>)
  });

  return(
    <div style={styles.cart}>
      <h2>Cart</h2>
      
        {ItemList}

        <p>total: ${calculatedTotal}</p>

        <button>Checkout</button>

    </div>
  );
}

Cart.defaultProps = {
    inCart: [{id:1,title:"React JS Foundations",price:5}]
};

export default Cart;`}
      </SyntaxHighlighter>
    </>
  );
}

Cart.defaultProps = {
  inCart: [{ id: 1, title: 'React JS Foundations', price: 5 }],
};

export default Cart;
