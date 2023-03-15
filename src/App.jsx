import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="laptop:grid bg-black text-white laptop:m-8 laptop:border laptop:rounded-3xl laptop:border-primary">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
