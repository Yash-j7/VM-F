import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeroSection from './assets/Components/Hero.jsx'
import Header from './components/Header.jsx'
import Products from './assets/Components/Products.jsx'
import Sliders from "./assets/Components/Sliders.jsx";
import Slider2 from "./assets/Components/Slider2.jsx";
import Slider3 from "./assets/Components/Slider3.jsx";import Stats from "./components/Stats.jsx";
import PlottersDesc from "./components/PlottersDesc.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
        <Header />
        <HeroSection />
      <Stats />
      <PlottersDesc />
        <Sliders/ >
        <Slider2 />
        <Slider3 />
      </div>
    
  );
}

export default App;
