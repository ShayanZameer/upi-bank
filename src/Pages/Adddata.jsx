import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import { Navigate } from "react-router-dom";

const Adddata = () => {
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://e-commerce-backend-api-lzl7.vercel.app/api/Payment/add",
        // "http://localhost:5000/api/Payment/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ paymentAmount: data }),
        }
      );
      if (response.ok) {
        const jsonResponse = await response.json();
        alert("Data added successfully: " + JSON.stringify(jsonResponse));
        setData(""); // Clear the input after successful submission
        setSubmitted(true);

        navigate("/payment-main");
      } else {
        throw new Error("Failed to submit data");
      }
    } catch (error) {
      alert("Error: " + error.message);
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
