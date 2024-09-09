import React from 'react';

const Header = () => {
  return (
    <div className="header-bg">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src='./logo.png' alt='logo' className='w-8 h-8 ml-4'/>
      </div>
      
      {/* Navigation Links */}
      <div className="flex flex-col md:flex-row md:space-x-6 text-white mt-2 md:mt-0">
        <h6 className="cursor-pointer hover:underline">Home</h6>
        <h6 className="cursor-pointer hover:underline">About Us</h6>
        <h6 className="cursor-pointer hover:underline">Services</h6>
        <h6 className="cursor-pointer hover:underline">Portfolio</h6>
      </div>

      {/* Contact Button */}
      <div className="mt-2 md:mt-0">
        <button className="px-4 py-2 text-black bg-white rounded-full font-medium hover:bg-gray-200">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Header;
