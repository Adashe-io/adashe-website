import React from "react";

const AboutAdashe = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <h2 className="text-xl font-semibold mb-4 text-[#3A2075]">ADSE DeFi</h2>
      <p className="text-lg font-light mb-6">
        Adashe DeFi is a fine mix of traditional banking and finance with the
        convenience and accessibility of crypto which allows it to be
        potentially more profitable than traditional banking but much more
        secure than any other DeFi platforms. Our DeFi services and returns are
        protected by an Insurance policy to minimize risk for customers. Support
        of this standard guarantees the compatibility of the token with
        third-party services (wallets, exchanges, listings, etc.), and provides
        easy integration.
      </p>

      {/* Two-column section */}
      <div className="mt-8 flex flex-col sm:flex-row">
        {/* Left column */}
        <div className="sm:w-1/2 pr-4">
          <div className="mb-4">
            <p className="text-lg font-light">
              <span className="text-lg font-semibold mb-2 text-[#203475] mr-4 spanAdvisor">
                Banking
              </span>
              Bank your Stable Coin or ADSE and access it via our debit card,
              withdraw or deposit cash via ATM.{" "}
            </p>
          </div>

          <div className="mb-4">
            <p className="text-lg font-light">
              <span className="text-lg font-semibold mb-2 text-[#203475] mr-4 spanAdvisor">
                Staking
              </span>
              Stake the LP tokens from our DeFi or other AMM platforms and earn
              LP staking rewards up to 10%.{" "}
            </p>
          </div>

          <div className="mb-4">
            <p className="text-lg font-light">
              <span className="text-lg font-semibold mb-2 text-[#203475] mr-4 spanAdvisor">
                Lending
              </span>
              Lend your Adashe tokens to any one of our selected third party
              borrowers for different annual APY.
            </p>
          </div>

          <div className="mb-4">
            <p className="text-lg font-light">
              <span className="text-lg font-semibold mb-2 text-[#203475] mr-4 spanAdvisor">
                Farming
              </span>
              Farm your ADSE with pairs of other crypto currencies to help
              provide liquidity, earn transaction fees.
            </p>
          </div>

          <div className="mb-4">
            <p className="text-lg font-light">
              <span className="text-lg font-semibold mb-2 text-[#203475] mr-4 spanAdvisor">
                Donate
              </span>
              Donate anonymously to featured projects, charities, causes and
              individuals, at no platform fees.{" "}
            </p>
          </div>
          <div className="flex">
            <button className="border border-[#203475] text-[#203475] rounded-md px-4 py-1 mb-4 button-firstTwo">
              <div className="flex items-center">
                {" "}
                {/* Wrap icon and text in a flex container */}
                <span className="mr-2 mb-1">View Chain Explorer</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <path
                    d="M7.91666 3.16675H4.74999C4.33006 3.16675 3.92734 3.33356 3.6304 3.6305C3.33347 3.92743 3.16666 4.33016 3.16666 4.75008V14.2501C3.16666 14.67 3.33347 15.0727 3.6304 15.3697C3.92734 15.6666 4.33006 15.8334 4.74999 15.8334H14.25C14.6699 15.8334 15.0726 15.6666 15.3696 15.3697C15.6665 15.0727 15.8333 14.67 15.8333 14.2501V11.0834M9.49999 9.50008L15.8333 3.16675M15.8333 3.16675V7.12508M15.8333 3.16675H11.875"
                    stroke="#3A2075"
                    strokeWidth="1.58333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-[#203475] p-4 rounded-lg flex allocationTable">
          <div className="w-full md:w-1/2 pr-4">
            <p className="text-white mb-6">Team Allocation</p>
            <p className="text-white mb-6">Marketing</p>
            <p className="text-white mb-6">Partner recruitment</p>
            <p className="text-white mb-6">Reserves</p>
            <p className="text-white mb-6">Initial Token Sales</p>
            <p className="text-white mb-6">Initial Minted Token</p>
            <p className="text-white mb-6">Initial Token Supply</p>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-white mb-6">7%</p>
            <p className="text-white mb-6">2.5%</p>
            <p className="text-white mb-6">5%</p>
            <p className="text-white mb-6">63.78%</p>
            <p className="text-white mb-6">21.78%</p>
            <p className="text-white mb-6">4,637,000,000</p>
            <p className="text-white mb-6">10,000,000,000</p>
            {/* Add content for the right column */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAdashe;
