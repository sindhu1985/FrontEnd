import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

      const PassportUpload = ()=> {
        const navigate = useNavigate();
        const [file, setFile] = useState(null);
      
        const handleFileChange = (e) => {
          setFile(e.target.files[0]);
        };
        const handleContinue = (e) => {
          navigate('/fetched-aadhaar')
        }

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
          <p className="text-sm text-blue-600 font-medium mb-3 underline">
          Attach your Passport
        </p>
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 mb-6 cursor-pointer">
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-pink-100 p-3 rounded-full">
              <svg
                className="w-6 h-6 text-pink-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 15a4 4 0 014-4h.586A1.5 1.5 0 009 9.586l3-3a1.5 1.5 0 012.121 0l3 3A1.5 1.5 0 0017.414 11H18a4 4 0 014 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1z"
                />
              </svg>
            </div>
            <p className="text-sm text-gray-700">
              Choose your Passport or drag & drop it here
            </p>
            <p className="text-xs text-gray-400">
              JPEG, PNG, PDF, and JPG formats, up to 5MB
            </p>

            <label className="mt-2">
              <input type="file" className="hidden" onChange={handleFileChange} />
              <span className="inline-block px-4 py-1 border border-gray-300 rounded-md text-sm cursor-pointer hover:bg-gray-100">
                Browse File
              </span>
            </label>
            {file && (
              <p className="text-sm text-green-600 mt-1">{file.name}</p>
            )}
          </div>
        </div>

        <button
                className="w-full bg-pink-600 text-white font-semibold py-2 rounded-lg hover:bg-pink-700 transition"
                onClick={handleContinue}
                    
                
              >
          Continue
        </button>

        
          </div>
          </div>
          </div>
      );

          };
          export default PassportUpload;