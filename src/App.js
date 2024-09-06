import React, { useEffect, useState } from 'react';
import "./App.css";

import { getAllProducts } from './Services/products.services';
import ProductsTable from './Components/ProductsTable';



const App = () => {
  const [productData, setProductData] = useState([]);

  const getData = async () => {
    const allProducts = await getAllProducts();
    setProductData(allProducts)
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App" data-testid="app">
      <div>
        <h1>Products</h1>
        <ProductsTable products={productData} />
      </div>
    </div>
  );
};

export default App;
