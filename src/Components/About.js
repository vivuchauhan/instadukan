// About.js
import React from 'react';

const aboutStyle = {
  padding: '20px',
  maxWidth: '600px',
  margin: '0 auto',
};

const About = () => {
  return (
    <div style={aboutStyle}>
      <h2>About Us</h2>
      <p>
        Welcome to Ferry Ticket Booking, your one-stop destination for booking ferry tickets to your favorite
        destinations. We are committed to providing a seamless and enjoyable ferry booking experience for
        travelers like you.
      </p>
      <p>
        Our mission is to make your journey comfortable and convenient. With a wide selection of ferry routes,
        flexible schedules, and competitive prices, we aim to meet your travel needs.
      </p>
      <p>
        Thank you for choosing Ferry Ticket Booking. We look forward to serving you and helping you explore
        new horizons.
      </p>
    </div>
  );
};

export default About;
