import React, { useState,useEffect } from 'react';
import './PaymentForm.css'; 
import exampleImage from '../assets/Gpay.png';  // Relative path to the image
import exampleImage1 from '../assets/pp.png';  // Relative path to the image
import exampleImage2 from '../assets/paytm.jpg';  // Relative path to the image
import exampleImage3 from '../assets/upi-twitter.jpg';  // Relative path to the image
import { Link } from 'react-router-dom';





import { IoIosArrowForward } from "react-icons/io";


function PaymentForm() {
  const [refNumber, setRefNumber] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Submitted with reference number: ' + refNumber);
  };


  const handleCopyClick = () => {
    const upiValue = "Rupeyfree@indianbank"; // since this is the value set for the input field and it's static
    navigator.clipboard.writeText(upiValue)
      .then(() => {
        alert("UPI Information copied to clipboard!");
      })
      .catch(err => {
        console.error("Failed to copy:", err);
        alert("Failed to copy UPI information.");
      });
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

            <input  style={{width:"1150px", borderRadius:"4px"}}  type="text" value="Rupeyfree@indianbank" readOnly /> <span style={{marginTop:"1px"}}><button  onClick={handleCopyClick} style={{marginLeft:"-80px",fontSize:"16px" , marginTop:"5px" }} type="button">COPY</button></span>
            </div>
            
          </div>
          <p>2. Transfer the amount you want to recharge to us <span style={{color:"red"}}>by UPI ID transfer, NOT MOBILE NUMBER.</span> </p>
          <div style={{backgroundColor:'white', }} className="button-group">






<div style={{display:"flex"}}>

<Link to="https://paytm.com/" className="payment-button">
          <img src={exampleImage2} alt="Payment Icon" className="payment-icon"/>
          <IoIosArrowForward color='grey' className="arrow-icon"/>
        </Link>

        <Link to="https://www.phonepe.com/" className="payment-button">
          <img src={exampleImage1} alt="Payment Icon" className="payment-icon"/>
          <IoIosArrowForward color='grey' className="arrow-icon"/>
        </Link>


</div>





          </div>

          <div style={{display:"flex"}}>



          <Link to="https://payments.google.com/gp/w/home/paymentmethods?sctid=7651518633078137" className="payment-button">
          <img src={exampleImage} alt="Payment Icon" className="payment-icon"/>
          <IoIosArrowForward color='grey' className="arrow-icon"/>
        </Link>


        <Link to="https://www.npci.org.in/what-we-do/upi/product-overview" className="payment-button">
          <img src={exampleImage3} alt="Payment Icon" className="payment-icon"/>
          <IoIosArrowForward color='grey' className="arrow-icon"/>
        </Link> 
</div>

          <p>3. Please enter Ref No. to complete the recharge.</p>
          

<div style={{display:"flex", flexDirection:"row"}} className="input-group">

<div style={{display:"flex", flexDirection:"row", }}>

<input  style={{width:"1150px", borderRadius:"4px"}} placeholder="Ref No." type="text" value={refNumber} onChange={(e) => setRefNumber(e.target.value)}  /> <span style={{marginTop:"1px"}}><button  style={{marginLeft:"-85px",fontSize:"16px" , marginTop:"5px" }} type="button">Submit</button></span>
</div>

</div>


          
        </div>
      </form>
      <div className="expired-notice">
        <p>Please enter the REF NO/Reference NO/UTR (12-digit number) of your transfer and we will finish your recharge as soon as possible.</p>
      </div>


      <div >
        <p style={{textAlign:"center",marginBottom:-10, color:"grey", fontSize:"12px"}}>100% Secure Payments Powered by Pays</p>
      </div>
    </div>
  );
}

export default PaymentForm;
