import { React, useEffect, useState } from "react";
import { ImStatsDots } from "react-icons/im";
import { FcSearch } from "react-icons/fc";
import ClipLoader from "react-spinners/ClipLoader";

const Stats = () => {
  const [data, setData] = useState(null);
  let baseUrl = "https://apex-buff-development.herokuapp.com/api/v1";

  const [platform, setPlatform] = useState("PC");
  const [username, setUsername] = useState("k1llovat");

  const [spinner, setSpinner] = useState(false);

  const handlePlatformChange = (e) => {
    setPlatform(e.target.value);
  };

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const buttonPressed = () => {
    getUserData();
  };

  useEffect(() => {
    getTokens();
  }, []);

  useEffect(() => {}, [data]);

  const getUserData = async () => {
    try {
      setSpinner(true);
      const response = await fetch(
        baseUrl + `/users/profile/?platform=${platform}&username=${username}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      const localdata = await response.json();
      setData(localdata);
      setSpinner(false);
    } catch (err) {
      alert("Please, enter the valid nickname and platform!");
      setSpinner(false);
    }
  };

  const getTokens = async () => {
    const response = await fetch(baseUrl + "/users/token/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "admin", password: "test4321" }),
    });
    const data = await response.json();
    localStorage.setItem("access_token", data.access);
    localStorage.setItem("refresh_token", data.refresh);
  };

  const renderStatsheader = (
    <div className="container pt-24 mx-auto px-4 md:px-12">
      <div className="flex justify-center flex-col items-center space-x-2">
        <div className="flex justify-center items-center flex-row">
          <ImStatsDots className="text-2xl text-gray-200 mr-1" />
          <h2 className="text-3xl font-bold text-center py-2 text-gray-200">
            Stats
          </h2>
        </div>

        <label htmlFor="stats-search" className="sr-only">
          Search
        </label>

        <div className="flex justify-center items-start -mb-12 mt-16 space-x-4 text-white ">
          {/* PC and Steam */}
          <input
            className="w-6 h-6"
            type="radio"
            name="platfromChoice"
            id="orginPlatform"
            value="PC"
            checked={platform === "PC"}
            onChange={handlePlatformChange}
          />
          <label htmlFor="originPlatform">Origin and Steam</label>
          {/* Xbox */}
          <input
            className="w-6 h-6"
            type="radio"
            name="platfromChoice"
            id="xboxPlatform"
            value="X1"
            checked={platform === "X1"}
            onChange={handlePlatformChange}
          />
          <label htmlFor="xboxPlatform">Xbox</label>
          {/* Ps4 */}
          <input
            className="w-6 h-6"
            type="radio"
            name="platfromChoice"
            id="ps4Platform"
            value="PS4"
            checked={platform === "PS4"}
            onChange={handlePlatformChange}
          />
          <label htmlFor="ps4Platform">PS4</label>
        </div>
        <div className="relative w-full mt-16">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <FcSearch />
          </div>
          <div className="flex space-x-6">
            <input
              type="text"
              id="stats-search"
              className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Username (Eg. k1llovat)"
              onChange={handleInputChange}
              required
            />
            <button
              className="text-white outline-none border-red-100 border-2 px-4 transform transition-colors duration-200 hover:border-mainColor rounded-md"
              id="statsSearchButton"
              onClick={buttonPressed}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStatsBody = (
    <section id="stats">
      {renderStatsheader}
      {spinner && (
        <div className="fixed top-1/2 left-1/2 translate(-1/2, -1/2) z-100">
          {<ClipLoader color="white" size={100} />}
        </div>
      )}
      {data && !spinner ? (
        <div className="px-4 py-12 bg-gray-800 md:container md:mx-auto">
          {/* <!-- Username --> */}
          <div className="flex justify-center items-center space-x-2 p-2 w-full bg-gray-700 rounded-md text-white shadow-sm shadow-gray-900">
            <div className="flex justify-center items-center flex-wrap space-x-2 p-2 bg-mainColor shadow-lg rounded-lg">
              <img
                className="flex justify-center items-center ml-2 h-8 aspect-square rounded-full"
                src={data.data.platformInfo.avatarUrl}
              />
              <span>{data.data.platformInfo.platformUserId}</span>
            </div>
            <div className="bg-gray-800 rounded-lg">
              <div className="flex justify-end items-center space-x-2 p-2">
                Battle Royale Rank:
                <span className="text-yellow-500 ml-2">
                  {data.data.segments[0].stats.rankScore.metadata.rankName}
                </span>
                <img
                  className="flex justify-center items-center float-right ml-2 h-10 aspect-square"
                  src={data.data.segments[0].stats.rankScore.metadata.iconUrl}
                />
              </div>
              <div className="flex justify-end items-center space-x-2 p-2">
                Arena Rank:
                <span className="text-yellow-500 ml-2">
                  {data.data.segments[0].stats.arenaRankScore.metadata.rankName}
                </span>
                <img
                  className="flex justify-center items-center ml-2 h-10 aspect-square"
                  src={
                    data.data.segments[0].stats.arenaRankScore.metadata.iconUrl
                  }
                />
              </div>
            </div>
          </div>
          {/* <!-- Main information about user --> */}
          <div className="flex justify-between flex-wrap items-center gap-2 m-2">
            {/* <!-- Level --> */}
            <div className="flex justify-center items-center grow space-x-2 bg-gray-600 rounded-sm p-2">
              <div className="text-gray-300">Level</div>
              <div className="text-white font-bold bg-gray-800 px-2 rounded-lg">
                {data.data.segments[0].stats.level.value}
              </div>
            </div>
            {/* <!-- Kills --> */}
            <div className="flex justify-center items-center grow space-x-2 bg-gray-600 rounded-sm p-2">
              <div className="text-gray-300">Kills</div>
              <div className="text-white font-bold bg-gray-800 px-2 rounded-lg">
                {data.data.segments[0].stats.kills.value}
              </div>
            </div>

            {/* <!-- Damage --> */}
            <div className="flex justify-center items-center grow space-x-2 bg-gray-600 rounded-sm p-2">
              <div className="text-gray-300">Damage</div>
              <div className="text-white font-bold bg-gray-800 px-2 rounded-lg">
                {(data.data.segments[0].stats.damage &&
                  data.data.segments[0].stats.damage.value) ||
                  0}
              </div>
            </div>

            {/* <!-- Mathces Played --> */}
            <div className="relative flex justify-center items-center grow space-x-2 bg-gray-600 rounded-sm p-2">
              <div className="text-gray-300">Matches played</div>
              <div className="absolute text-green-500 -bottom-0.5 left-0 text-xs">
                Current season
              </div>
              <div className="text-white font-bold bg-gray-800 px-2 rounded-lg">
                {(data.data.segments[0].stats.matchesPlayed &&
                  data.data.segments[0].stats.matchesPlayed.value) ||
                  0}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );

  return <>{renderStatsBody}</>;
};

export default Stats;
