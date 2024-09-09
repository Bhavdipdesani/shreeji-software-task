import React from 'react';

const Banner = () => {
  return (
    <div className="bg-black bg-image bg-opacity-90 flex flex-col md:flex-row items-center justify-between w-full">
      <h6 className="pl-4 md:pl-[10%] text-[24px] md:text-[34px] font-bold w-full md:w-[55%] text-white text-center md:text-left mb-6 md:mb-0">
        We also do the smaller projects and will assist you with ideas to help you to stay on your budget.
      </h6>
      <img 
        src="./Frame.png" 
        alt="Banner Frame" 
        className="w-[200px] md:w-[300px] mx-auto md:mx-0" 
      />
    </div>
  );
}

export default Banner;
