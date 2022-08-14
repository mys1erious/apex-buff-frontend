import React from "react";
import logo from "../../assets/logo_apexbuff.svg";

const Footer = () => {
  return (
    <>
      <footer
        id="footer"
        className="p-4 bg-white md:px-6 md:py-8 dark:bg-gray-900"
      >
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img src={logo} className="mr-3 h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl text-mainColor font-semibold whitespace-nowrap dark:text-white">
              ApexBuff
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Home
              </a>
            </li>
            <li>
              <a href="#legends" className="mr-4 hover:underline md:mr-6">
                Legends
              </a>
            </li>
            <li>
              <a href="#weapons" className="mr-4 hover:underline md:mr-6 ">
                Weapons
              </a>
            </li>
            <li>
              <a href="#stats" className="mr-4 hover:underline md:mr-6 ">
                Stats
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-400 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="#" className="hover:underline">
            ApexBuff™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
};

export default Footer;
