import React from 'react';
import styles from './CartItem.css.js';
import PropTypes from 'prop-types';

class CartItem extends React.Component{
    render(){
        return(
            <div style={styles.cartItem}>
                {this.props.title} - {this.props.price}
            </div>
        );
    }
}

CartItem.propTypes = {
    title: PropTypes.string,
    price: PropTypes.string
};
export default CartItem;
