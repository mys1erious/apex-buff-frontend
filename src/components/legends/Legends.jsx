import React from "react";
import { useState, useEffect } from "react";
import { GiCharacter } from "react-icons/gi";
import { FcSearch } from "react-icons/fc";

const Legends = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const result = await fetch(
      "https://apex-buff-development.herokuapp.com/api/v1/legends/"
    ).then((res) => res.json());
    setData(result);
  };

  useEffect(() => {
    fetchData();

    const legendCards = document.getElementsByClassName("legendCard");
    document.querySelector("#simple-search").onkeyup = (e) => {
      if (e.target.value.length > 0) {
        for (let i = 0; i < legendCards.length; i++) {
          legendCards[i].classList.add("hidden");
          console.log(`id: ${legendCards[i].id} value:${e.target.value}`);
          if (legendCards[i].id.indexOf(e.target.value.toLowerCase()) > -1) {
            legendCards[i].classList.remove("hidden");
            legendCards[i].classList.add("block");
          }
        }
      } else {
        for (let i = 0; i < legendCards.length; i++) {
          legendCards[i].classList.remove("block");
          legendCards[i].classList.remove("hidden");
        }
      }
    };
  }, [data]);

  return (
    <>
      <section id="legends">
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex justify-center flex-col items-center space-x-2">
            <div className="flex justify-center items-center flex-row">
              <GiCharacter className="text-2xl text-blue-800 mr-1" />
              <h2 className="text-3xl font-bold text-center py-2 text-blue-800">
                Legends
              </h2>
            </div>
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full mt-16">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <FcSearch />
              </div>
              <input
                type="text"
                id="simple-search"
                className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap backdrop-blur-sm">
            {data &&
              data.map((legend, index) => (
                <div
                  id={legend.name.toLowerCase()}
                  key={index}
                  className="legendCard my-1 px-1 w-full md:w-1/2 lg:my-4 lg:w-1/3 "
                >
                  <article className="rounded-lg shadow-lg pb-12 bg-gradient-to-r from-rose-100 to-teal-100 md:pb-2">
                    {/* Legend image & name */}
                    <img
                      alt={legend.name}
                      className="block mt-6 mx-auto h-auto w-[250px] rounded-md"
                      src={legend.icon_url}
                    />
                    <header className="flex items-center justify-center flex-col leading-tight p-2 md:p-4">
                      <h1 className="text-lg font-bold text-blue-700">
                        {legend.name}
                      </h1>
                      <p className="text-grey-darker text-sm text-white font-bold px-4 py-1 bg-violet-500 rounded-xl">
                        {legend.role}
                      </p>
                    </header>

                    {/* Legend skills and description */}
                    <footer className="flex flex-col leading-none p-2 md:p-1 md:flex-row md:h-52 md:overflow-auto">
                      <a
                        className="flex flex-col py-2 items-center no-underline md:w-1/3"
                        href="#"
                      >
                        <div className="flex relative">
                          <img
                            alt="skill"
                            className="block rounded-full border-2 border-violet-500 w-14 h-14"
                            src={legend.abilities[0].icon_url}
                          />
                          <div className="absolute  bg-blue-900 rounded-full p-0.5 bottom-0 left-14 text-white text-xs">
                            {legend.abilities[0].cooldown === null
                              ? 0
                              : legend.abilities[0].cooldown}
                          </div>
                        </div>

                        <p className="ml-2 text-sm font-bold text-center text-gray-700">
                          {legend.abilities[0].name}
                        </p>
                        <span className="block text-center text-xs mt-1 text-gray-500">
                          {legend.abilities[0].description}
                        </span>
                      </a>

                      <a
                        className="flex flex-col py-2 items-center no-underline md:w-1/3"
                        href="#"
                      >
                        <div className="flex relative">
                          <img
                            alt="skill"
                            className="block rounded-full border-2 border-violet-500 w-14 h-14"
                            src={legend.abilities[1].icon_url}
                          />
                          <div className="absolute  bg-blue-900 rounded-full p-0.5 bottom-0 left-14 text-white text-xs">
                            {legend.abilities[1].cooldown === null
                              ? 0
                              : legend.abilities[1].cooldown}
                          </div>
                        </div>

                        <p className="ml-2 text-sm font-bold text-center text-gray-700">
                          {legend.abilities[1].name}
                        </p>
                        <span className="block text-center text-xs mt-1 text-gray-500">
                          {legend.abilities[1].description}
                        </span>
                      </a>

                      <a
                        className="flex flex-col py-2 items-center no-underline md:w-1/3"
                        href="#"
                      >
                        <div className="flex relative">
                          <img
                            alt="skill"
                            className="block rounded-full border-2 border-violet-500 w-14 h-14"
                            src={legend.abilities[2].icon_url}
                          />
                          <div className="absolute  bg-blue-900 rounded-full p-0.5 bottom-0 left-14 text-white text-xs">
                            {legend.abilities[2].cooldown === null
                              ? 0
                              : legend.abilities[2].cooldown}
                          </div>
                        </div>

                        <p className="ml-2 text-sm font-bold text-center text-gray-700">
                          {legend.abilities[2].name}
                        </p>
                        <span className="block text-center text-xs mt-1 text-gray-500">
                          {legend.abilities[2].description}
                        </span>
                      </a>
                    </footer>
                  </article>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Legends;
