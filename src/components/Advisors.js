import React from "react";
import logo from "../assets/icons/linkedin.svg";
import profile from "../assets/icons/Ellipse.png";

const AdvisorsComponent = () => {
  const advisors = [
    {
      name: "Jon Gillon",
      imageSrc: profile,
      linkedinLink: "https://www.linkedin.com/",
    },
    {
      name: "Kevin Muldoon",
      imageSrc: profile,
      linkedinLink: "https://www.linkedin.com/",
    },
    {
      name: "Nick Raffin",
      imageSrc: profile,
      linkedinLink: "https://www.linkedin.com/",
    },
    {
      name: "Lee Hancock",
      imageSrc: profile,
      linkedinLink: "https://www.linkedin.com/",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="p-5 rounded-lg text-center">
        <h2 className="text-xl text-[#203475] mb-4">Advisors</h2>
        <div className="flex flex-wrap -mx-4">
          {advisors.map((advisor, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 mb-4 advisors"
            >
              <div className="bg-white p-4 rounded-lg advisors">
                <img
                  src={advisor.imageSrc}
                  alt={`${advisor.name}'s`}
                  className="w-23 h-23 mx-auto rounded-full"
                />
                <div className="flex justify-center items-center">
                  <h3 className="text-lg font-semibold mt-2 pr-1">
                    {advisor.name}
                  </h3>
                  <a
                    href={advisor.linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#203475] hover:underline block mt-2"
                  >
                    <img
                      src={logo}
                      alt="linkedin"
                      className="w-5 h-5 mx-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvisorsComponent;
