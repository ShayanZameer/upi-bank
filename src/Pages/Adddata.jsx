import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

import { Navigate } from 'react-router-dom';


const Adddata = () => {
  const [data, setData] = useState(''); // State to hold the input value
  const navigate = useNavigate();  // Initialize useNavigate
  const [submitted, setSubmitted] = useState(false);
  



  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submit behavior
    try {
      const response = await fetch('https://e-commerce-api-h8lm.onrender.com/api/Payment/add', {
        method: 'POST', // Specify the method
        headers: {
          'Content-Type': 'application/json', // Specify the content type header
        },
        body: JSON.stringify({ paymentAmount: data }) // Convert the React state to JSON and send it as the POST body
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        alert('Data added successfully: ' + JSON.stringify(jsonResponse));
        setData(''); // Clear the input after successful submission
        setSubmitted(true);

        navigate('/payment-main'); 
      } else {
        throw new Error('Failed to submit data');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };
  

  return (
    <div>
      <h1>Add Data</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Enter payment amount"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Adddata;
