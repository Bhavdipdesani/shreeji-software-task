import React from 'react';

const CustomButton = (props) => {
  const { buttonText, buttonType } = props;

  // Define styles for different button types
  const baseStyle =
    "w-full sm:w-[200px] md:w-[250px] lg:w-[300px] py-2 px-4 font-semibold rounded-lg transition duration-300";
  const primaryStyle = "bg-black text-white hover:bg-gray-700";
  const secondaryStyle = "bg-white text-black border border-black hover:bg-gray-100";

  const buttonStyle = buttonType === 'primary' ? primaryStyle : secondaryStyle;

  return (
    <div>
      <button className={`${baseStyle} ${buttonStyle}`}>
        {buttonText}
      </button>
    </div>
  );
}

export default CustomButton;
