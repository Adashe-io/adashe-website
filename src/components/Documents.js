import React from "react";

const Documents = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <h2 className="text-xl text-[#203475] mb-6 text-center">Documents</h2>

      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex">
          <button className="bg-[#203475] hover:bg-blue-800 text-white px-2 py-1 mb-4 documentButton">
            <div className="flex items-center">
              <span className="mr-2 mb-1">White Paper</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.58333"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7.91666 3.16675H4.74999C4.33006 3.16675 3.92734 3.33356 3.6304 3.6305C3.33347 3.92743 3.16666 4.33016 3.16666 4.75008V14.2501C3.16666 14.67 3.33347 15.0727 3.6304 15.3697C3.92734 15.6666 4.33006 15.8334 4.74999 15.8334H14.25C14.6699 15.8334 15.0726 15.6666 15.3696 15.3697C15.6665 15.0727 15.8333 14.67 15.8333 14.2501V11.0834M9.49999 9.50008L15.8333 3.16675M15.8333 3.16675V7.12508M15.8333 3.16675H11.875" />
              </svg>
            </div>
          </button>
        </div>

        <div className="flex">
          <button className="bg-[#203475] hover:bg-blue-800 text-white px-2 py-1 mb-4 documentButton">
            <div className="flex items-center">
              <span className="mr-2 mb-1">Privacy Policy</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.58333"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7.91666 3.16675H4.74999C4.33006 3.16675 3.92734 3.33356 3.6304 3.6305C3.33347 3.92743 3.16666 4.33016 3.16666 4.75008V14.2501C3.16666 14.67 3.33347 15.0727 3.6304 15.3697C3.92734 15.6666 4.33006 15.8334 4.74999 15.8334H14.25C14.6699 15.8334 15.0726 15.6666 15.3696 15.3697C15.6665 15.0727 15.8333 14.67 15.8333 14.2501V11.0834M9.49999 9.50008L15.8333 3.16675M15.8333 3.16675V7.12508M15.8333 3.16675H11.875" />
              </svg>
            </div>
          </button>
        </div>

        <div className="flex">
          <button className="bg-[#203475] hover:bg-blue-800 text-white px-2 py-1 mb-4 documentButton">
            <div className="flex items-center">
              <span className="mr-2 mb-1">Terms and Conditions</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.58333"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7.91666 3.16675H4.74999C4.33006 3.16675 3.92734 3.33356 3.6304 3.6305C3.33347 3.92743 3.16666 4.33016 3.16666 4.75008V14.2501C3.16666 14.67 3.33347 15.0727 3.6304 15.3697C3.92734 15.6666 4.33006 15.8334 4.74999 15.8334H14.25C14.6699 15.8334 15.0726 15.6666 15.3696 15.3697C15.6665 15.0727 15.8333 14.67 15.8333 14.2501V11.0834M9.49999 9.50008L15.8333 3.16675M15.8333 3.16675V7.12508M15.8333 3.16675H11.875" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Documents;
