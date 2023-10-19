// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import ProductList from './Components/ProductList';
import Cart from './Components/cart';
import Navbar from './Components/NavBar';
import Bookings from './Components/Bookings';
import About from './Components/About';
import Contact from './Components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="cart" element={<Cart />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes> 
      </BrowserRouter>
    </Provider>
  );
};

export default App;
