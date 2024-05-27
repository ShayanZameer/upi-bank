// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import PaymentForm from './Pages/PaymentForm';
// import Adddata from './Pages/Adddata';

// function App() {
 

//   return (

//     <div><Adddata/></div>

//     // <div><PaymentForm/></div>

    
//   )
// }

// export default App


// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Adddata from './Pages/Adddata';
import PaymentForm from './Pages/PaymentForm';



function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<Adddata />} />
        <Route path="/payment-main" element={<PaymentForm />} />
      </Routes>
    </div>
  );
}

export default App;

