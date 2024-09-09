import React, { useState } from "react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What services do we offer?",
      answer: "You can return any item within 30 days of purchase.",
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping takes 5-7 business days for standard delivery.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">FAQ’s</h1>
        <h6 className="text-base sm:text-lg md:text-xl font-normal text-center mt-2">
          These reviews aim to highlight positive customer experiences and build
          trust with potential clients.
        </h6>
      </div>

      {faqData.map((faq, index) => (
        <div key={index} className="border-b border-gray-300 mb-4">
          <button
            className="w-full text-left flex justify-between items-center py-4 focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            <span className="text-lg sm:text-xl md:text-2xl font-normal">{faq.question}</span>
            <span className="text-xl sm:text-2xl md:text-3xl font-normal">
              {activeIndex === index ? "-" : "+"}
            </span>
          </button>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              activeIndex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="text-gray-700 font-normal text-base sm:text-lg md:text-xl p-4">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
