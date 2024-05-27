import React, { useState,useEffect } from 'react';
import './PaymentForm.css'; 
import exampleImage from '../assets/Gpay.png';  // Relative path to the image
import { IoIosArrowForward } from "react-icons/io";


function PaymentForm() {
  const [refNumber, setRefNumber] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Submitted with reference number: ' + refNumber);
  };



  useEffect(() => { 
    const fetchPaymentAmount = async () => {
      try {
        const response = await fetch('https://e-commerce-api-h8lm.onrender.com/api/Payment/retrieveLatest');
        const data = await response.json();
        if (data && data.paymentAmount) {
          setPaymentAmount(data.paymentAmount);
        } else {
          setPaymentAmount('No payment amount available');
        }
      } catch (error) {
        console.error('Failed to fetch payment amount:', error);
        setPaymentAmount('Failed to load payment amount');
      }
    };

    fetchPaymentAmount();
  }, []); 


  return (
    <div className="payment-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <div className="header">UPI Information</div>
  <div>
    <p>How it works?</p>
  </div>
</div>


{/* IMAGE AND INFO OF PAYMENT */}


<div className="payment-banner">
      <p className='paragraph'>Payment Amount</p>
      <div className="payment-info">
        <span className="currency-symbol">₹</span>
        <span className="amount">{paymentAmount}</span>
      </div>
    </div>

    <div>

        <h5>Payment Via Upi</h5>
    </div>


      <form onSubmit={handleSubmit}>
        <div className="instructions">
          <p>1. Copy UPI Information.</p>
          <div style={{display:"flex", flexDirection:"row"}} className="input-group">

            <div style={{display:"flex", flexDirection:"row", }}>

            <input  style={{width:"1150px", borderRadius:"4px"}}  type="text" value="example@upi" readOnly /> <span style={{marginTop:"1px"}}><button  style={{marginLeft:"-80px",fontSize:"16px" , marginTop:"5px" }} type="button">COPY</button></span>
            </div>
            
          </div>
          <p>2. Transfer the amount you want to recharge to us by UPI ID transfer, NOT MOBILE NUMBER.</p>
          <div style={{backgroundColor:'white', }} className="button-group">
:
          <button style={{backgroundColor:'white' ,}}  className="custom-button">
      <div className="button-content">
        <img src={exampleImage} alt="Icon" className="button-icon" />
        {/* <span>Your Text Here</span> */}
        <IoIosArrowForward color='grey' />    
          </div>
    </button>
      
          </div>
          <p>3. Please enter Ref No. to complete the recharge.</p>
          <div className="input-group">
            <input
              type="text"
              placeholder="Ref No."
              value={refNumber}
              onChange={(e) => setRefNumber(e.target.value)}
            />
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
      <div className="expired-notice">
        The order has expired, please regenerate
      </div>
    </div>
  );
}

export default PaymentForm;
