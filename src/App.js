import React from "react";
import HeroSection from './Components/Hero'
import Vision from "./Components/Vision";
import ParallaxGarden from "./Components/ParallaxGarden"
import "./App.css";
import TestTransition from "./Components/CatalystSection";
// import Features from "./Components/Features";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <TestTransition />
      <Vision />
      {/* <Features /> */}
      <ParallaxGarden />
    </div>
  );
}

export default App;
