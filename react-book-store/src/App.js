import React, { useState, useEffect } from "react";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";

function App(props) {
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json").then((response) =>
      response
        .json()
        .then((products) => shuffleArray(products))
        .then((products) => {
          setProducts(products);
        })
    );
  }, []);

  const getProduct = (products, item) => {
    return products.find((product) => item === product.id);
  };

  const addToCart = (idToAdd) => {
    let newItems = [...items, idToAdd];
    setItems(newItems);
  };

  const removeFromCart = (idToRemove) => {
    let newItems = items.filter((id) => id !== idToRemove);
    setItems(newItems);
  };

  /**
   * Randomize array element order in-place.
   * Using Durstenfeld shuffle algorithm.
   */
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  let itemDetails = items.map((id) => getProduct(products, id));

  return (
    <div className="container">
      <header className="row">
        <div className="col-md-12">
          <h1>Welcome to React Bookstore</h1>
        </div>
      </header>
      <div className="row">
        <div className="col-md-8">
          <ProductList
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            products={products}
            inCart={items}
          />
        </div>
        <div className="col-md-4">
          <Cart removeFromCart={removeFromCart} inCart={itemDetails} />
        </div>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
