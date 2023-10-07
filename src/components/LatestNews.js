import React, { useState } from "react";
import featuredImage from "../assets/images/Rectangle-41.png";

const LatestNews = () => {
  const newsData = [
    {
      title: "Adashe partners with Smart Point",
      content:
        "Partnership announcement Project Adashe is the definitive blockchain and cryptocurrency for space. The core objective of Project Adashe is eliminating inefficiencies and restrictions in payments. Partnership announcement Project Adashe is the definitive blockchain and cryptocurrency for space. The core objective of Project Adashe is eliminating inefficiencies and restrictions in payments. Partnership announcement Project Adashe is the definitive blockchain and cryptocurrency for space. The core objective of Project Adashe is eliminating inefficiencies and restrictions in payments.",
      imageUrl: featuredImage,
    },
    {
      title: "New Features in Adashe 2.0",
      content:
        "We are excited to announce the release of Adashe 2.0, featuring several new enhancements and improvements. Some of the key highlights include faster transaction processing, enhanced security measures, and improved user experience. We believe these changes will further establish Adashe as a leader in the blockchain and cryptocurrency space.",
      imageUrl: featuredImage,
    },
  ];

  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

  const handleNext = () => {
    if (currentArticleIndex < newsData.length - 1) {
      setCurrentArticleIndex(currentArticleIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentArticleIndex > 0) {
      setCurrentArticleIndex(currentArticleIndex - 1);
    }
  };

  const currentArticle = newsData[currentArticleIndex];

  return (
    <div className="py-8">
      <div className="bg-[#3A2075] container mx-auto rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-xl font-semibold text-gray-100 mb-4 text-center">
              Latest News
            </h2>
            <div className="rounded-lg p-4">
              <h3 className="text-2xl font-semibold mb-4 text-gray-200">
                {currentArticle.title}
              </h3>
              <p className="text-lg mb-2 text-gray-200">
                {currentArticle.content}
              </p>
              <button className="bg-[#3A2075] border border-gray-200 text-gray-200 px-4 py-2 rounded hover:bg-[#1D1247] mt-4">
                View Details
              </button>
            </div>
            <div className="flex mt-4">
              <button
                className="view-details-button border border-gray-200 bg-[#3A2075] text-white px-4 py-2 rounded hover:bg-[#1D1247] ml-4 mr-4"
                onClick={handleBack}
                disabled={currentArticleIndex === 0}
              >
                Back
              </button>
              <button
                className="view-details-button border border-gray-200 bg-[#3A2075] text-white px-4 py-2 rounded hover:bg-[#1D1247]"
                onClick={handleNext}
                disabled={currentArticleIndex === newsData.length - 1}
              >
                Next
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
            <div className="rounded-lg p-4">
              <img
                src={currentArticle.imageUrl}
                alt="News"
                className="w-full h-full rounded-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;