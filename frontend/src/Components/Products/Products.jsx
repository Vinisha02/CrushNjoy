import React from 'react';
import './Products.css';
import { assets, food_list } from "../../assets/assets"; // Change this line to import directly from "../../assets" instead of "../../assets/assets"

const Products = () => {
  return (
    <div className="products-section">
      <h1 className="orange-heading">Products</h1>
      <div className="products-list">
        {food_list.map((product, index) => (
          <div className="product-item" key={index}>
            <img src={product.image} alt={product.name} />
            <p className="product-name">{product.name}</p>
            <p className="product-price">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
