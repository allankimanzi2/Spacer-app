import React, { useState } from 'react';

const CreateAccount = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Create account</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              placeholder="Your username"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Your password"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              >
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
            </div>
            <div className="ml-2 text-sm">
              <label htmlFor="terms" className="font-medium text-gray-700">
                I accept the terms and privacy policy
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center mt-4">
            <span className="text-gray-500 text-sm">Or Register with</span>
          </div>
          <div className="flex justify-center space-x-4 mt-2">
            <button
              type="button"
              className="flex items-center justify-center p-2 border border-gray-300 rounded-md shadow-sm"
            >
              <img src="/src/img/facebook-icon.png" alt="Facebook" className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="flex items-center justify-center p-2 border border-gray-300 rounded-md shadow-sm"
            >
              <img src="/src/img/google-icon.png" alt="Google" className="w-5 h-5" />
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded mt-6"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
