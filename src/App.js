import React from "react";

import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import Legends from "./components/legends/Legends";
import Weapons from "./components/weapons/Weapons";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Legends />
      <Weapons />
      <Footer />
    </>
  );
};

export default App;
