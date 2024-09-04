import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';



const App = () => {
  const [productData, setProductData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => setProductData(data.products));
  }, []);

  return (
    <div className="App" data-testid="app">
      <h1>Products</h1>
      <ProductList products={productData} addToCart={addToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
