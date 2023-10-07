import React from "react";
import ContactUs from "./Contact";
import Subscribe from "./Subscribe";

const Footer = () => {
  return (
    <div className="bg-[#3A207560]">
      <div className="container mx-auto mt-8 p-4 text-white py-8 mt-12">
        <div className="mt-8 flex flex-col sm:flex-row">
          <div className="sm:w-1/2 pr-4 mb-4">
            <ContactUs />
          </div>
          <div className="sm:w-1/2 pr-4 mb-4">
            <Subscribe />
           
          </div>
        </div>
        <hr className="border-t border-gray-900 mt-4" />

        <div className="text-center text-sm text-gray-700 mt-4">
          &copy; 2023 adashe.io. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
