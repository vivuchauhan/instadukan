import './Cart.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts,updateCartQuantity,removeFromCart } from '../Redux/action';
import PassengerForm from './PassengerInfo';

const Cart = () => {
  const [showPassengerForm, setShowPassengerForm] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

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
        console.error('Error:', error);
      }
    };
    fetchData();
  }, [dispatch]);

  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };


  const openPassengerForm = () => {
    setShowPassengerForm(true);
  };

  return (
    <div className="cart-container">
      <div className="cart-left">
        <h2 className="headings">All Tickets</h2>
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <h3>{item.name}</h3>
            <img src={item.imageUrl} alt='' style={{width:"200px",height:"100px"}}/>
            <p>₹ {item.price}</p>
            <p>{item.description}</p>
            <div className="quantity">
              <button onClick={() => dispatch(updateCartQuantity(item.id, item.quantity - 1))}>-</button>
              <p>{item.quantity}</p>
              <button onClick={() => dispatch(updateCartQuantity(item.id, item.quantity + 1))}>+</button>
            </div>
            <button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </div>
        ))}
      </div>
      {showPassengerForm ? (<PassengerForm />):(<div className="cart-right">
        <h2 className="headings">PRICE DETAILS</h2>
        <p className="total-price">Total Price: ₹ {calculateTotalPrice()}</p>
        <button className="total-price-Btn" onClick={openPassengerForm}>
          Book Now
        </button>
      </div>
       )}
    </div>
  );
};

export default Cart;
