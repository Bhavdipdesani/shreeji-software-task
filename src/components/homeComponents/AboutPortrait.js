import React from 'react';

const AboutPortrait = () => {
  return (
    <div className="flex justify-center items-center py-6">
      <div className="flex flex-col md:flex-row w-[95%] md:w-[90%] justify-between p-4 md:p-6 h-auto">
        <div className="w-full md:w-[50%] mb-6 md:mb-0">
          <h4 className="text-2xl sm:text-3xl md:text-5xl lg:text-[55px] font-bold mb-4 md:w-[90%]" style={{lineHeight:'30px !important'}}>
            About Portrait Renovation
          </h4>
          <h6 className="text-sm sm:text-base md:text-lg text-gray-700">
            With Terry Deskin at the helm, Portrait Renovations was set up with the vision of being a home renovation company with a difference. Our incredible team of dedicated professionals genuinely cares about how your home is going to look and feel and is committed to delivering quality results. We believe in making home renovations a positive experience for every family and always go above and beyond in ensuring your comfort throughout the entire process.
          </h6>
        </div>
        <div className="relative w-full md:w-[50%] flex justify-center md:justify-end">
          <img src="./workors.png" alt="workers" className="w-[85%] md:w-[90%] rounded-lg" />
          <img src="./logo-2.png" alt="logo" className="absolute bottom-0 left-12 w-16 sm:w-20 md:w-24 lg:w-28" />
          <img src="./about-more.png" alt="about more" className="absolute bottom-[1rem] right-[1.5rem] md:right-[1.2rem] w-12 sm:w-16 md:w-20 lg:w-24" />
        </div>
      </div>
    </div>
  );
};

export default AboutPortrait;
