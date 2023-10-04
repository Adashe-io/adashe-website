import React from 'react';
import farmingIcon from "../assets/icons/farming.png";
import vestingIcon from "../assets/icons/vesting.svg";
import tokenIcon from "../assets/icons/token.svg";
import saleIcon from "../assets/icons/sale.svg";

const FiveColumnRow = () => {
  return (
    <div className="container mx-auto mt-16">
      <div className="flex flex-wrap justify-center md:justify-between">
        <div className="w-full md:w-1/5 p-4 md:p-2 text-center">
          <p className='text-base text-[#3A2075]'>Smart Contracts</p>
        </div>
        <div className="w-1/2 md:w-1/5 p-4 md:p-2 text-center">
          <div className="bg-[#3A2075] rounded-full w-16 h-16 mx-auto mb-2 flex justify-center items-center">
            <img
              src={farmingIcon}
              alt="Farming"
              className="w-10 h-10"
            />
          </div>
          <p className="text-center mt-2">Farming</p>
        </div>
        <div className="w-1/2 md:w-1/5 p-4 md:p-2 text-center">
          <div className="bg-[#3A2075] rounded-full w-16 h-16 mx-auto mb-2 flex justify-center items-center">
            <img
              src={vestingIcon}
              alt="Vesting"
              className="w-10 h-10"
            />
          </div>
          <p className="text-center mt-2">Vesting</p>
        </div>
        <div className="w-1/2 md:w-1/5 p-4 md:p-2 text-center">
          <div className="bg-[#3A2075] rounded-full w-16 h-16 mx-auto mb-2 flex justify-center items-center">
            <img
              src={tokenIcon}
              alt="Token"
              className="w-10 h-10"
            />
          </div>
          <p className="text-center mt-2">Token</p>
        </div>
        <div className="w-1/2 md:w-1/5 p-4 md:p-2 text-center">
          <div className="bg-[#3A2075] rounded-full w-16 h-16 mx-auto mb-2 flex justify-center items-center">
            <img
              src={saleIcon}
              alt="Sale"
              className="w-10 h-10"
            />
          </div>
          <p className="text-center mt-2">Sale</p>
        </div>
      </div>
    </div>
  );
};

export default FiveColumnRow;
