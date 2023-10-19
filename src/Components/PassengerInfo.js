import './PassengerInfo.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPassenger, setTravelDate } from '../Redux/action';

const PassengerForm = () => {
  const [bookingStatus, setBookingStatus] = useState(null);

  const dispatch = useDispatch();
  const travelDate = useSelector((state) => state.travelDate);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: 'Male',
    nationality: '',
    passportNumber: '',
  });

  const [passengers, setPassengers] = useState([]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPassenger = {
      ...formData,
      travelDate,
    };
    setPassengers([...passengers, newPassenger]);
    dispatch(addPassenger(newPassenger));

    setFormData({
      name: '',
      email: '',
      age: '',
      gender: 'Male',
      nationality: '',
      passportNumber: '',
    });
  };

  const handleDeletePassenger = (index) => {
    const updatedPassengers = [...passengers];
    updatedPassengers.splice(index, 1);
    setPassengers(updatedPassengers);
  };

  const handleBookTickets = () => {
    // Perform booking logic here, e.g., sending data to a booking API
    // You can dispatch an action here or trigger any other necessary logic
    // Once booked, you can clear the passenger data or perform additional actions
    // For now, let's just log the passengers to the console
    setBookingStatus('success');
    console.log('Booked Tickets:', passengers);
  };

  return (
    <div className='form'>
      <ol className="passenger-list">
        {passengers.map((passenger, index) => (
          <li key={index}>
            <p><strong>Name:</strong> {passenger.name}</p>
            <p><strong>Email:</strong> {passenger.email}</p>
            <p><strong>Age:</strong> {passenger.age}</p>
            <p><strong>Gender:</strong> {passenger.gender}</p>
            <p><strong>Nationality:</strong> {passenger.nationality}</p>
            <p><strong>Passport Number:</strong> {passenger.passportNumber}</p>
            <p><strong>Travel Date:</strong> {passenger.travelDate}</p>
            <button onClick={() => handleDeletePassenger(index)}>Delete Passenger</button>
          </li>
        ))}
      {passengers.length > 0 && (
        <button className="book-tickets-button" onClick={handleBookTickets}>Book Tickets</button>
      )}
      {bookingStatus === 'success' && (
        <p style={{color:"green", fontWeight:"bold"}}>Your tickets have been booked successfully!</p>
      )}
        <hr />
      </ol>

      <form onSubmit={handleSubmit}>
        <h2>Passenger Information</h2>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </label>
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        <label>
          Nationality:
          <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} />
        </label>
        <label>
          Passport Number:
          <input type="text" name="passportNumber" value={formData.passportNumber} onChange={handleChange} />
        </label>
        <label>
          Travel Date:
          <input
            type="date"
            name="travelDate"
            value={travelDate} 
            onChange={(e) => dispatch(setTravelDate(e.target.value))} 
          />
        </label>
        <button type="submit">Add Passenger</button>
      </form>
    </div>
  );
};

export default PassengerForm;
