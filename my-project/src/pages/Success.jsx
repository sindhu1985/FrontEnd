
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state?.userId ;

  const handleProceed = () => {
    navigate('/kyc', {
      state: { userId }, // pass it forward to KYC if needed
    });
  };

  return (
    <div className="flex h-screen bg-red-500">
      {/* Left Section */}
      <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center p-10">
        <img src="/Logo.png" alt="Kerala Emblem" className="w-16 mb-2" />
        <h2 className="text-lg text-gray-700">Welcome to</h2>
        <img src="/ksmart name.png" alt="Name" className="rounded-md mb-6" />
        <div className="mt-6 w-80 h-48 bg-gray-100 rounded-xl overflow-hidden shadow">
          <img src="/Screen1.png" alt="People discussing" className="w-full h-full object-cover" />
        </div>
        <p className="mt-6 text-center text-sm text-gray-500">
          One integrated platform for all the services you need
        </p>
      </div>

      {/* Right section */}
      <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center p-100"> 
        <div className="bg-white p-8 rounded-2xl shadow-md max-w-md w-full text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">
            Sign Up <span className="text-pink-600">K-SMART</span>
          </h2>
          <p className="text-sm font-bold text-black-600 mt-1 ">Registration</p>
          <p className="text-sm text-gray-600 mb-6">
            To complete your registration, please fill in all the fields below
          </p>

          {/* Success icon */}
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-4 rounded-full"> 
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Message */}
          <h3 className="text-lg font-semibold text-blue-700 mb-1">User Account Created</h3>
          <p className="text-sm text-gray-600 mb-2">
            You are about to begin the KYC verification process. This will require you to provide personal information and upload documents.
          </p>

          {/* User ID */}
          {/* <p className="text-sm text-gray-700 mb-6">
            User ID: <span className="font-medium text-blue-600">{userId}</span>
          </p> */}
          {userId && (
        <p className="text-sm text-gray-700 mb-6">
          User ID: <span className="font-medium text-blue-600">{userId}</span>
        </p>
      )}

          {/* Proceed Button */}
          <button
            onClick={handleProceed}
            className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
          >
            Proceed to KYC
          </button>

          {/* Login link */}
          <p className="mt-4 text-sm text-center text-gray-600">
            If you have an account?{" "}
            <Link to="/login" className="text-black font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;