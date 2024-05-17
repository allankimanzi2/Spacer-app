import React from 'react';

const Spacer = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h1 className="text-2xl font-bold text-center mb-4">SPACER</h1>
        <p className="text-center mb-6">Discover and book unique spaces for any activity</p>
        <div className="flex justify-center mb-6">
          <img src="src/img//Launcher.jpg" alt="People with balloons" className="w-40 h-40"/>
        </div>
        <div className="flex flex-col space-y-4">
          <button className="bg-black text-white py-2 rounded">Sign In</button>
          <button className="bg-black text-white py-2 rounded">Create Account</button>
          <button className="bg-black text-white py-2 rounded">Log In</button>
        </div>
      </div>
    </div>
  );
};

export default Spacer;
