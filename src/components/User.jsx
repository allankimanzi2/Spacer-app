import React from 'react';

const User = () => {
    return (
        <div className="text-center mt-10">
            <h2 className="text-2xl font-bold">User</h2>
            <div className="flex justify-around flex-wrap mt-4">
                <a href="https://example.com">
                    <img src="src/img/view available spaces.jpg" alt="View available spaces" className="border rounded-lg p-4 m-2 w-40 h-40 flex items-center justify-center bg-gray-100 shadow-lg cursor-pointer" />
                View Available Spaces
                </a>
                <a href="https://example.com">
                    <img src="src/img/view more details.jpg" alt="View More Details" className="border rounded-lg p-4 m-2 w-40 h-40 flex items-center justify-center bg-gray-100 shadow-lg cursor-pointer" />
                View More Details
                </a>
                <a href="https://example.com">
                    <img src="src/img/Login.jpg" alt="Login" className="border rounded-lg p-4 m-2 w-40 h-40 flex items-center justify-center bg-gray-100 shadow-lg cursor-pointer" />
                Login
                </a>
                <a href="https://example.com">
                    <img src="src/img/Bookspace.jpg" alt="Book Space" className="border rounded-lg p-4 m-2 w-40 h-40 flex items-center justify-center bg-gray-100 shadow-lg cursor-pointer" />
                Book Space
                </a>
                <a href="https://example.com">
                    <img src="src/img/Agreement.jpg" alt="Agreement" className="border rounded-lg p-4 m-2 w-40 h-40 flex items-center justify-center bg-gray-100 shadow-lg cursor-pointer" />
                Agreement
                </a>
                <a href="https://example.com">
                    <img src="src/img/simulate payment process.jpg" alt="Simulate Payment Process" className="border rounded-lg p-4 m-2 w-40 h-40 flex items-center justify-center bg-gray-100 shadow-lg cursor-pointer" />
                Simulate Payment Process
                </a>
            </div>
        </div>
    );
};

export default User;
