import React from "react";
import Product from "./Product";
import styles from "./ProductList.css.js";

const ProductList = (props) => {
  const inCart = props.inCart;
  const products = props.products;

  if (products.length > 0) {
    return (
      <ul style={styles.productList}>
        {products.map((product) => (
          <li key={product.id} style={styles.productListItem}>
            <Product
              {...product}
              inCart={inCart.includes(product.id) ? "1" : ""}
              addToCart={props.addToCart}
              removeFromCart={props.removeFromCart}
            />
          </li>
        ))}
      </ul>
    );
  } else {
    return null;
  }
};

export default React.memo(ProductList);
