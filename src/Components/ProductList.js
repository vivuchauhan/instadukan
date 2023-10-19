// ProductList.js
import './ProductList.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts, addToCart } from '../Redux/action';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://vivuchauhan.github.io/TicketData/products.json');
        if (response.ok) {
          const data = await response.json();
          dispatch(loadProducts(data));
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className='App'>
    <h2>Tickets</h2>
    <div className="products-list">
      {products.map(product => (
        <div key={product.id} className="product-container">
          <h3 className="product-name">{product.name}</h3>
          <img src={product.imageUrl} alt='' style={{width:"250px",height:"150px"}}/>
          <p className="product-description">{product.description}</p>
          <p className="product-price">₹ {product.price}</p>
          <button className="add-to-cart-button" onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ProductList;
