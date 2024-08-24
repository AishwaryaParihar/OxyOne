import React, { useState } from "react";
import logo from "../../assets/oxyVan-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky z-20 top-0 start-0 border-b border-gray-200">
      <div className="lg:w-6/12 xl:w-[470px] sm:w-8/12 w-full mx-auto flex items-center justify-between ">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} className="h-20" alt="Logo" />
        </a>

        {/* Button */}
        <button
          type="button"
          className="md:block text-white bg-second hover:bg-second-hover focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-9 mr-11 py-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Donate
        </button>

        {/* Hamburger Icon */}
        <button
  onClick={toggleMenu}
  className="flex items-center mr-9 text-gray-500 rounded-lg focus:outline-none active:ring-0"
  aria-controls="navbar-sticky"
  aria-expanded={isOpen}
>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu with transition */}
      <div
        className={`transition-all duration-700 ease-linear transform ${
          isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"
        } bg-white shadow-lg`}
      >
        <ul className="space-y-2 p-4">
          <li>
            <a
              href="#"
              className="block text-gray-900 hover:bg-gray-100 rounded py-2 px-4"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-gray-900 hover:bg-gray-100 rounded py-2 px-4"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-gray-900 hover:bg-gray-100 rounded py-2 px-4"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-gray-900 hover:bg-gray-100 rounded py-2 px-4"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
