import React from "react";
import mensLogo from "../assets/logo/mens.png";
import safeCoin from "../assets/logo/SafeCoin_Icon.png";
import p2b from "../assets/logo/p2b-1.png";
import latoken from "../assets/logo/latoken-1.png";
import bunny from "../assets/logo/bunny-color.png";

const Exchanges = () => {
  const exchangeLogos = [
   safeCoin,
   mensLogo,
    p2b,
    latoken,
    bunny,
  ];

  return (
    <div className="bg-[#203475] container mx-auto py-2 rounded-lg featureComponentContainer">
      <div className="p-3 rounded-lg">
        <h2 className="text-xl text-gray-200 mb-4 text-center newHead">Exchanges</h2>
        <div className="p-2 rounded-lg">
          <div className="flex justify-between">
            {exchangeLogos.map((logo, index) => (
              <div key={index} className="w-1/5 p-2">
                <img
                  src={logo}
                  alt={`Exchange Logo ${index + 1}`}
                  className="max-w-full mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchanges;
