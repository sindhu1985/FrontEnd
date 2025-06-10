import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Otp = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const contact = location.state?.contact || '';
  const isIndia = location.state?.isIndia ?? true;

  const handleVerifyOtp = () => {
    
        navigate('/success'); // Example redirection
    
    
  };

  return (
    
    //  <div className="w-screen h-screen bg-white rounded-lg shadow-lg flex overflow-hidden">
     <div className="flex h-screen bg-gray-50">
      {/* Left Section */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-10">
        <img src="/Logo.png" alt="Kerala Emblem" className="w-16 mb-2" />
        <h2 className="text-lg text-gray-700">Welcome to</h2>
        
          <img src="/ksmart name.png" 
            alt="Name" className="rounded-md mb-6"
          />
        {/* </div> */}
        <div className="mt-6 w-80 h-48 bg-gray-100 rounded-xl overflow-hidden shadow">
          <img src="/Screen1.png"
            alt="People discussing"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="mt-6 text-center text-sm text-gray-500">
          One integrated platform for all the services you need
        </p>
      </div>
      {/* Right section */}
      
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-100"> 
        <div className="w-full max-w-md p-8 rounded-xl shadow-lg bg-white">  
          <button className="text-gray-500 mb-4">&larr;</button>
          <h2 className="text-2xl font-bold">
            Sign Up <span className="text-pink-600">K-SMART</span>
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            To complete your registration, please fill in all the fields below
          </p>
        
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          maxLength={6}
          placeholder="Enter the OTP"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-center text-lg"
        />
        <div className="flex items-center justify-between text-sm text-gray-700 mb-6">
  <p className="text-left text-red-600">
    Please enter the OTP sent to {isIndia ? 'mobile' : 'email'}: <strong>{contact}</strong>
  </p>
  <button className="text-blue-500 whitespace-nowrap ml-4">Resend OTP</button>
</div>

        <button
          onClick={handleVerifyOtp}
          className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
        >
          Verify 
        </button>

        
         <p className="mt-4 text-sm text-center text-gray-600">
          If you have an account?{" "}
          <Link to="/login" className="text-green-600 font-semibold">
            Login
          </Link>
        </p> 
      </div>
    </div>
    </div>
    // </div>
  );
};

export default Otp;