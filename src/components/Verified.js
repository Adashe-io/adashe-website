import React from 'react';
import secure from "../assets/icons/secure.png";
import contract from "../assets/icons/contract.png";
import web from "../assets/icons/web.png";
import money from "../assets/icons/money_1.png";

const Verified = () => {
  return (
    <div className="flex justify-center mt-16">
      <div className="w-1/4 p-4 text-center">
      <div className="text-4xl mb-2 h-16 w-16 border-2 border-[#203475] rounded-full flex items-center justify-center mx-auto verifiedBorder">
          <img src={secure} alt="kyc icon" />
        </div>
        <p className="mt-2 text-[#203475] text-xs md:text-ssm verifiedBorder">Team KYC</p>
      </div>
      <div className="w-1/4 p-4 text-center">
        <div className="text-4xl mb-2 h-16 w-16 border-2 border-[#203475] rounded-full flex items-center justify-center mx-auto verifiedBorder">
          <img src={web} alt="web icon" />
        </div>
        <p className="mt-2 text-[#203475] text-xs md:text-ssm verifiedBorder">Websites and Apps</p>
      </div>
      <div className="w-1/4 p-4 text-center">
        <div className="text-4xl mb-2 h-16 w-16 border-2 border-[#203475] rounded-full flex items-center justify-center mx-auto verifiedBorder">
          <img src={contract} alt="contract icon" />
        </div>
        <p className="mt-2 text-[#203475] text-xs md:text-ssm verifiedBorder">Smart Contract Audit</p>
      </div>
      <div className="w-1/4 p-4 text-center">
        <div className="text-4xl mb-2 h-16 w-16 border-2 border-[#203475] rounded-full flex items-center justify-center mx-auto verifiedBorder">
          <img src={money} alt="money-1 icon" />
        </div>
        <p className="mt-2 text-[#203475] text-xs md:text-ssm verifiedBorder">Bounty Program</p>
      </div>
    </div>
  );
};

export default Verified;
