import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeroSection from "./assets/Components/Hero/Hero.jsx";
import Header from "./components/Header.jsx";
import Stats from "./components/Stats.jsx";
import PlottersDesc from "./components/PlottersDesc.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HeroSection />
      <Stats />
      <PlottersDesc />
    </>
  );
}

export default App;
