import React from "react";
import telegramIcon from "../assets/icons/icons8-telegram-app-48.png";
import youtubeIcon from "../assets/icons/icons8-youtube-48.png";
import facebookIcon from "../assets/icons/icons8-facebook-48.png";

const Subscribe = () => {
  return (
    <div className="w-full p-6">
      <h2 className="text-2xl text-[#3A2075] font-semibold mb-4 footerText">Subscribe</h2>
      <form className="mb-4">
        <div className="flex items-center rounded-lg">
          <input
            type="email"
            id="email"
            name="email"
            className="bg-[#3A207530] w-full px-4 py-2 rounded-l-lg placeholder:text-gray-200"
            placeholder="Your Email Address"
            required
          />
          <button
            type="submit"
            className="bg-[#3A2075] text-white px-4 py-2 rounded-r-lg"
          >
            Subscribe
          </button>
        </div>
      </form>

      <div className="flex mt-2 space-x-4">
        <a
          href="/"
          className="text-gray-600 hover:text-blue-400"
          title="Telegram"
        >
          <img src={telegramIcon} alt="Telegram" className="w-8 h-8" />
        </a>
        <a
          href="/"
          className="text-gray-600 hover:text-red-600"
          title="YouTube"
        >
          <img src={youtubeIcon} alt="YouTube" className="w-8 h-8" />
        </a>
        <a
          href="/"
          className="text-gray-600 hover:text-blue-700"
          title="Facebook"
        >
          <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default Subscribe;
