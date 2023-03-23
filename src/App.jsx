import React from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <div className="laptop:grid laptop:w-auto laptop:bg-black laptop:max-h-screen text-white laptop:m-8 laptop:border-2 laptop:rounded-3xl laptop:border-primary ">
        <Header />
        <Hero />
      </div>
      <AboutMe />
    </>
  );
}

export default App;