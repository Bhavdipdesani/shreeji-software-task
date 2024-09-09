import React from 'react';

const Footer = () => {
  return (
      <div className="px-4 md:px-8 lg:px-16 xl:px-[4rem]" style={{ backgroundImage: `url('./footer.png')` }}>
        {/* Main Content */}
        <div className="w-full flex flex-col justify-center items-center py-8 md:py-12">
          {/* Left section */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Ready for a home makeover?</h2>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-white">Reach out to us today!</p>

            {/* Email input */}
            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email here..."
                  className="w-full md:w-[350px] px-4 py-3 rounded-full border-none outline-none text-black"
                />
                <button className="bg-black text-white px-6 py-2 rounded-full absolute top-1 right-2 md:right-2">Send</button>
              </div>
            </div>
          </div>

          {/* Right section: social media icons */}
          <div className="flex flex-wrap justify-center mt-6 space-x-4">
            <img src='./instagram.png' alt='Instagram logo' className="w-6 h-6 md:w-8 md:h-8"/>
            <img src='./facebook.png' alt='Facebook logo' className="w-6 h-6 md:w-8 md:h-8"/>
            <img src='./pinterest.png' alt='Pinterest logo' className="w-6 h-6 md:w-8 md:h-8"/>
            <img src='./linkdin.png' alt='LinkedIn logo' className="w-6 h-6 md:w-8 md:h-8"/>
          </div>
        </div>

        {/* Footer Links */}
        <div className="border-t border-gray-700 mt-8 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <img src='./logo.png' alt='Logo' className='w-8 h-8 md:w-10 md:h-10'/>
            <a href="#" className="text-white text-sm md:text-base hover:underline">Home</a>
            <a href="#" className="text-white text-sm md:text-base hover:underline">About Us</a>
            <a href="#" className="text-white text-sm md:text-base hover:underline">Services</a>
            <a href="#" className="text-white text-sm md:text-base hover:underline">Portfolio</a>
            <a href="#" className="text-white text-sm md:text-base hover:underline">Contact Us</a>
          </div>
          <p className='text-white text-xs md:text-sm'>©2024 Portrait Renovations, Inc. All rights reserved</p>
        </div>
      </div>
  );
};

export default Footer;
