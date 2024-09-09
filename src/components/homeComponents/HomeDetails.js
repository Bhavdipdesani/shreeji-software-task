import React from 'react';

const data = [
  {
    title: "Living room remodeling",
    description: "This is where family memories are made. It should feel open and cozy with a flare of your preferred design style.",
    imageUrl: "./living-room.jpg",
    buttonText: "Read more",
  },
  {
    title: "Outdoor living",
    description: "We can build any design you have or we can assist you with a design that will make your outdoor plan with all the details you're interested in.",
    imageUrl: "./outdoor-living.png",
    buttonText: "Read more",
  },
  {
    title: "Bathroom remodeling",
    description: "We can get very creative with the layout of any bathroom. Big or small, it can give you a sense of ease when you walk into it.",
    imageUrl: "./bathroom-remodeling.jpg",
    buttonText: "Read more",
  },
  {
    title: "Custom built homes",
    description: "Your custom built home says it all. We can build your custom home with plans you provide or I have a source for predesigned plans that cost a fraction of the cost to hire an architect. Most plans are engineered with an official stamp required for permitting.Together you can make adjustments in any area of the home you like without additional design fees.Our company is listed as a preferred build at First National Bank where you can get the construction funding then refi into a long-term loan.",
    imageUrl: "./custom-built-homes.jpg",
    buttonText: "Read more",
  },
  {
    title: "Room additions",
    description: "We can assist with the plans in this scenario as well. We can design the whole addition including engineering for a fraction of the costs of an independent architect.",
    imageUrl: "./room-additions.png",
    buttonText: "Read more",
  },
];

const HomeDetails = () => {
  return (
    <div className="px-4 py-10 lg:px-20 flex items-center justify-center">
      <div className="w-full lg:w-[80%] grid grid-cols-1 gap-10">
        {data.map((item, index) => (
          <div 
            key={index} 
            className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center justify-between`}
          >
            <div className="md:w-[55%] w-full text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-lg md:text-xl font-semibold mb-2">{item.title}</h2>
              <p className="mb-4 text-sm md:text-base">{item.description}</p>
              <button className="px-2 py-2 text-black text-[16px] md:text-[18px] underline rounded font-bold flex justify-center md:justify-start items-center">
                {item.buttonText}
                <img src='ArrowUpRight.png' alt='ArrowUpRight' className="ml-2 w-4 h-4"/>
              </button>
            </div>
            <div className="w-full md:w-[40%]">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="rounded-3xl w-full h-auto max-h-[350px] object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeDetails;
