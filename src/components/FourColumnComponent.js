import React from "react";

const FourColumnComponent = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row md:space-x-4 md:justify-between">
        {/* Recent Price */}
        <div className="md:w-1/4 p-4 text-center md:text-left">
          <h3 className="text-2xl md:text-xxl font-semibold mb-2 text-[#3A2075]">0.00044</h3>
          <p>Most recent price (ADSE)</p>
        </div>

        {/* Average Purchase */}
        <div className="md:w-1/4 p-4 text-center md:text-left">
          <h3 className="text-2xl md:text-xxl font-semibold mb-2 text-[#3A2075]">$7000</h3>
          <p>Average purchase (USD)</p>
        </div>

        {/* Token Left */}
        <div className="md:w-1/4 p-4 text-center md:text-left">
          <h3 className="text-2xl md:text-xxl font-semibold mb-2 text-[#3A2075]">9,000,000,000 +</h3>
          <p>Total tokens remaining</p>
        </div>

        {/* Growth */}
        <div className="md:w-1/4 p-4 text-center md:text-left">
          <h3 className="text-2xl md:text-xxl font-semibold mb-2 text-[#3A2075]">65%</h3>
          <p>YOY Growth</p>
        </div>
      </div>
    </div>
  );
};

export default FourColumnComponent;
