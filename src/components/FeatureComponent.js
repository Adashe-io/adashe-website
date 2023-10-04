import React from "react";
import moneyExchange from "../assets/icons/money-exchange.png";
import moneyLogo from "../assets/icons/money.png";
import investmentLogo from "../assets/icons/investment.png";
import databaseLogo from "../assets/icons/database-usage.png";

const FeatureComponent = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="p-5 rounded-lg">
        <h2 className="text-xl text-[#203475] mb-4">Features</h2>
        <p className="text-lg font-light mb-6">
          Adashe is a seamless fusion of Tradefi, DeFi, and Data systems, It is
          the future of Money, It is available across multiple Blockchains.
          Developed by crypto pioneers, aerospace inventors, engineers, data
          scientist and tech leaders, Adashe establishes a standardized industry
          framework for trade, finance, data and for adoption of blockchain and
          cryptocurrency ...view more
        </p>
      </div>
      <div className="bg-[#203475] p-4 rounded-lg mt-6">
        <div className="flex flex-col md:flex-row md:space-x-4">
          {/* Data */}
          <div className="md:w-1/4 text-center flex items-center">
          <img src={databaseLogo} alt="databaseLogo" className="pr-2" />
            <p className="text-white">Executable Data</p>
          </div>

          {/* DEFI */}
          <div className="md:w-1/4 text-center flex items-center">
          <img src={investmentLogo} alt="investmentLogo" className="pr-2" />
            <p className="text-white">Decentralized Finance</p>
          </div>

          {/* Currency */}
          <div className="md:w-1/4 text-center flex items-center">
          <img src={moneyLogo} alt="moneyLogo" className="pr-2" />
            <p className="text-white">Currency</p>
          </div>

          {/* Trade Finance */}
          <div className="md:w-1/4 text-center flex items-center">
            <img src={moneyExchange} alt="moneyExchange" className="pr-2" />
            <p className="text-white">Trade Finance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureComponent;
