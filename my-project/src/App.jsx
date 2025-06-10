
import React from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
 import {  Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Declaration from './pages/Declaration';
import Otp from './pages/Otp';
import Success from './pages/Success';
import Home from './pages/Home';
import Kyc from './pages/Kyc';
import FetchedAadhaar from'./pages/FetchedAadhaar';
import KycSuccess from './pages/KycSuccess';
import KycNotHaveAadhaar from './pages/KycNotHaveAadhaar';


export default function App() {
  return(

   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />}/>
      <Route path="/declaration" element={<Declaration />}/>
      <Route path="/enter-otp" element={<Otp />}/>
      <Route path="/success" element={<Success />}/>
      <Route path="/kyc" element={<Kyc />}/>
      <Route path="/fetched-aadhaar" element={<FetchedAadhaar />}/>
      <Route path="/kycsuccess" element={<KycSuccess />}/>
      <Route path="/kycnothaveaadhaar" element={<KycNotHaveAadhaar />}/>
       
    </Routes>
  
    
  
    
    

  );
}