import React from "react";

import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import Legends from "./components/legends/Legends";
import Weapons from "./components/weapons/Weapons";
import Footer from "./components/footer/Footer";
import Stats from "./components/stats/Stats";

const App = () => {
  return (
    <>
      <Nav id="page-wrap" />
      <Hero />
      <Stats />
      <Legends />
      <Weapons />
      <Footer />
    </>
  );
};

export default App;
