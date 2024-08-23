import React, { useState } from 'react'
import logo from '../../assets/oxyVan-logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-white shadow-md sticky  z-20 top-0 start-0 border-b border-gray-200">
      <div className="lg:w-6/12 xl:w-[470px] sm:w-8/12 w-full mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} className="h-10" alt="Logo" />
          {/* <span className="ml-3 text-2xl font-semibold">Flowbite</span> */}
        </a>
        
        {/* Button */}
        <button type="button" className=" md:block text-white bg-second hover:bg-second-hover focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
         Donet
        </button>
        
        {/* Hamburger Icon */}
        <button 
          onClick={toggleMenu}
          className="flex items-center p-2 text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
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
      
      {/* Dropdown Menu */}
      {isOpen && (
        <div className=" bg-white shadow-lg">
          <ul className="space-y-2 p-4">
            <li>
              <a href="#" className="block text-gray-900 hover:bg-gray-100 rounded py-2 px-4">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-900 hover:bg-gray-100 rounded py-2 px-4">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-900 hover:bg-gray-100 rounded py-2 px-4">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-900 hover:bg-gray-100 rounded py-2 px-4">
                Contact
              </a>
            </li>
            {/* <li>
              <button className="block w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Get started
              </button>
            </li> */}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
