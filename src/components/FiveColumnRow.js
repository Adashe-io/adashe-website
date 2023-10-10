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
          <p className='text-xxl font-semibold text-[#3A2075]'>Smart Contracts</p>
        </div>
        <div className="w-1/1 md:w-1/5 p-4 md:p-2 text-center">
          <div className="bg-[#3A2075] rounded-full sm:w-16 sm:h-16 w-12 h-12 mx-auto mb-2 flex justify-center items-center borderColor">
            <img
              src={farmingIcon}
              alt="Farming"
              className="w-8 h-8"
            />
          </div>
          <p className="text-center mt-2">Farming</p>
        </div>
        <div className="w-1/1 md:w-1/5 p-4 md:p-2 text-center">
          <div className="bg-[#3A2075] rounded-full sm:w-16 sm:h-16 w-12 h-12 mx-auto mb-2 flex justify-center items-center borderColor">
            <img
              src={vestingIcon}
              alt="Vesting"
              className="w-8 h-8"
            />
          </div>
          <p className="text-center mt-2">Vesting</p>
        </div>
        <div className="w-1/1 md:w-1/5 p-4 md:p-2 text-center">
          <div className="bg-[#3A2075] rounded-full sm:w-16 sm:h-16 w-12 h-12 mx-auto mb-2 flex justify-center items-center borderColor">
            <img
              src={tokenIcon}
              alt="Token"
              className="w-8 h-8"
            />
          </div>
          <p className="text-center mt-2">Token</p>
        </div>
        <div className="w-1/1 md:w-1/5 p-4 md:p-2 text-center">
          <div className="bg-[#3A2075] rounded-full sm:w-16 sm:h-16 w-12 h-12 mx-auto mb-2 flex justify-center items-center borderColor">
            <img
              src={saleIcon}
              alt="Sale"
              className="w-8 h-8"
            />
          </div>
          <p className="text-center mt-2">Sale</p>
        </div>
      </div>
    </div>
  );
};

export default FiveColumnRow;
