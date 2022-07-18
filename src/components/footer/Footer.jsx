import React from "react";
import logo from "../../assets/logo_apexbuff.svg";

const Footer = () => {
  return (
    <>
      <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            class="flex items-center mb-4 sm:mb-0"
          >
            <img src={logo} class="mr-3 h-8" alt="Flowbite Logo" />
            <span class="self-center text-2xl text-mainColor font-semibold whitespace-nowrap dark:text-white">
              ApexBuff
            </span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm text-mainColor sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                Home
              </a>
            </li>
            <li>
              <a href="#legends" class="mr-4 hover:underline md:mr-6">
                Legends
              </a>
            </li>
            <li>
              <a href="#weapons" class="mr-4 hover:underline md:mr-6 ">
                Weapons
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="#" class="hover:underline">
            ApexBuff™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
};

export default Footer;
