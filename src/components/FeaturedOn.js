import React from "react";
import businessLogo from "../assets/logo/business-insider.png";
import bloombergLogo from "../assets/logo/Bloomberg_Businessweek.png";
import googleFinance from "../assets/logo/GoogleFinance.png";
import cnnMoneyLogo from "../assets/logo/CNNMoney.png";

const FeaturedOn = () => {
  const images = [businessLogo, bloombergLogo, googleFinance, cnnMoneyLogo];

  return (
    <div className="container mx-auto py-8">
      <div className="p-5 rounded-lg">
        <h2 className="text-3xl text-[#203475] text-center mb-4">
          Featured On
        </h2>
        <div className="flex flex-wrap justify-center">
          {images.map((image, index) => (
            <div
              key={index}
              className="md:w-full w-1/4 w-1/4 lg:w-1/3 xl:w-1/4 p-2"
            >
              <img
                src={image}
                alt={`Featured On  ${index + 1}`}
                className="max-w-full mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedOn;
