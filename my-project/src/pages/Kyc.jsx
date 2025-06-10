
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
const KycForm = () => {
  const [aadhaar, setAadhaar] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [otpRequested, setOtpRequested] = useState(false); // NEW STATE
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state?.userId;
 
  useEffect(() => {
    if (userId?.includes('@')) {
      setEmail(userId);
    } else if (/^\d{10}$/.test(userId)) {
      setPhoneNumber(userId);
    } else {
      const storedPhone = localStorage.getItem('phoneNumber') || '';
      const storedEmail = localStorage.getItem('email') || '';
      setPhoneNumber(storedPhone);
      setEmail(storedEmail);

      if (!storedPhone && !storedEmail) {
        setError('Missing phone number or email. Please log in again.');
      }
    }
    
  }, [userId]);

  const validateAadhaar = () => /^\d{12}$/.test(aadhaar);

  const handleGetOtp = async () => {
    if (!validateAadhaar()) {
      setError('Please enter a valid 12-digit Aadhaar number');
      return;
    }

    try {
      setError('');
      // Call your backend to send OTP here if needed
      setOtpRequested(true);
    } catch (err) {
      setError('Failed to send OTP. Try again.');
    }
  };

   const handleVerifyOtp = async () => {
    if (!otp.trim()) {
      setError('Please enter the OTP');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:8081/ksmart/kyc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber,
          email,
          aadhaarNo: aadhaar,
          otp,
        }),
      });
  
      const result = await response.json();
  
      if (response.ok && result.message === 'KYC Verification successful') {
        navigate('/fetched-aadhaar', {
          state: {
            userId: phoneNumber ? phoneNumber : email,
          }
        });
      } else {
        setError(result.message || 'KYC verification failed');
      }
  
    } catch (error) {
      console.error("KYC Error:", error);
      setError('Something went wrong. Please try again later.');
    }
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
          <button className="absolute top-4 left-4 text-gray-400 hover:text-black">←</button>
          <h2 className="text-xl font-semibold text-gray-800 mb-1">
            Verification <span className="text-pink-600">KYC</span>
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Confirming your identity to ensure security, trust, and smooth experience.
          </p>

          {/* Aadhaar or OTP Field */}
          {!otpRequested ? (
            <>
            
              <label htmlFor="aadhaar" className="flex justify-start   text-sm font-medium text-gray-700">
                Aadhaar Number
              </label>
              <input
                type="text"
                id="aadhaar"
                value={aadhaar}
                onChange={(e) => setAadhaar(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded mb-4"
                maxLength={12}
                placeholder="Enter 12-digit Aadhaar number"
              />
              <button
                onClick={handleGetOtp}
                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded"
              >
                Get OTP
              </button>
              
               <p className="mt-4 text-sm text-center text-gray-600">
                            I don't have Aadhaar?{" "}
                            <Link to="/kycnothaveaadhaar" className="text-black font-semibold">
                              Click Here
                            </Link>
                          </p>
            </>
          ) : (
            <>
              <label htmlFor="otp" className="flex justify-start  text-sm font-medium text-gray-700">
                OTP
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded mb-4"
                maxLength={6}
                placeholder="Enter OTP"
              />
              <button
                onClick={handleVerifyOtp}
                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded"
              >
                Verify
              </button>
            </>
          )}

          {error && 
            <div className="mt-4 text-red-600 text-sm font-medium">
              {error}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default KycForm;