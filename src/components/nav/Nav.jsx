// import React from "react";
import logo from "../../assets/logo_apexbuff.svg";
import React, { useState, useEffect, useRef } from "react";
// import { createGlobalState } from "react-hooks-global-state";
import { Transition } from "@headlessui/react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);
  // let finalInput = "";

  // const [userInput, setUserInput] = useState("");
  // const { setUsername, useUsername } = createGlobalState({
  //   username: "k1llovat",
  // });

  // console.log(setUsername);

  // useEffect(() => {
  //   const inputSearch = document.getElementById("usernameSearch");
  //   const handleClick = (event) => {
  //     finalInput = inputSearch.value;
  //     console.log(finalInput);
  //   };

  //   const element = ref.current;

  //   element.addEventListener("click", handleClick);

  //   return () => {
  //     element.removeEventListener("click", handleClick);
  //   };
  // }, []);
  // console.log(userInput);

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-24 w-24" src={logo} alt="Workflow" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-mainColor hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </a>

                  <a
                    href="#legends"
                    className="text-gray-300 hover:bg-mainColor hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Legends
                  </a>

                  <a
                    href="#weapons"
                    className="text-gray-300 hover:bg-mainColor hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Weapons
                  </a>

                  <a
                    href="#stats"
                    className="text-gray-300 hover:bg-mainColor hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Stats
                  </a>

                  {/* <div className="flex justify-center items-center space-x-2">
                    <input
                      type="search"
                      id="usernameSearch"
                      className="form-control relative flex-auto min-w-0 block w-full px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Your nickname..."
                      aria-label="Search"
                      aria-describedby="button-addon3"
                      // onChange={(e) => setUserInput(e.target.value)}
                    />
                    <button
                      className="inline-block px-6 py-1 border-2  border-baseColor text-white font-medium tracking-wide text-xs leading-tight uppercase rounded hover:bg-white hover:text-mainColor  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      type="button"
                      id="button-addon3"
                    >
                      Search
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>

                <a
                  href="#legends"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Legends
                </a>

                <a
                  href="#weapons"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Weapons
                </a>

                <a
                  href="#stats"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Stats
                </a>

                {/* <div className="flex flex-col justify-center items-start ml-3 space-y-2">
                  <input
                    type="search"
                    id="usernameSearch"
                    className="form-control relative flex-auto min-w-0 block w-72 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Your nickname..."
                    aria-label="Search"
                    aria-describedby="button-addon3"
                  />
                  <button
                    className="inline-block px-6 py-1 border-2  border-baseColor text-white font-medium tracking-wide text-xs leading-tight uppercase rounded hover:bg-white hover:text-mainColor  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    type="button"
                    id="button-addon3"
                  >
                    Search
                  </button>
                </div> */}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Nav;
