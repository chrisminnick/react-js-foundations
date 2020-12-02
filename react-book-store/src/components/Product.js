import React from 'react';
import styles from './Product.css.js';
import PropTypes from 'prop-types';

class Product extends React.Component{

    handleClick(){
        if(this.props.inCart) {
            this.props.removeFromCart(this.props.id);
        } else {
            this.props.addToCart(this.props.id);
        }
    }
    render(){
        const {title, author, published, country, lang, pages, image, url, price } = this.props;

        return(
                <div style={styles.product}>
                    <a href={url}><img style={styles.thumbnail} src={image ? "images/" + image:"images/default.jpg"} alt="{title}" /></a>
                    <div>
                        <h3><a href={url}>{title}</a></h3>
                        <div>by: {author}</div>
                        <div>Published: {published}, {country}</div>
                        <div>Language: {lang}</div>
                        <div>Pages: {pages}</div>
                        <div>Price: ${price}</div>
                        <button onClick={this.handleClick.bind(this)}>{this.props.inCart?"In Cart":"Add to Cart"}</button>
                    </div>
                </div>
            );
        }
    }

    Product.propTypes = {
        title: PropTypes.string.isRequired,
        author: PropTypes.string,
        published: PropTypes.string,
        country: PropTypes.string,
        lang: PropTypes.string,
        pages: PropTypes.string,
        image: PropTypes.string,
        url: PropTypes.string,
        price: PropTypes.string
    };
export default Product;