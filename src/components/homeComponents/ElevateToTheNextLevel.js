import React from "react";
import CustomButton from "../../customComponents/CustomButton";

const ElevateToTheNextLevel = () => {
  const data = [
    {
      title: "Discovery call",
      discription:
        "Let's connect and explore the unique vision for your renovation.",
      imageUrl: "./image-1.jpg",
    },
    {
      title: "In-home consultancy",
      discription:
        "Let's explore your home together to fully capture your vision.",
      imageUrl: "./image-2.png",
    },
    {
      title: "Scope, selections & estamate",
      discription:
        "Get instant cost and time estimates for your home remodel or construction project.",
      imageUrl: "./image-3.png",
    },
    {
      title: "Project prep & selection procurement",
      discription:
        "We handle sourcing and delivering quality materials, so you don't have to worry.",
      imageUrl: "./image-4.png",
    },
    {
      title: "Construction",
      discription:
        "We ensure a clean, organized space, prioritizing your comfort and delivering superior results.",
      imageUrl: "./image-5.png",
    },
    {
      title: "Final walkthrough & love your space",
      discription:
        "After approving renovations, our artisans restore your home.",
      imageUrl: "./image-6.png",
    },
  ];

  return (
    <div className="mt-6 mb-4 px-4 sm:px-8 lg:px-20">
      <div className="flex flex-col items-center justify-center text-center">
        <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Elevate to the next level
        </h4>
        <h6 className="text-base sm:text-lg lg:text-xl font-medium w-full sm:w-[75%] lg:w-[60%]">
          Our team of experienced experts ensures an efficient and exceptional
          client experience, providing trustworthy guidance throughout the
          process.
        </h6>
      </div>
      <div className="my-4 flex flex-col lg:flex-row flex-wrap gap-8 justify-center items-center">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div
              className="w-full sm:w-[90%] md:w-[570px] h-[100px] bg-cover bg-center rounded-2xl shadow-md p-4 flex flex-col justify-center text-white"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <h5 className="text-lg sm:text-xl md:text-2xl font-bold flex items-center">
                <span className="mx-4 text-3xl sm:text-4xl">0{index + 1}</span>
                {item.title}
              </h5>
            </div>
            <p className="text-sm sm:text-base md:text-lg w-full sm:w-[90%] md:w-[570px] mt-2">
              {item.discription}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-6">
        <div className="w-full sm:w-[75%] md:w-[60%] lg:w-[50%] flex flex-col sm:flex-row items-center justify-evenly gap-4">
          <CustomButton
            buttonText="Schedule discovery call"
            buttonType="secondary"
          />
          <CustomButton buttonText="See financing option" buttonType="primary" />
        </div>
      </div>
    </div>
  );
};

export default ElevateToTheNextLevel;
