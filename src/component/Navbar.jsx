import React, { useState } from 'react';

const Navbar = () => {
  const [showCourses, setShowCourses] = useState(false);

  return (
    <nav className="bg-white flex justify-between items-center p-4">
      <div className="flex items-center">
        <a href="#" className="text-blue-700 px-3 py-2 text-2xl font-bold">accredian</a>
        <div
          className="relative"
          onMouseEnter={() => setShowCourses(true)}
          onMouseLeave={() => setShowCourses(false)}
        >
          <a href="#" className="text-black px-3 py-2">
            <button className="flex items-center bg-blue-500 text-black py-2 px-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
              <span>courses</span>
              <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </a>
          {showCourses && (
            <div className="absolute mt-2 w-56 bg-gray-200 shadow-lg rounded">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-300">FRONTEND_DEVELOPMENT</li>
                <li className="px-4 py-2 hover:bg-gray-300">BACKEND_DEVELOPMENT</li>
                <li className="px-4 py-2 hover:bg-gray-300">FULLSTACK_DEVELOPMENT</li>
                <li className="px-4 py-2 hover:bg-gray-300">DATA_SCIENTISTS</li>
                <li className="px-4 py-2 hover:bg-gray-300">MACHINE_LEARNING</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="hidden lg:flex items-center">
        <a href="#" className="text-black py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Home</a>
        <a href="#" className="text-black py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">About</a>
        <a href="#" className="text-black py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Contact</a>
        <a href="#" className="text-black py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
          <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">login</button>
        </a>
        <a href="#" className="text-black px-3 py-2">
          <button className="bg-blue-500 text-black py-2 px-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">try for free</button>
        </a>
      </div>
      <div className="lg:hidden">
        <button onClick={() => setShowCourses(!showCourses)} className="text-black focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      {showCourses && (
        <div className="lg:hidden absolute top-16 right-0 w-full bg-white shadow-lg">
          <a href="#" className="block text-black py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Home</a>
          <a href="#" className="block text-black py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">About</a>
          <a href="#" className="block text-black py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Contact</a>
          <a href="#" className="block text-black py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">login</a>
          <a href="#" className="block text-black py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">try for free</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
