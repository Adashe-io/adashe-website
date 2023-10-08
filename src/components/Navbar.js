import React, { useState, useEffect } from "react";
import logo from "../assets/logo/Adashe.png";
import { Sun, Moon } from "react-feather";
import "../index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;

    setIsDarkMode(newDarkModeState);
    localStorage.setItem("isDarkMode", newDarkModeState ? "true" : "false");

    const rootElement = document.documentElement;
    rootElement.classList.toggle("dark-mode", newDarkModeState);
  };
  useEffect(() => {
    const storedIsDarkMode = localStorage.getItem("isDarkMode");

    if (storedIsDarkMode === "true") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }

    const rootElement = document.documentElement;
    rootElement.classList.toggle("dark-mode", storedIsDarkMode === "true");
  }, []);



  return (
    <nav className={`py-2 md:py-4 ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src={logo} alt="Adashe" className="w-39 h-16" />
        </div>
        <div className="md:hidden pr-3">
            <button onClick={toggleDarkMode}>
              {isDarkMode ? <Sun /> : <Moon />}
            </button>
          </div>
        <div className="hidden md:flex space-x-6">
          <a
            href="/"
            className={`text-[#203475] hover:text-gray-300 transition duration-300`}
          >
            ABOUT
          </a>
          <a
            href="/"
            className="text-[#203475] hover:text-gray-300 transition duration-300"
          >
            SERVICES
          </a>
          <a
            href="/"
            className="text-[#203475] hover:text-gray-300 transition duration-300"
          >
            ROADMAP
          </a>
          <a
            href="/"
            className="text-[#203475] hover:text-gray-300 transition duration-300"
          >
            WHITEPAPER
          </a>
          <a
            href="/"
            className="text-[#203475] hover:text-gray-300 transition duration-300"
          >
            TEAM
          </a>
          <a
            href="/"
            className="text-[#203475] hover:text-gray-300 transition duration-300"
          >
            FAQ
          </a>
          <div className="pr-3">
            <button onClick={toggleDarkMode}>
              {isDarkMode ? <Sun /> : <Moon />}
            </button>
          </div>
          <button className="border border-[#203475] text-[#203475] rounded-md px-4 py-1 button-firstTwo">
            Buy Token
          </button>
        </div>
        <div className="md:hidden pr-3">
          <button onClick={toggleNavbar} className="text-[#203475]">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden py-2 border-b border-gray-300 pl-2">
          <a
            href="/"
            className="block text-[#203475] p-2 px-4 hover:text-gray-300 transition duration-300 hover:border-[#203475]"
          >
            ABOUT
          </a>
          <a
            href="/"
            className="block text-[#203475] p-2 px-4 hover:text-gray-300 transition duration-300"
          >
            SERVICES
          </a>
          <a
            href="/"
            className="block text-[#203475] p-2 px-4 hover:text-gray-300 transition duration-300"
          >
            ROADMAP
          </a>
          <a
            href="/"
            className="block text-[#203475] p-2 px-4 hover:text-gray-300 transition duration-300"
          >
            WHITEPAPER
          </a>
          <a
            href="/"
            className="block text-[#203475] p-2 px-4 hover:text-gray-300 transition duration-300"
          >
            TEAM
          </a>
          <a
            href="/"
            className="block text-[#203475] p-2 px-4 hover:text-gray-300 transition duration-300"
          >
            FAQ
          </a>
          <button className="border border-[#203475] text-[#203475] px-4 py-1 rounded-md">
            Buy Token
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
