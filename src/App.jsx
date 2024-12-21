import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeroSection from "./assets/Components/Hero.jsx";
import Header from "./components/Header.jsx";
import Products from "./assets/Components/Products.jsx";
import Sliders from "./assets/Components/Sliders.jsx";
import Slider2 from "./assets/Components/Slider2.jsx";
import Slider3 from "./assets/Components/Slider3.jsx";
import Stats from "./components/Stats.jsx";
import PlottersDesc from "./components/PlottersDesc.jsx";
import MachineDesc from "./components/MachineDesc.jsx";
import RawMaterialsDesc from "./components/RawMaterialsDesc";
import GoogleReviews from "./components/GoogleReviews.jsx";
import NewsLetter from "./components/NewsLetter.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <HeroSection />
      <Stats />
      <PlottersDesc />
      <Sliders />
      <MachineDesc />
      <Slider2 />
      <RawMaterialsDesc />
      <Slider3 />
      <GoogleReviews />
      <NewsLetter />
    </div>
  );
}

export default App;
