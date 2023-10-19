
import React from 'react';

const contactStyle = {
  padding: '20px',
  maxWidth: '600px',
  margin: '0 auto',
};

const Contact = () => {
  return (
    <div style={contactStyle}>
      <h2>Contact Us</h2>
      <p>
        Have questions, feedback, or need assistance? We're here to help. Contact our support team, and we'll
        respond as quickly as possible.
      </p>
      <h3>Contact Information</h3>
      <p>
        <strong>Email:</strong> support@ferryticketbooking.com
      </p>
      <p>
        <strong>Phone:</strong> +1-800-FERRY-BOOK
      </p>
      <h3>Address</h3>
      <p>
        Ferry Ticket Booking
        <br />
        123 Seaside Drive
        <br />
        Coastal City, Ferryland
        <br />
        Oceanic Isles
      </p>
      <p>We value your feedback and look forward to assisting you with your ferry ticket booking needs.</p>
    </div>
  );
};

export default Contact;
