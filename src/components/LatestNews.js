import React, { useState } from "react";
import featuredImage from "../assets/images/Rectangle-41.png";
import back from "../assets/icons/icon-back.png";
import next from "../assets/icons/icon-next.png";

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
      <div className="container mx-auto rounded-lg custom-gradient">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-xl font-semibold text-gray-100 mb-4 text-center newHead">
              Latest News
            </h2>
            <div className="rounded-lg p-4">
              <h3 className="text-2xl font-semibold mb-4 text-gray-200">
                {currentArticle.title}
              </h3>
              <p className="text-lg mb-2 text-gray-200">
                {currentArticle.content}
              </p>
              <button className="border border-b-4 border-gray-200 text-gray-200 px-4 py-2 rounded hover:bg-[#1D1247] mt-4">
                View Details
              </button>
            </div>
            <div className="flex mt-4">
              <button
                className="text-white px-2 py-2 rounded ml-4"
                onClick={handleBack}
                disabled={currentArticleIndex === 0}
              >
                <img src={back} alt="Back Icon" />
              </button>

              <button
                className="text-white px-2 py-2 rounded"
                onClick={handleNext}
                disabled={currentArticleIndex === newsData.length - 1}
              >
                <img src={next} alt="Next Icon" />
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
