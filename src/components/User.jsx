import React from 'react';

const User = () => {
    return (
        <div className="text-center mt-10">
            <h2 className="text-2xl font-bold">User</h2>
            <div className="flex justify-around flex-wrap mt-4">
                <div className="border rounded-lg p-4 m-2 w-40 h-40 flex items-center justify-center bg-gray-100 shadow-lg cursor-pointer">
                    View available spaces
                </div>
                <div className="border rounded-lg p-4 m-2 w-40 h-40 flex items-center justify-center bg-gray-100 shadow-lg cursor-pointer">
                    View More Details
                </div>
                <div className="border rounded-lg p-4 m-2 w-40 h-40 flex items-center justify-center bg-gray-100 shadow-lg cursor-pointer">
                    Login
                </div>
                <div className="border rounded-lg p-4 m-2 w-40 h-40 flex items-center justify-center bg-gray-100 shadow-lg cursor-pointer">
                    Book Space
                </div>
                <div className="border rounded-lg p-4 m-2 w-40 h-40 flex items-center justify-center bg-gray-100 shadow-lg cursor-pointer">
                    Agreement
                </div>
                <div className="border rounded-lg p-4 m-2 w-40 h-40 flex items-center justify-center bg-gray-100 shadow-lg cursor-pointer">
                    Simulate Payment Process
                </div>
            </div>
        </div>
    );
};

export default User;
