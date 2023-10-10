import React from "react";

const FourColumnComponent = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-2 gap-4 md:flex md:flex-row md:justify-between">
        {/* Recent Price */}
        <div className="p-4 text-center">
          <h3 className="md:text-xl text-base font-semibold mb-2 text-[#3A2075]">0.00044</h3>
          <p>Most recent price (ADSE)</p>
        </div>

        {/* Average Purchase */}
        <div className="p-4 text-center">
          <h3 className="md:text-xl text-base font-semibold mb-2 text-[#3A2075]">$7000</h3>
          <p>Average purchase (USD)</p>
        </div>

        {/* Token Left */}
        <div className="p-4 text-center">
          <h3 className="md:text-xl text-base font-semibold mb-2 text-[#3A2075]">9,000,000,000+</h3>
          <p>Total tokens remaining</p>
        </div>

        {/* Growth */}
        <div className="p-4 text-center">
          <h3 className="md:text-xl text-base font-semibold mb-2 text-[#3A2075]">65%</h3>
          <p>YOY Growth</p>
        </div>
      </div>
    </div>
  );
};

export default FourColumnComponent;
