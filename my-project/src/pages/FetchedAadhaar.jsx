import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const FetchedAadhaar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { aadhaarNumber, photoUrl, userId } = location.state || {};
  
 
    const handleContinue = () => {
   
    navigate("/kycsuccess", {
      state: {
        // userId: isIndia ? phoneNumber : email,  // Can be phone or email
        userId,
      },
    });
      
   
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Section */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10 bg-white">
        <img src="/Logo.png" alt="Kerala Emblem" className="w-16 mb-4" />
        <h1 className="text-xl text-gray-700 mb-2">Welcome to</h1>
        <img src="/ksmart name.png" alt="Ksmart Logo" className="w-48 mb-6" />
        <img src="/Screen1.png" alt="Discussion" className="w-80 rounded-md shadow" />
        <p className="mt-6 text-sm text-gray-500 text-center">
          One integrated platform for all the services you need
        </p>
      </div>
      {/* Left section omitted for brevity */}
      <div className="w-1/2 flex justify-center items-center bg-white">
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">
            Verification <span className="text-pink-600">KYC</span>
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Confirming your identity to ensure security, trust, and smooth experience.
          </p>
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded-md text-sm mb-4 flex items-center">
          ✅ Fetched your Aadhaar details for verification.
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <img
            src={photoUrl || '/woman.png'}
            alt="User"
            className="w-16 h-16 rounded-full object-cover border"
          />
          {/* <div>
            <p className="text-sm text-gray-600"><strong>Document Number:</strong> {aadhaarNumber}</p>
          </div> */}
          <div className="text-sm text-gray-600 mb-2">
  <strong>Document Number: </strong>{aadhaarNumber}
</div>
 </div>

          <button
            onClick={handleContinue }
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-md text-sm font-medium"
          >
           Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default FetchedAadhaar;
