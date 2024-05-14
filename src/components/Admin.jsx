import React from 'react';

const Admin = () => {
    return (
        <div className="text-center mb-10">
            <h2 className="text-2xl font-bold">Admin</h2>
            <div className="flex justify-around flex-wrap mt-4">
                <div className="border rounded-lg p-4 m-2 w-40 h-40 flex items-center justify-center bg-gray-100 shadow-lg cursor-pointer">
                    Add Spaces
                </div>
                <div className="border rounded-lg p-4 m-2 w-40 h-40 flex items-center justify-center bg-gray-100 shadow-lg cursor-pointer">
                    View added Spaces more info
                </div>
                <div className="border rounded-lg p-4 m-2 w-40 h-40 flex items-center justify-center bg-gray-100 shadow-lg cursor-pointer">
                    Add Users Roles
                </div>
                <div className="border rounded-lg p-4 m-2 w-40 h-40 flex items-center justify-center bg-gray-100 shadow-lg cursor-pointer">
                    View Added Users
                </div>
            </div>
        </div>
    );
};

export default Admin;
