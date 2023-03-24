import React from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projets from "./components/Projets/Projets";

function App() {
  return (
    <>
      <div className="text-white laptop:grid laptop:w-auto laptop:bg-black laptop:max-h-screen  laptop:m-8 laptop:border-2 laptop:rounded-3xl laptop:border-primary ">
        <Header />
        <Hero />
      </div>
      <AboutMe />
      <Projets />
    </>
  );
}

export default App;