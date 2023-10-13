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
            roadmapElement.classList.add("animate-fade-in");
          } else {
            roadmapElement.classList.remove("animate-fade-in");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );
    observer.observe(roadmapElement);
    return () => {
      observer.unobserve(roadmapElement);
    };
  }, []);

  return (
    <>
      <div className="flex" id="ROADMAP">
        <div className="w-1/4 p-4 flex justify-center items-center writeStyle">
          <p className="writeStyleText animationRoadmap">RoadMap</p>
        </div>
        <div className="roadmap-container" ref={roadmapRef}>
          <h2 className="text-xl text-[#203475] mb-4 text-center mt-8">
            RoadMap
          </h2>
          <div className="flex flex-col items-center space-y-4 mt-8 animate-fade-in">
            <div className="flex items-center">
              <div className="w-8 h-8 border-2 border-[#3A2075] border-opacity-50 rounded-full">
                <div className="w-4 h-4 bg-[#3A2075] bg-opacity-50 rounded-full mx-auto mt-1.5">
                  <span className="flex ml-12 w-40 text-[#3A2075] text-opacity-50 animationRoadmap">
                    Website and Ecosystem Design
                  </span>
                </div>
              </div>
            </div>
            <div className="w-1 h-16 bg-[#3A2075] bg-opacity-50"></div>

            <div className="flex items-center">
              <div className="w-8 h-8 border-2 border-[#3A2075] border-opacity-50 rounded-full">
                <div className="w-4 h-4 bg-[#3A2075] bg-opacity-50 rounded-full mx-auto mt-1.5">
                  <span className="flex ml-12 w-40 text-[#3A2075] text-opacity-50 animationRoadmap">
                    Smart Contract
                  </span>
                </div>
              </div>
            </div>
            <div className="w-1 h-16 bg-[#3A2075] bg-opacity-50"></div>

            <div className="flex items-center">
              <div className="w-8 h-8 border-2 border-[#3A2075] rounded-full">
                <div className="w-4 h-4 bg-[#3A2075] rounded-full mx-auto mt-1.5">
                  <span className="flex ml-12 w-40 text-[#3A2075] animationRoadmap">
                    Token Presale
                  </span>
                </div>
              </div>
            </div>
            <div className="w-1 h-16 bg-[#3A2075]"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 border-2 border-[#3A2075] rounded-full">
                <div className="w-4 h-4 bg-[#3A2075] rounded-full mx-auto mt-1.5">
                  <span className="flex ml-12 w-40 text-[#3A2075] animationRoadmap">
                    Exchange Listing
                  </span>
                </div>
              </div>
            </div>
            <div className="w-1 h-16 bg-[#3A2075]"></div>

            <div className="flex items-center">
              <div className="w-8 h-8 border-2 border-[#3A2075] border-opacity-50 rounded-full">
                <div className="w-4 h-4 bg-[#3A2075] bg-opacity-50 rounded-full mx-auto mt-1.5">
                  <span className="flex ml-12 w-40 text-[#3A2075] text-opacity-50 animationRoadmap">
                    DeFi Apps Launch
                  </span>
                </div>
              </div>
            </div>
            <div className="w-1 h-16 bg-[#3A2075] bg-opacity-50"></div>

            <div className="flex items-center">
              <div className="w-8 h-8 border-2 border-[#3A2075] border-opacity-50 rounded-full">
                <div className="w-4 h-4 bg-[#3A2075] bg-opacity-50 rounded-full mx-auto mt-1.5">
                  <span className="flex ml-12 w-40 text-[#3A2075] text-opacity-50 animationRoadmap">
                    TradeFi and AI Trader Integration
                  </span>
                </div>
              </div>
            </div>
            <div className="w-1 h-16 bg-[#3A2075] bg-opacity-50"></div>

            <div className="flex items-center">
              <div className="w-8 h-8 border-2 border-[#3A2075] border-opacity-50 rounded-full">
                <div className="w-4 h-4 bg-[#3A2075] bg-opacity-50 rounded-full mx-auto mt-1.5">
                  <span className="flex ml-12 w-40 text-[#3A2075] text-opacity-50 animationRoadmap">
                    Custom Blockchain
                  </span>
                </div>
              </div>
            </div>
            <div className="w-1 h-16 bg-[#3A2075] bg-opacity-50"></div>
           
            <div className="flex items-center">
              <div className="w-8 h-8 border-2 border-[#3A2075] border-opacity-50 rounded-full">
                <div className="w-4 h-4 bg-[#3A2075] bg-opacity-50 rounded-full mx-auto mt-1.5">
                  <span className="flex ml-12 w-40 text-[#3A2075] text-opacity-50 animationRoadmap">
                    ATTOS Fork and App Full Deployment
                  </span>
                </div>
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
