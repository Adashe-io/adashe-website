import React, { useEffect, useRef } from "react";
import "../assets/styles/Roadmap.css";
import Verified from "./Verified";

const Roadmap = () => {
    const roadmapRef = useRef(null);


    useEffect(() => {
        const roadmapElement = roadmapRef.current;
      
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // When the roadmap section enters the viewport, add your animation class here
                roadmapElement.classList.add("animate-fade-in");
              } else {
                // Remove the animation class when it exits the viewport
                roadmapElement.classList.remove("animate-fade-in");
              }
            });
          },
          {
            threshold: 0.2, // Adjust this threshold as needed
          }
        );
      
        // Start observing the roadmap section
        observer.observe(roadmapElement);
      
        // Clean up the observer when the component unmounts
        return () => {
          observer.unobserve(roadmapElement);
        };
      }, []);
      

  return (
    <>
    <div className="flex">
    <div className="w-1/4 p-4 flex justify-center items-center writeStyle">
  
    <p className="writeStyleText">RoadMap</p>
  </div>
    <div className="roadmap-container" ref={roadmapRef}>
      <h2 className="text-xl text-[#203475] mb-4 text-center mt-8">RoadMap</h2>
      <div className="flex flex-col items-center space-y-4 mt-8 animate-fade-in">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-[#3A2075] bg-opacity-50 rounded-full">
            <span className="flex ml-12 w-40 text-[#3A2075] text-opacity-50">
              Website and Ecosystem Design
            </span>
          </div>
        </div>
        <div className="w-1 h-16 bg-[#3A2075] bg-opacity-50"></div>

        <div className="flex items-center">
          <div className="w-8 h-8 bg-[#3A2075] bg-opacity-80 rounded-full">
            <span className="flex ml-12 w-40 text-[#3A2075] text-opacity-80">
              Smart Contract
            </span>
          </div>
        </div>
        <div className="w-1 h-16 bg-[#3A2075] bg-opacity-80"></div>

        <div className="flex items-center">
          <div className="w-8 h-8 bg-[#3A2075] rounded-full">
            <span className="flex ml-12 w-40 text-[#3A2075]">
              Token Presale
            </span>
          </div>
        </div>
        <div className="w-1 h-16 bg-[#3A2075]"></div>
        <div className="flex items-center">
          <div className="w-8 h-8 bg-[#3A2075] rounded-full">
            <span className="flex ml-12 w-40 text-[#3A2075]">
              Exchange Listing
            </span>
          </div>
        </div>
        <div className="w-1 h-16 bg-[#3A2075]"></div>

        <div className="flex items-center">
          <div className="w-8 h-8 bg-[#3A2075] bg-opacity-90 rounded-full">
            <span className="flex ml-12 w-40 text-[#3A2075] text-opacity-90">
              DeFi Apps Launch
            </span>
          </div>
        </div>
        <div className="w-1 h-16 bg-[#3A2075] bg-opacity-90"></div>

        <div className="flex items-center">
          <div className="w-8 h-8 bg-[#3A2075] bg-opacity-80 rounded-full">
            <span className="flex ml-12 w-40 text-[#3A2075] text-opacity-80">
              TradeFi and AI Trader Integration
            </span>
          </div>
        </div>
        <div className="w-1 h-16 bg-[#3A2075] bg-opacity-80"></div>

        <div className="flex items-center">
          <div className="w-8 h-8 bg-[#3A2075] bg-opacity-70 rounded-full">
            <span className="flex ml-12 w-40 text-[#3A2075] text-opacity-70">
              Custom Blockchain
            </span>
          </div>
        </div>
        <div className="w-1 h-16 bg-[#3A2075] bg-opacity-70"></div>
        <div className="flex items-center">
          <div className="w-8 h-8 bg-[#3A2075] bg-opacity-70 rounded-full">
            <span className="flex ml-12 w-40 text-[#3A2075] text-opacity-70">
              ATTOS Fork and App Full Deployment
            </span>
          </div>
        </div>
      </div>
      </div>
      </div>
      <Verified />
    </>
  );
};

export default Roadmap;
