import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/bookings">Bookings</Link>
      </div>
      <div className="navbar-right">
        <Link to="/cart">
          <button className="cart-button">
            Cart (<span style={{color:"#fff"}}>{cart.reduce((total, item) => total + item.quantity, 0)}</span>)
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
