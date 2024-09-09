import React from 'react';
import Slider from 'react-slick';
import CustomButton from '../../customComponents/CustomButton';

const PrestigiousHome = () => {
  const ImageList = [
    './image-1.jpg',
    './image-2.png',
    './image-3.png',
    './image-4.png',
    './image-5.png',
    './image-6.png',
  ];

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4 sm:p-6">
      <div className="text-center mb-6 sm:mb-8">
        <h5 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Prestigious Home Makeover Specialists</h5>
        <h6 className="text-sm sm:text-base lg:text-lg text-gray-500 mt-2">
          These variations emphasize the high recognition and quality of the home renovation services.
        </h6>
      </div>

      {/* Image Slider using React Slick */}
      <Slider {...settings1} className="mb-4 sm:mb-6 lg:mb-8">
        {ImageList.map((image, index) => (
          <div key={index} className="px-2 sm:px-[8px]"> {/* Adding padding for spacing */}
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="rounded-lg sm:rounded-xl lg:rounded-[30px] h-32 sm:h-40 lg:h-48 w-full object-cover"
            />
          </div>
        ))}
      </Slider>
      <Slider {...settings2}>
        {ImageList.map((image, index) => (
          <div key={index} className="px-2 sm:px-[8px]"> {/* Adding padding for spacing */}
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="rounded-lg sm:rounded-xl lg:rounded-[30px] h-32 sm:h-40 lg:h-48 w-full object-cover"
            />
          </div>
        ))}
      </Slider>

      <div className="flex flex-col sm:flex-row justify-center mt-6 sm:mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
        <CustomButton buttonText="View full portfolio" buttonType="secondary" />
        <CustomButton buttonText="Schedule discovery call" buttonType="primary" />
      </div>
    </div>
  );
};

export default PrestigiousHome;
