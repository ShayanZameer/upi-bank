import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Adddata = () => {
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://e-commerce-backend-api-1.onrender.com/api/Payment/add",
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
        // alert("Data added successfully: " + JSON.stringify(jsonResponse));\
        toast.success(
          "Data added successfully: " + JSON.stringify(jsonResponse)
        );

        setData("");
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
    // <div>
    //   <h1>Add Data</h1>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       value={data}
    //       onChange={(e) => setData(e.target.value)}
    //       placeholder="Enter payment amount"
    //     />
    //     <button type="submit">Submit</button>
    //   </form>
    // </div>

    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {/* Main Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Add Payment Details
        </h1>

        {/* Subheading */}
        <p className="text-center text-gray-600 mb-6">
          Please provide the necessary payment details below to proceed with the
          transaction.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Payment Amount */}
          <div>
            <label
              htmlFor="paymentAmount"
              className="block text-sm font-medium text-gray-700"
            >
              Payment Amount
            </label>
            <input
              type="number"
              id="paymentAmount"
              value={data}
              onChange={(e) => setData(e.target.value)}
              placeholder="Enter payment amount"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Additional Info */}
          <p className="text-sm text-gray-500 mt-4">
            You can pay using your UPI ID, bank account, or any other method.
            Please ensure that the details entered are correct.
          </p>

          {/* UPI Info Section */}
          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              UPI & Bank Payment
            </h2>
            <p className="text-gray-600 text-sm">
              You can also use your UPI ID or bank account details for the
              payment process. Make sure the UPI ID is active and linked to your
              bank account.
            </p>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Submit Payment
            </button>
          </div>
        </form>

        {/* Footer Info */}
        <p className="text-xs text-gray-400 mt-6 text-center">
          By submitting, you agree to our{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Terms and Conditions
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Adddata;
