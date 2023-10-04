import React from "react";
import Othniel from "../assets/images/teams/Othniel.png";
import Papadopoulos from "../assets/images/teams/Papadopoulos.png";
import Quivira from "../assets/images/teams/Quivira.png";
import Uzochukwu from "../assets/images/teams/Uzochukwu.png";
import socialIcon from "../assets/icons/linkedin.svg";

const Team = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <h2 className="text-base font-semibold text-[#3A2075] mb-4 text-center">The Team</h2>
      <div className="flex flex-wrap justify-between">
        {/* Team Member 1 */}
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-gray-200 rounded-lg p-4 flex">
            {/* Left Column (Image) */}
            <div className="flex-shrink-0 mr-4">
              <img
                src={Othniel}
                alt="Team Member 1"
                className="w-25 h-25 mt-6"
              />
            </div>

            {/* Right Column (Text) */}
            <div className="flex-grow">
              <div className="mb-4">
                <p className="text-lg text-[#3A2075] font-semibold">Othniel Mbamalu</p>
                <p className="text-gray-600">CEO</p>
              </div>

              <p className="text-black">
                An Aerospace Inventor with multiple US patents and an innovator
                in multiple spaces including Blockchain and Crypto
              </p>

              <div className="mt-4 flex items-center">
                <img src={socialIcon} alt="Icon 1" className="w-6 h-6 mr-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-gray-200 rounded-lg p-4 flex">
            {/* Left Column (Image) */}
            <div className="flex-shrink-0 mr-4">
              <img
                src={Papadopoulos}
                alt="Team Member 2"
                className="w-25 h-25 mt-6"
              />
            </div>

            {/* Right Column (Text) */}
            <div className="flex-grow">
              <div className="mb-4">
                <p className="text-lg text-[#3A2075] font-semibold">
                  Dr. Periklis Papadopoulos
                </p>
                <p className="text-gray-600">CTO</p>
              </div>

              <p className="text-black">
                Dr. Periklis Papadopoulos is a a seasoned engineer and has
                worked on projects spanning decades in Aerospace and other
                cutting edge systems.
              </p>

              <div className="mt-4 flex items-center">
                <img src={socialIcon} alt="Icon 1" className="w-6 h-6 mr-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        {/* Team Member 3 */}
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-gray-200 rounded-lg p-4 flex">
            {/* Left Column (Image) */}
            <div className="flex-shrink-0 mr-4">
              <img
                src={Quivira}
                alt="Team Member 1"
                className="w-25 h-25 mt-6"
              />
            </div>

            {/* Right Column (Text) */}
            <div className="flex-grow">
              <div className="mb-4">
                <p className="text-lg text-[#3A2075] font-semibold">Quivira. Ophir</p>
                <p className="text-gray-600">Chief Marketing Officer</p>
              </div>

              <p className="text-black">
                One of the Africa's top crypto influencers, Quivira's skills
                extend beyond marketing into programmming and and business
                management.
              </p>

              <div className="mt-4 flex items-center">
                <img src={socialIcon} alt="Icon 1" className="w-6 h-6 mr-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Team Member 4 */}
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-gray-200 rounded-lg p-4 flex">
            {/* Left Column (Image) */}
            <div className="flex-shrink-0 mr-4">
              <img
                src={Uzochukwu}
                alt="Team Member 1"
                className="w-25 h-25 mt-6"
              />
            </div>

            {/* Right Column (Text) */}
            <div className="flex-grow">
              <div className="mb-4">
                <p className="text-lg text-[#3A2075] font-semibold">Uzochukwu Mbamalu</p>
                <p className="text-gray-600">CFO</p>
              </div>

              <p className="text-black">
                Founder of Palremit, Ted Talk alumni and a fast growing
                personality in the fintech space with an in-depth understanding
                of tech and finance.
              </p>

              <div className="mt-4 flex items-center">
                <img src={socialIcon} alt="Icon 1" className="w-6 h-6 mr-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
