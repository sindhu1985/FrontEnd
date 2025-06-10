import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
const KycSuccess = () => {
   const navigate = useNavigate();
     const location = useLocation();
     const userId = location.state?.userId ;
   const handleProceed = () => {
    navigate('/dashboard');
  };
return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Section */}
      <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center p-10">
        <img src="/Logo.png" alt="Kerala Emblem" className="w-16 mb-4" />
        <h1 className="text-xl text-gray-700 mb-2">Welcome to</h1>
        <img src="/ksmart name.png" alt="Ksmart Logo" className="w-48 mb-6" />
        <img src="/Screen1.png" alt="Discussion" className="w-80 rounded-md shadow" />
        <p className="mt-6 text-sm text-gray-500 text-center">
          One integrated platform for all the services you need
        </p>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center p-100"> 
      <div className="bg-white p-8 rounded-2xl shadow-md max-w-md w-full text-center">
        <button className="absolute top-4 left-4 text-gray-400 hover:text-black">
          ←
        </button>
          <h2 className="text-xl font-semibold text-gray-800 mb-1">
            Verification <span className="text-pink-600">KYC</span>
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Confirming your identity to ensure security, trust, and smooth experience.
          </p>
          <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-4 rounded-full">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h3 className="text-blue-600 font-medium text-lg mb-2">
          KYC verification success !
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          You can now access KSMART services. Click <strong>"Proceed"</strong> to continue.
        </p>
        {userId && (
        <p className="text-sm text-gray-700 mb-6">
          User ID: <span className="font-medium text-blue-600">{userId}</span>
        </p>
      )}
        <button
          className="mt-6 w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-xl text-sm font-medium"
          onClick={handleProceed}
        >
          Proceed
        </button>
          </div>
          </div>
          </div>
);
};export default KycSuccess;
