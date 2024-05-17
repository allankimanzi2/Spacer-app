import React, { useState } from 'react';

function BookSpace() {
  const [duration, setDuration] = useState(30); // Default duration is 30 minutes
  const [cost, setCost] = useState(50); // Default cost for 30 minutes is $50

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // For example, you can handle form validation and submit the data to your backend
  };

  const handleDurationChange = (e) => {
    const selectedDuration = parseInt(e.target.value);
    setDuration(selectedDuration);
    // Calculate cost based on duration
    setCost(selectedDuration === 30 ? 50 : selectedDuration * (50 / 30));
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-lg font-bold">Book a Space</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2" htmlFor="date">
            When do you need it?
          </label>
          <input
            type="date"
            id="date"
            className="w-full px-4 py-2 text-gray-700"
            required
          />
          <label className="block mb-2" htmlFor="startTime">
            Starts at
          </label>
          <input
            type="time"
            id="startTime"
            className="w-full px-4 py-2 text-gray-700"
            required
          />
          <label className="block mb-2" htmlFor="endTime">
            Ends at
          </label>
          <input
            type="time"
            id="endTime"
            className="w-full px-4 py-2 text-gray-700"
            required
          />
          <label className="block mb-2" htmlFor="duration">
            How long will you need it?
          </label>
          <select
            id="duration"
            className="w-full px-4 py-2 text-gray-700"
            value={duration}
            onChange={handleDurationChange}
            required
          >
            <option value="30">30 minutes ($50)</option>
            <option value="60">1 hour (${cost.toFixed(2)})</option>
            <option value="120">2 hours (${(cost * 2).toFixed(2)})</option>
            <option value="180">3 hours (${(cost * 3).toFixed(2)})</option>
            <option value="240">4 hours (${(cost * 4).toFixed(2)})</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Book a Space
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookSpace;
