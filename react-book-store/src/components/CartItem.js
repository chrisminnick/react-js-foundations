import styles from "./CartItem.css.js";

function CartItem(props) {
  return (
    <div style={styles.cartItem}>
      {props.title} - {props.price}
      <button
        onClick={(e) => {
          props.removeFromCart(props.id);
        }}
      >
        remove
      </button>
    </div>
  );
}

export default CartItem;
