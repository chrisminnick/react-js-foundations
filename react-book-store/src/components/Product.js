import React from "react";
import styles from "./Product.css.js";

const Product = (props) => {
  const handleClick = () => {
    if (props.inCart) {
      props.removeFromCart(props.id);
    } else {
      props.addToCart(props.id);
    }
  };
  const { title, author, published, country, lang, pages, image, url, price } =
    props;

  return (
    <div style={styles.product}>
      <a href={url}>
        <img
          style={styles.thumbnail}
          src={image ? "images/" + image : "images/default.jpg"}
          alt="{title}"
        />
      </a>
      <div>
        <h3>
          <a href={url}>{title}</a>
        </h3>
        <div>by: {author}</div>
        <div>
          Published: {published}, {country}
        </div>
        <div>Language: {lang}</div>
        <div>Pages: {pages}</div>
        <div>Price: ${price}</div>
        <button onClick={handleClick}>
          {props.inCart ? "In Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default React.memo(Product);
