import React from 'react';
import Admin from './Admin';
import User from './User';

const HomePage = () => {
  return (
    <>
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-3xl">Space Booking Platform</h1>
      </header>
      <div className="my-4 text-center">
        <input 
          type="text" 
          placeholder="Search for spaces" 
          className="p-2 border rounded w-1/2"
        />
        <button className="p-2 bg-blue-500 text-white rounded ml-2">Search</button>
      </div>
      <Admin />
      <User />
    </>
  );
}

export default HomePage;
