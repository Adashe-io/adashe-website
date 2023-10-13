import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#DDDFE5] rounded-md faqContainer">
      <button
        className="flex justify-between items-center w-full py-3 focus:outline-none"
        onClick={toggleAccordion}
      >
        <p className="text-lg text-black ml-2 mb-2">{question}</p>
        <span
          className={`${
            isOpen ? "transform rotate-45 mb-2" : ""
          } transition-transform duration-300 flex mr-2`}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="p-4 mb-2 mt-2 bg-[#3A20756B]">
          <p className="text-lg text-gray-800 font-bold">{question}</p>
          <p className="text-ssm text-gray-700 mt-2">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="container mx-auto py-8 px-4" id="FAQ">
      <h2 className="text-3xl text-[#3A2075] font-semibold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        <FAQItem
          question="Why did we create Project Adashe?"
          answer="Why did we create Project Adashe?."
        />
        <FAQItem
          question="Why is Project Adashe important?"
          answer="Reducing the security vulnerability and inefficiencies in data, payments and transactions of all kinds will allow buyers and sellers to both save and keep more of their money, this will have an especially profound impact on developing economies and under-served communities. This universal and far-reaching infrastructure would also expand the global economy further bringing economies closer. Integrating into businesses and existing systems will eliminate ensure maximal market penetration."
        />
        <FAQItem
          question="What benefits does holding ADSE give an investor?"
          answer="What benefits does holding ADSE give an investor?"
        />
      </div>
      <button className="text-white rounded-md px-4 py-2 mb-4 mt-8 mx-auto block custom-gradient">
        <span>More FAQs</span>
      </button>
    </div>
  );
};

export default FAQ;
