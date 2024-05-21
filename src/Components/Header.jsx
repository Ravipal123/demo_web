import React from 'react';
import { FaBell, FaUserCircle, FaTh } from 'react-icons/fa';


const Header = () => {
  return (
    <div className="flex justify-between static items-center p-4 h-12 bg-white shadow-md mb-0.5">
      <div className="flex items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-purple-500 p-2 rounded-lg">
            <FaTh className="text-white" />
          </div>
          <div className="text-purple-500 text-2xl font-bold">wiZ<span className='text-black'>e</span></div>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <FaBell className="text-purple-500 text-3xl border p-1 rounded-full border-purple-500" />
        <div className="flex items-center space-x-2 border border-purple-500 p-1.5 py-1 rounded-3xl">
          <FaUserCircle className="text-purple-500 text-xl" />
          <span>Account</span>
        </div>
        <div className="flex items-center space-x-2 border border-purple-500 p-2 py-1 rounded-3xl">
          <span>Menu</span>
          <FaTh className="text-purple-500" />
        </div>
      </div>
    </div>
  );
};

export default Header;
