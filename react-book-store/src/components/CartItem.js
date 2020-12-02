import styles from './CartItem.css.js';

function CartItem(props){
    return(
        <div style={styles.cartItem}>
            {props.title} - {props.price}
        </div>
    );
}

export default CartItem;
