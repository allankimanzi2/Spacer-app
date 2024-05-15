import React from 'react';
import './App.css';
import Admin from './components/Admin';
import User from './components/User';


function App() {
  return (
    <div className="App">
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

    </div>
  );
}

