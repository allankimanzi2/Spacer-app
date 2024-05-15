import React from 'react';


const Admin = () => {
    return (
        <div className="text-center mb-10">
            <h2 className="text-2xl font-bold">Admin</h2>
            <div className="flex justify-around flex-wrap mt-4">
                <a href="/add-spaces">
                    <div className="border rounded-lg p-4 m-2 w-40 h-40 flex items-center justify-center bg-gray-100 shadow-lg cursor-pointer">
                        <img src="src/img/Add Spaces.jpg"alt="Add Spaces" className="w-full h-full object-cover" />
                    </div>
                </a>
                <a href="/view-spaces">
                    <div className="border rounded-lg p-4 m-2 w-40 h-40 flex items-center justify-center bg-gray-100 shadow-lg cursor-pointer">
                        <img src="src/img/View Added Spaces.jpg"alt="View Added Spaces" className="w-full h-full object-cover" />
                    </div>
                </a>
                <a href="/add-user-roles">
                    <div className="border rounded-lg p-4 m-2 w-40 h-40 flex items-center justify-center bg-gray-100 shadow-lg cursor-pointer">
                        <img src="src/img/Add Users Roles.jpg"alt="Add Users Roles" className="w-full h-full object-cover" />
                    </div>
                </a>
                <a href="/view-users">
                    <div className="border rounded-lg p-4 m-2 w-40 h-40 flex items-center justify-center bg-gray-100 shadow-lg cursor-pointer">
                        <img src="src/img/View Added Users.jpg" alt="View Added Users" className="w-full h-full object-cover" />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Admin;
