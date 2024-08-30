import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaWhatsappSquare } from "react-icons/fa";
import logo from "../../assets/oxyVan-logo.png";

const FooterItems = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 mt-28">
      <div className="container mx-auto p-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img src={logo} className="h-24 md:h-44" alt="OxyVan Logo" />
              {/* <span className="ml-3 text-2xl font-semibold text-gray-900 dark:text-white">
              Oxy<span className="text-primary">Van</span></span> */}
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-bold text-primary uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="/" className="hover:text-primary hover:underline">OxyVan</a>
                </li>
                <li>
                  <a href="" className="hover:text-primary hover:underline">About Us</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-bold text-primary uppercase dark:text-white">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="https://github.com/themesberg/flowbite" className="hover:text-primary hover:underline">GitHub</a>
                </li>
                <li>
                  <a href="https://discord.gg/4eeurUVvTy" className="hover:text-primary hover:underline">Discord</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-bold text-primary uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:text-primary hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary hover:underline">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 lg:my-8" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            © 2023 <a href="https://flowbite.com/" className="hover:text-primary hover:underline">SSS Technologies™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:mt-0">
            <a href="#" className="text-gray-800 hover:text-green-700 dark:hover:text-white">
              <FaWhatsappSquare className="text-3xl" />
              <span className="sr-only">WhatsApp</span>
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-700 dark:hover:text-white">
              <FaFacebookSquare className="text-3xl" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-400 dark:hover:text-white">
              <FaTwitterSquare className="text-3xl" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterItems;
