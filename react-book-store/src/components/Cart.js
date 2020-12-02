import React from 'react';
import CartItem from './CartItem';
import styles from './Cart.css.js';
import PropTypes from 'prop-types';

class Cart extends React.Component{

    calculateTotal(items){
        let total = 0;
        for (let i = 0; i<items.length; i++) {
            total += Number(items[i].price);
        }
        return total;
    }
    render(){
        return(
            <div style={styles.cart}>
                <h2>Cart</h2>
                {this.props.inCart.map(item=>(
                    <CartItem key={item.id} {...item} />
                ))}
                Total: ${this.calculateTotal(this.props.inCart)} USD
            </div>
        );
    }
}

Cart.propTypes = {
  items: PropTypes.array
};
export default Cart;
