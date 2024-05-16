import React from 'react';
import { useHistory } from 'react-router-dom';

const LaunchPage = () => {
  const history = useHistory();

  const handleGetStarted = () => {
    history.push('/home');
  };

  const handleSignIn = () => {
    // Handle sign-in navigation
    alert('Sign In button clicked');
  };

  const handleCreateAccount = () => {
    // Handle create account navigation
    alert('Create Account button clicked');
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">SPACER</h1>
        <p className="text-lg mb-8">Discover and book unique spaces for any activity</p>
        <img
          src="https://via.placeholder.com/400x300" // Replace with your image URL
          alt="Welcome"
          className="mx-auto mb-8"
        />
        <div className="space-y-4">
          <button
            onClick={handleGetStarted}
            className="w-full py-2 px-4 border border-gray-800 rounded-full text-gray-800 font-semibold hover:bg-gray-100"
          >
            Get started
          </button>
          <button
            onClick={handleSignIn}
            className="w-full py-2 px-4 bg-black text-white rounded-full font-semibold hover:bg-gray-900"
          >
            Sign In
          </button>
          <button
            onClick={handleCreateAccount}
            className="w-full py-2 px-4 border border-gray-800 rounded-full text-gray-800 font-semibold hover:bg-gray-100"
          >
            Create account
          </button>
        </div>
      </div>
    </div>
  );
};

export default LaunchPage;
