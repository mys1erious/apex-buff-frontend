import { React, useEffect, useState } from "react";
import { ImStatsDots } from "react-icons/im";

const Stats = () => {
  let baseUrl = "https://apex-buff-development.herokuapp.com/api/v1";

  // const [username, setUsername] = useState(null);
  // const userField = usernameSearch;

  // console.log(userField);

  useEffect(() => {
    getTokens().then((_) => {
      getUserData();
    });
  }, []);

  const getUserData = async () => {
    const response = await fetch(
      baseUrl + "/users/profile/?platform=PC&username=k1llovat",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
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

  return (
    <>
      <section id="stats">
        <div className="container pt-24 mx-auto px-4 md:px-12">
          <div className="flex justify-center flex-col items-center space-x-2">
            <div className="flex justify-center items-center flex-row">
              <ImStatsDots className="text-2xl text-gray-200 mr-1" />
              <h2 className="text-3xl font-bold text-center py-2 text-gray-200">
                Stats
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
