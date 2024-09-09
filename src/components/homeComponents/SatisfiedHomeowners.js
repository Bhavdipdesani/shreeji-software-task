import React from "react";

const SatisfiedHomeowners = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-black bg-opacity-100 flex items-center justify-center"
      style={{ backgroundImage: `url('./bg-image.png')` }}
    >
      <div className="relative z-10 pb-10 w-full px-4 lg:px-0">
        <div className="flex flex-col items-center mt-10">
          <h2 className="w-full md:w-[75%] lg:w-[50%] text-[24px] md:text-[32px] lg:text-[42px] font-bold text-center text-white mb-6 md:mb-8">
            Hear from our satisfied homeowners
          </h2>
          <p className="text-center text-white text-[16px] md:text-[18px] font-[450] mb-6 md:mb-8">
            These reviews aim to highlight positive customer experiences and
            build trust with potential clients.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 mx-4 md:mx-10 lg:mx-20">
          <div className="flex flex-col items-center relative">
            <img
              src="./DavisSchleifer.png"
              alt="Davis Schleifer"
              className="w-[300px] md:w-[400px] lg:w-[500px] rounded-full shadow-md z-10" 
            />
            <div className="flex items-center justify-center space-x-6 absolute bottom-3 z-0">
              <button className="p-2 bg-white text-black rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 28 28">
                  <path fill="currentColor" d="M12.298 4.289a1 1 0 0 1 1.406 1.422L6.328 13h17.675a1 1 0 1 1 0 2H6.33l7.374 7.286a1 1 0 0 1-1.406 1.423l-8.927-8.821a1.25 1.25 0 0 1 0-1.778z"/>
                </svg>
              </button>
              <button className="p-2 bg-white text-black rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.586 13H5a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414"/>
                </svg>
              </button>
            </div>
          </div>
          <div className="text-center md:text-left">
            <svg width="40" height="32" viewBox="0 0 60 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto md:mx-0">
              <path d="M0 26V51.7143H25.7143V26H8.57149C8.57149 16.5476 16.262 8.85714 25.7143 8.85714V0.285645C11.5346 0.285645 0 11.8202 0 26ZM60 8.85714V0.285645C45.8203 0.285645 34.2857 11.8202 34.2857 26V51.7143H60V26H42.8572C42.8572 16.5476 50.5476 8.85714 60 8.85714Z" fill="white"/>
            </svg>
            <div className="flex items-center justify-center md:justify-start space-x-1 my-2">
              <h3 className="text-[28px] md:text-[36px] lg:text-[40px] text-white font-semibold">Davis Schleifer</h3>
              {Array(5).fill().map((_, i) => (
                <svg
                  key={i}
                  className="w-4 md:w-5 h-4 md:h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.917c.969 0 1.372 1.24.588 1.81l-3.973 2.857a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.539 1.118l-3.973-2.857a1 1 0 00-1.175 0l-3.973 2.857c-.784.57-1.839-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.095 10.1c-.784-.57-.38-1.81.588-1.81h4.917a1 1 0 00.95-.69l1.518-4.674z" />
                </svg>
              ))}
            </div>
            <div className="w-[80%] md:w-[60%] lg:w-[30%] h-px bg-white mx-auto md:mx-0"></div>
            <p className="text-white mt-4 text-sm md:text-base lg:text-lg">
              "We recently met Kyle & Kim at a business conference for contractors
              and I was really impressed. They know what it takes to put together
              a great project, and hearing about the structure and processes they
              have in place for their business leaves me no doubt that they're the
              #1 choice!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatisfiedHomeowners;
