import React from "react";
import Rectangle from "../assets/images/Rectangle-1.png";

const TwoColumnComponent = () => {
  return (
    <div className="container flex flex-col md:flex-row items-center mx-auto">
      {/* Left Column */}
      <div className="md:w-1/2 p-6">
        <h2 className="text-xl font-semibold text-[#203475] mb-4">Data and Defi</h2>
        <p className="text-lg font-light">
          Project Adashe is building a system for data federation and
          virtualization, tied to a smart contract it can enable automatic
          execution of commands. We aim to to eliminate inefficiencies, high
          costs and restrictions in payments, transacting and record keeping,
          perpetually connecting the world of finance and data.
        </p>
        <div className="mt-8 flex space-x-4">
          <button className="bg-[#203475] text-white px-4 py-2 rounded-md">
            Buy Token
          </button>
          <button className="border border-[#203475] text-[#203475] px-4 py-2 rounded-md button-firstTwo">
            Whitepaper
          </button>
        </div>
        <div className="mt-2">
            <span className="text-[#203475] percentOff">-- 37% OFF --</span>
        </div>
      </div>

      {/* Right Column */}
      <div className="md:w-1/2 p-6">
        <img
          src={Rectangle}
          alt="rectangle"
          className="w-2/3 h-auto md:h-64 rounded-md mx-auto"
        />
      </div>
    </div>
  );
};

export default TwoColumnComponent;
