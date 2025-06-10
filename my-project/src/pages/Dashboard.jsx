import React from 'react';
import axios from 'axios';


function Dashboard() {
  // return (
  //   <div className="container mt-4">
  //    <h2>Welcome to Natural Beauty</h2>
      
  //    <img 
  //       src="4.jpg" 
  //      alt="Natural beauty"
  //        style={{ width: '50%', maxWidth: '400px', marginTop: '20px' }} 
  //     />
  //     <img 
  //       src="3.jpg" 
  //      alt="Natural beauty"
  //      style={{ width: '50%', maxWidth: '400px', marginTop: '20px' }} 
  //     />
  //     <img 
  //       src="2.jpg" 
  //     alt="Natural beauty"
  //       style={{ width: '50%', maxWidth: '400px', marginTop: '20px' }} 
  //     />
  //     <img 
  //       src="ad.jpg" 
  //      alt="Natural beauty"
  //        style={{ width: '50%', maxWidth: '400px', marginTop: '20px' }} 
  //      />
  //    </div>
  // );
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 text-sm">Welcome back! Here's an overview of your activity.</p>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold text-gray-700">Total Users</h2>
          <p className="text-2xl font-bold text-pink-600 mt-2">1,250</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold text-gray-700">Verified KYC</h2>
          <p className="text-2xl font-bold text-pink-600 mt-2">980</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold text-gray-700">Pending Approvals</h2>
          <p className="text-2xl font-bold text-pink-600 mt-2">45</p>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
