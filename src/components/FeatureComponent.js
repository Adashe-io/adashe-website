import React, { useState } from "react";
import moneyExchange from "../assets/icons/money-exchange.svg";
import moneyLogo from "../assets/icons/money.svg";
import investmentLogo from "../assets/icons/investment.svg";
import databaseLogo from "../assets/icons/database-usage.svg";

const FeatureComponent = () => {
  const initialText = `Adashe is a seamless fusion of Tradefi, DeFi, and Data systems, It is the future of Money, It is available across multiple Blockchains. Developed by crypto pioneers, aerospace inventors, engineers, data scientist and tech leaders, Adashe establishes a standardized industry framework for trade, finance, data and for adoption of blockchain and crypto. Adabase is a federated data solution which will allow for robust and real time interactions of and with data from an endless stream of sources. Supply chains, performance data tracking and automated execution of commands specific to user and situation are all uses, giving users a detailed snapshot and the ability to respond faster and more precisely. Our crypto currency lubricates the ecosystem and serves as payment for interactions at predetermined intervals. Enterprise and non-enterprise users can interact with our Eco-system via our app and web-based solutions across different platforms for free. Adabase while built to work with Adashe can via smart contracts execute payments for other chains with associated fees, furthermore Project Adashe plans to eventually fork the Polygon chain for it custom blockchain protocol.`;

  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="container mx-auto py-8" id="ABOUT">
      <div className="p-5 rounded-lg">
        <h2 className="text-xl font-semibold text-[#203475] mb-4">
          Project Adashe
        </h2>
        <p className="text-lg font-light mb-6">
          {showFullText ? initialText : initialText.slice(0, 351)}
          <span onClick={toggleText} className="cursor-pointer underline">
            {showFullText ? "view less" : "..view more"}
          </span>
        </p>
      </div>
      <div className="p-4 mt-">
        <div className="md:flex md:flex-row md:justify-center grid grid-cols-2 gap-2 py-5 px-2 rounded-lg custom-gradient featureComponentContainer">
          {/* Data */}
          <div className="w-full md:w-1/2 lg:w-1/4 text-center flex items-center mb-4 projectAdashe">
            <img src={databaseLogo} alt="databaseLogo" className="pr-2" />
            <p className="text-white text-xms md:text-sm">Executable Data</p>
          </div>

          {/* DEFI */}
          <div className="w-full md:w-1/2 lg:w-1/4 text-center flex items-center mb-4 projectAdashe">
            <img src={investmentLogo} alt="investmentLogo" className="pr-2" />
            <p className="text-white text-xms md:text-sm">Decentralized Finance</p>
          </div>

          {/* Currency */}
          <div className="w-full md:w-1/2 lg:w-1/4 text-center flex items-center mb-4 projectAdashe">
            <img src={moneyLogo} alt="moneyLogo" className="pr-2" />
            <p className="text-white text-xms md:text-sm">Currency</p>
          </div>

          {/* Trade Finance */}
          <div className="w-full md:w-1/2 lg:w-1/4 text-center flex items-center mb-4 projectAdashe">
            <img src={moneyExchange} alt="moneyExchange" className="pr-2" />
            <p className="text-white text-xms md:text-sm">Trade Finance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureComponent;
