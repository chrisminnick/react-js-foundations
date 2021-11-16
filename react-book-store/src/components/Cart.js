import React from "react";
import CartItem from "./CartItem";
import styles from "./Cart.css.js";

function Cart(props) {
  const calculateTotal = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += Number(items[i].price);
    }
    return total;
  };
  return (
    <div style={styles.cart}>
      <h2>Cart</h2>
      {props.inCart.map((item) => (
        <CartItem
          removeFromCart={props.removeFromCart}
          key={item.id}
          {...item}
        />
      ))}
      Total: ${calculateTotal(props.inCart)} USD
    </div>
  );
}

export default Cart;
