

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const [inputValue, setInputValue] = useState("");
  const [isIndia, setIsIndia] = useState(true);
  const [error, setError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const validateInput = () => 
    {
    const trimmed = inputValue.trim();

    if (isIndia) {
      const indianPattern = /^[6-9]\d{9}$/;
      if (!indianPattern.test(trimmed)) {
        setError("Please enter a valid 10-digit mobile number.");
        return false;
      }
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(trimmed))
         {
        setError("Please enter a valid Email ID.");
        return false;
      }
    }

    setError("");
    return true;
  };

  const handleSendOTP = async () =>
     {
    if (!validateInput()) return;

    const payload = 
    {
      countryType: isIndia,
      phoneNumber: isIndia ? inputValue : "",
      email: isIndia ? "" : inputValue,
    };

    try {
      const res = await axios.post("http://localhost:8081/ksmart/check-user", payload);

      if (res.status === 200 && res.data === "User exists") {
        setError("This mobile number or email is already registered.");
        setMessage("");
        
      }
    } catch (err) {
      // 404 is expected when user is NOT found
      if (err.response && err.response.status === 404) {
        // User not found, proceed to OTP
        setOtpSent(true);
        setMessage(`Please enter the OTP sent to your ${isIndia ? "mobile" : "email"}: ${inputValue}`);
        setError("");
        return;
      } else {
        setError("Error checking user. Please try again.");
        setMessage("");
        // return;
      }

    };
  };
    const handleRegister = async () => {
      const payload = {
        countryType: isIndia,
        phoneNumber: isIndia ? inputValue : "",
        email: isIndia ? "" : inputValue,
        otp: otp,
      };

      try {
        const res = await axios.post("http://localhost:8081/ksmart/register", payload);
        const { message } = res.data;

        if (message.includes("User Account Created")) {

          
          setMessage(message);
          navigate("/success", {
            state: {
              userId: isIndia ? inputValue : inputValue,  // Can be phone or email
            },
          });

        } else {
          setError(message); // "Invalid OTP" or "User already registered"
        }
      } catch (err) {
        setError("Registration failed. Try again.");
      }
    };

    return (
      <div className=" bg-gray-200 flex h-screen">
        {/* Left Section */}
        
        <div className="w-1/2 flex h-screen bg-gray-100  flex-col justify-center items-center p-10">
          <img src="/Logo.png" alt="Kerala Emblem" className="w-16 mb-2" />
          <h2 className="text-lg text-gray-700">Welcome to</h2>
          <img src="/ksmart name.png" alt="Name" className="rounded-md mb-6" />
          <div className="mt-6 w-80 h-48 bg-red-300 rounded-xl overflow-hidden shadow">
            <img src="/Screen1.png" alt="People discussing" className="w-full h-full object-cover" />
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">
            One integrated platform for all the services you need
          </p>
        </div>

        {/* Right Section */}
       
        <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center p-100"> 
        <div className="bg-white p-8 rounded-2xl shadow-md max-w-md w-full text-center">
        
           
            <button className="text-gray-500 mb-4">&larr;</button>
           
            <h2 className="text-2xl font-bold">
              Sign Up <span className="text-pink-600">K-SMART</span>
            </h2>
            <p className="text-sm font-bold text-black-600 mt-1 ">Registration</p>
            <p className="text-sm text-gray-600 mt-1">
              To complete your registration, please fill in all the fields below
            </p>

            <div className="p-6 max-w-md mx-auto ">
              {/* Country Selector */}
              <div className=" flex justify-end  gap-6 mb-4 text-sm  text-blue-600 accent-red-600">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="region"
                    checked={isIndia}
                    onChange={() => {
                      setIsIndia(true);
                      setInputValue("");
                      setError("");
                      setOtpSent(false);
                      setOtp("");
                      
                    }}
                  />
                  India
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="region"
                    checked={!isIndia}
                    onChange={() => {
                      setIsIndia(false);
                      setInputValue("");
                      setError("");
                      setOtpSent(false);
                      setOtp("");
                    }}
                  />
                  Abroad
                </label>
              </div>


              <div className="relative mb-2">
              <label className="flex justify-start text-sm mb-1 " htmlFor="inputValue">
              {otpSent ? "OTP" : isIndia ? "Mobile Number" : "Email ID"}</label>
                <input
                  type={otpSent ? "text" : isIndia ? "text" : "email"}
                  placeholder=" "
                  maxLength={otpSent ? 6 : isIndia ? 10 : undefined}
                  value={otpSent ? otp : inputValue}
                  onChange={(e) => otpSent ? setOtp(e.target.value) : setInputValue(e.target.value)}
                  className="peer w-full border rounded-lg px-3 pt-5 pb-2 text-sm focus:outline-none "
                />
                
                {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
              </div>



              <button
                onClick={otpSent ? handleRegister : handleSendOTP}
                className="w-full bg-pink-600 text-white font-semibold py-2 mt-4 rounded-lg hover:bg-pink-700 transition"
              >
                {otpSent ? "Verify" : "Send OTP"}
              </button>
              <>

              </>


              {message && <p className="text-sm text-blue-600 mt-2">{message}</p>}
            </div>

            {/* Login Link */}
            <p className="mt-4 text-sm text-center text-gray-600">
              If you  have an account?{" "}
              <Link to="/login" className="text-green-600 font-semibold">
                Login
              </Link>
            </p>
          </div>
        </div>
       </div>
    );
  };

  export default SignUp;

