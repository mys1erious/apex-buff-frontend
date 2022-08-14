import React from "react";
import { useState, useEffect } from "react";
import { GiBolterGun } from "react-icons/gi";
import { FcSearch } from "react-icons/fc";

const Weapons = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const result = await fetch(
      "https://apex-buff-development.herokuapp.com/api/v1/weapons/"
    );
    let resData = await result.json();
    setData(resData);
  };

  useEffect(() => {
    fetchData();

    const weaponCards = document.getElementsByClassName("weaponCard");
    document.querySelector("#weapon-search").onkeyup = (e) => {
      if (e.target.value.length > 0) {
        for (let i = 0; i < weaponCards.length; i++) {
          weaponCards[i].classList.add("hidden");
          if (weaponCards[i].id.indexOf(e.target.value.toLowerCase()) > -1) {
            weaponCards[i].classList.remove("hidden");
            weaponCards[i].classList.add("block");
          }
        }
      } else {
        for (let i = 0; i < weaponCards.length; i++) {
          weaponCards[i].classList.remove("block");
          weaponCards[i].classList.remove("hidden");
        }
      }
    };
  }, []);

  return (
    <>
      <section id="weapons">
        <div className="container pt-24 mx-auto px-4 md:px-12">
          <div className="flex justify-center flex-col items-center space-x-2">
            <div className="flex justify-center items-center flex-row">
              <GiBolterGun className="text-2xl text-gray-200 mr-1" />
              <h2 className="text-3xl font-bold text-center py-2 text-gray-200">
                Weapons
              </h2>
            </div>
            <label htmlFor="weapon-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full mt-16">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <FcSearch />
              </div>
              <input
                type="text"
                id="weapon-search"
                className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap backdrop-blur-sm">
            {data &&
              data.map((weapon, index) => (
                <div
                  id={weapon.name.toLowerCase()}
                  key={index}
                  className="weaponCard my-1 px-1 w-full md:w-1/2 lg:my-4 lg:w-1/3 "
                >
                  <article className="rounded-lg shadow-lg pb-12 bg-[#ADD8E6] md:pb-2">
                    {/* Weapon image & name */}

                    <img
                      alt={weapon.name}
                      className="block mt-6 pt-6 mx-auto h-16 w-22 rounded-md"
                      src={weapon.icon_url}
                    />
                    <header className="flex items-center justify-center flex-col leading-tight p-2 md:p-4">
                      <h1 className="text-lg font-bold text-mainColor">
                        {weapon.name}
                      </h1>
                      <div className="flex space-x-4 text-grey-darker text-sm text-white font-bold px-4 py-1 bg-baseColor  rounded-xl">
                        {weapon.ammo.length > 0
                          ? weapon.ammo.map((i) => (
                              <div
                                key={i.slug}
                                className="flex justify-center items-center"
                              >
                                <span>{i.name}</span>
                                <img
                                  className="inline ml-2 w-4 h-4"
                                  src={i.icon_url}
                                ></img>
                              </div>
                            ))
                          : "-"}

                        {/* {weapon.ammo.name}
                        <img
                          className="inline ml-2 w-4 h-4"
                          src={weapon.ammo.icon_url}
                          alt=""
                        /> */}
                      </div>
                    </header>

                    {/* weapon skills and description */}
                    <footer className="flex flex-col">
                      {/* Damage */}
                      <div className="flex flex-col justify-center items-center leading-none p-1 ">
                        <h3 className="flex justify-center items-center text-white w-auto py-1 px-2 bg-gray-700 rounded-sm h-6 ">
                          Damage
                        </h3>
                        {weapon.damage.length > 0
                          ? weapon.damage.map((i, index) => (
                              <div
                                key={index}
                                className="relative flex justify-center space-x-4 h-6 mt-2 ml-1 items-center md:items-start md:justify-between lg:text-sm lg:font-bold"
                              >
                                {weapon.damage.length > 1 ? (
                                  <span className="absolute text-center italic mt-7 left-4 bg-gray-700 px-1 rounded-sm text-blue-200 text-[10px] md:mt-4 md:bg-transparent md:text-gray-700 md:text-xs">
                                    - {i.modificator.name}
                                  </span>
                                ) : (
                                  ""
                                )}

                                <span className="text-yellow-700">
                                  body: {i.body}
                                </span>
                                <span className="text-green-700">
                                  head: {i.head}
                                </span>
                                <span className="text-blue-700">
                                  legs: {i.legs}
                                </span>
                              </div>
                            ))
                          : ""}
                      </div>
                      {/* Attachments */}
                      <div className="flex flex-col justify-center items-center leading-none p-2 ">
                        <h3 className="flex justify-center items-center text-white w-auto py-1 px-2 bg-gray-700 rounded-sm h-6">
                          Attachments
                        </h3>
                        <div className="flex justify-center space-x-4 mt-2 ml-1 items-center md:items-start md:justify-between">
                          <div
                            id="span-attachments"
                            className="flex flex-row justify-center space-x-4  md:justify-between"
                          >
                            {weapon.attachments.length > 0
                              ? weapon.attachments.map((i) => (
                                  <img
                                    className="w-4 h-4"
                                    key={i.slug}
                                    src={i.icon_url}
                                  ></img>
                                ))
                              : "-"}
                          </div>
                        </div>
                      </div>
                      {/* Damage stats */}
                      <div className="flex flex-col justify-center items-center leading-none p-2 ">
                        <h3 className="flex justify-center items-center text-white w-auto py-1 px-2 bg-gray-700 rounded-sm h-6 h-max-auto">
                          Damage stats
                        </h3>
                        <div className="flex justify-center space-x-4 mt-2 ml-1 items-center md:items-start md:justify-between">
                          <div
                            id="span-damageStats"
                            className="flex flex-row shadow-md rounded-sm p-2 w-full justify-center space-x-4 space-y-0 md:justify-between"
                          >
                            {weapon.fire_modes.length > 0
                              ? weapon.fire_modes.map((i, index) => (
                                  <div
                                    key={index}
                                    className="relative flex flex-col shadow-sm justify-center items-center md:items-start md:ml-2 "
                                  >
                                    <span className="text-sm py-0.5 px-1 bg-baseColor rounded-sm text-white tracking-wide">
                                      {i.fire_mode.name.toUpperCase()}
                                    </span>

                                    <div className="flex flex-row mt-2 space-x-2 text-md md:flex-col md:text-sm md:mt-1 md:space-x-0">
                                      <span className="text-red md:font-bold">
                                        dps: {i.stats.dps}
                                      </span>
                                      <span className="text-green-700 md:font-bold">
                                        ttk: {i.stats.ttk}
                                      </span>
                                      <span className="text-yellow-700 md:font-bold">
                                        rpm: {i.stats.rpm}
                                      </span>
                                    </div>
                                  </div>
                                ))
                              : "NO"}
                          </div>
                        </div>
                      </div>
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

export default Weapons;
