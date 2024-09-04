import React from 'react';

const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="product-item">
      <img src={product.thumbnail} alt={product.name} style={{ width: '100px' }} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
