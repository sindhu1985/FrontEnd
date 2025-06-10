
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginBg from '../assets/LoginBg.png';
import Carousel from '../components/Carousel';




export default function Login() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false); // Tracks whether OTP was sent
  const [errorMessage, setErrorMessage] = useState('');
  const isPhone = /^\d{10}$/.test(inputValue); 
  const [needsKyc, setNeedsKyc] = useState(false);
  const handleSendOTP = async () => {
  
    setErrorMessage('');
    setNeedsKyc(false);
    if (!inputValue.trim()) {
      setErrorMessage('Please enter your phone number or email.');
      return;
    }
  
    try {
      const payload = isPhone
        ? { phoneNumber: inputValue }
        : { email: inputValue };

      const res = await axios.post('http://localhost:8081/ksmart/check-user', payload);

      if (res.status === 200) {
        setOtpSent(true);
      }
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setErrorMessage(' User not Registered.Please Register');
      } else {
        setErrorMessage('Error checking user. Please try again.');
      }
    }
  };

 
  const handleLogin = async () => {
    
    if (!otp.trim()) {
      setErrorMessage('Please enter the OTP.');
      return;
    }
  
    try {
      const payload = isPhone
        ? { phoneNumber: inputValue, otp }
        : { email: inputValue, otp };
  
      const res = await axios.post('http://localhost:8081/ksmart/login', payload);
      const message = res.data?.message?.toLowerCase() || '';
      localStorage.setItem('userId', inputValue);
  
      if (message.includes('login successful')) {
        navigate('/dashboard');
      } 
        else if (message.includes('kyc not verified')) {
          setNeedsKyc(true);
          setErrorMessage('KYC not verified. Please complete KYC verification to log in.');
        }


      else {
        setErrorMessage(res.data.message || 'Login failed.');
      }
    } catch (err) {
      setErrorMessage('Login request failed. Please try again.');
    }
    
  };

      return (
        
          // <div className="bg-blue-900"   style={{ backgroundImage: `url(${LoginBg})` }}> 
          <div className=" bg-gray-200 flex h-screen">
                    
            {/* Left Panel */}
            {/* <div className="w-1/2 bg-slate-100 p-10 hidden md:block"> */}
            <div className="w-1/2 flex h-screen bg-gray-100  flex-col justify-center items-center p-10">
                <img src="/Logo.png" alt="Kerala Logo" className="w-16 mb-4" />
                <p className="text-center text-gray-600 text-sm">Welcome to</p>
                <img src="/ksmart name.png" alt="Name" className="rounded-md mb-6" />
                {/* <img src="/Screen1.png" alt="Team" className="rounded-md mb-6" /> */}
                <Carousel />
                <p className="text-center text-sm text-gray-500">One integrated platform for all the services you need</p>
              </div>
            {/* </div> */}
    
            {/* Right Panel (Login) */}
            
            {/* <div className="w-full md:w-1/2 p-10 flex flex-col justify-center"> */}
            <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center p-100"> 
        <div className="bg-white p-8 rounded-2xl shadow-md max-w-md w-full text-center">
          <h2 className="text-xl font-semibold mb-2">
            {otpSent ? 'Sign in' : 'Sign in'} <span className="text-[#D42C71]">K-SMART</span>
          </h2>
          <p className="text-sm font-bold text-black-600 mt-1 ">Login</p>
          <p className="text-sm text-gray-500 mb-6">
            {otpSent ? 'Please enter the OTP sent to your registered contact' : 'Please enter your login details below'}
          </p>

          {/* {errorMessage && (
            <div className="mb-4 text-red-600 text-sm">{errorMessage}</div>
          )} */}
          {errorMessage && (
      <div className="mb-4 text-red-600 text-sm">{errorMessage}</div>
    )}
    
    {needsKyc && (
      <button
        className="mb-4 text-blue-600 underline text-sm"
        onClick={() => navigate('/kyc', { state: { userId: inputValue, error: errorMessage } })}
      >
        Complete KYC Now
      </button>
    )}

          {!otpSent ? (
            <>
              <label className="flex justify-start text-sm mb-1" htmlFor="inputValue">User ID </label>
              <input
                type="text"
                id="inputValue"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
                className="mb-4 p-2 border border-gray-300 rounded-md w-full"
              />

              <button
                type="button"
                onClick={handleSendOTP}
                className="w-full bg-pink-600 text-white font-semibold py-2 mt-4 rounded-lg hover:bg-pink-700 transition"
              >
                Send OTP
              </button>

              <div className="mt-4 text-sm text-gray-600">
                If you don’t have an account?{' '}
                <span onClick={() => navigate('/declaration')} className="text-black font-semibold cursor-pointer">
                  Create Account
                </span>
              </div>
              <div className="mt-2 text-sm text-blue-600 cursor-pointer">Forgot User ID?</div>
            </>
          ) : (
            <>
              <label className="flex justify-start text-sm mb-1" htmlFor="otp">OTP</label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="mb-4 p-2 border border-gray-300 rounded-md w-full"
              />
              <button
                type="button"
                onClick={handleLogin}
                className="w-full bg-pink-600 text-white font-semibold py-2 mt-4 rounded-lg hover:bg-pink-700 transition"
              >
                Login
              </button>
              
            </>
          )}

</div>
</div>
</div>
);
}