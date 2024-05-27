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
import ProtectedRoute from './components/ProtectedRoute';



function App() {

  const submissionComplete = false; // This should be managed globally, maybe via context or redux

  return (
    <div>
         <Routes>
      <Route path="/" element={
        <ProtectedRoute condition={!submissionComplete} redirectTo="/payment-main">
          <Adddata />
        </ProtectedRoute>
      } />
      <Route path="/payment-main" element={<PaymentForm />} />
    </Routes>
    </div>
  );
}

export default App;

