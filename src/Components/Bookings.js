import React from 'react';
import { useSelector } from 'react-redux';
import './Bookings.css'; 

const Bookings = () => {
  const passengerData = useSelector((state) => state.passengers);

  return (
    <div className="bookings-container">
      {passengerData.map((passenger, index) => (
        <div className="booking-card" key={index}>
          <h2 style={{color:"green", fontSize:"15px"}}>Successfully Booked Your Ferry Trip</h2>
          <hr/>
          <p><strong>Name:</strong> {passenger.name}</p>
          <p><strong>Email:</strong> {passenger.email}</p>
          <p><strong>Age:</strong> {passenger.age}</p>
          <p><strong>Gender:</strong> {passenger.gender}</p>
          <p><strong>Nationality:</strong> {passenger.nationality}</p>
          <p><strong>Passport Number:</strong> {passenger.passportNumber}</p>
          <p><strong>Travel Date:</strong> {passenger.travelDate}</p>
        </div>
      ))}
    </div>
  );
};

export default Bookings;
