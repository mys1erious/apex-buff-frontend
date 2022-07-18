import React from "react";
import logo from "../../assets/logo.png";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm container mx-auto p-6 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <img className="w-64" src={logo} alt="" />
          <div className="hidden space-x-8 font-bold lg:flex">
            <a
              href="#"
              className="text-blue-500 bg-white px-1 py-0.2 rounded-md  hover:text-blue-800"
            >
              Home
            </a>
            <a
              href="#legends"
              className="text-blue-500 bg-white px-1 py-0.2 rounded-md hover:text-blue-800"
            >
              Legends
            </a>
            <a
              href="#weapons"
              className="text-blue-500 bg-white px-1 py-0.2 rounded-md hover:text-blue-800"
            >
              Weapons
            </a>
          </div>
        </div>

        {/* <!-- Right Buttons Menu --> */}
        <div className="hidden items-center space-x-6 font-bold text-blue-500 lg:flex">
          <div className="hover:text-blue-800 hover:cursor-pointer bg-white px-8 py-3 rounded-full">
            Login
          </div>
          <a
            href="#"
            className="px-8 py-3 font-bold text-white bg-blue-600 rounded-full hover:opacity-70"
          >
            Sign Up
          </a>
        </div>

        {/* <!-- Hamburger Button --> */}
        <button
          id="menu-btn"
          className="block hamburger lg:hidden focus:outline-none"
          type="button"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* <!-- Mobile Menu --> */}
      <div
        id="menu"
        className="absolute hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100"
      >
        <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
          <a href="#" className="w-full text-center">
            Features
          </a>
          <a href="#" className="w-full text-center">
            Pricing
          </a>
          <a href="#" className="w-full text-center">
            Resources
          </a>
          <a
            href="#"
            className="w-full pt-6 border-t border-gray-400 text-center"
          >
            Login
          </a>
          <a href="#" className="w-full py-3 text-center rounded-full bg-cyan">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
