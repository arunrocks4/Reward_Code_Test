import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

// Example JSON data
const productsData = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
    thumbnail: "https://example.com/thumb1.jpg",
    description: "This is a great product"
  },
  {
    id: 2,
    name: "Product 2",
    price: 20,
    thumbnail: "https://example.com/thumb2.jpg",
    description: "This is another great product"
  },
  {
    id: 3,
    name: "Product 3",
    price: 30,
    thumbnail: "https://example.com/thumb2.jpg",
    description: "This is another great product"
  },
  {
    id: 4,
    name: "Product 4",
    price: 40,
    thumbnail: "https://example.com/thumb2.jpg",
    description: "This is another great product"
  },
  {
    id: 5,
    name: "Product 5",
    price: 50,
    thumbnail: "https://example.com/thumb2.jpg",
    description: "This is another great product"
  }
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="App">
      <h1>Products</h1>
      <ProductList products={productsData} addToCart={addToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
