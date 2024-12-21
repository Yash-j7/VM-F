<<<<<<< HEAD
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
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import HeroSection from "./assets/Components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import PlottersDesc from "./components/PlottersDesc.jsx";
import Sliders from "./assets/Components/Sliders.jsx";
import Slider2 from "./assets/Components/Slider2.jsx";
import Slider3 from "./assets/Components/Slider3.jsx";
import Blog from "./assets/Components/Blog.jsx";
import Footer from "./assets/Components/Footer.jsx";
import AboutUs from "./assets/Components/About.jsx";
>>>>>>> 65283dad9948c381cd796568298627e409145a7d

function App() {
  return (
<<<<<<< HEAD
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
=======
    <BrowserRouter>
      {/* Persistent Header */}
      <Header />

      <div className="content">
        <Routes>
          {/* Define Routes */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Stats />
                <PlottersDesc />
                <Sliders />
                <Slider2 />
                <Slider3 />
                <Blog />
              </>
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>

      {/* Persistent Footer */}
      <Footer />
    </BrowserRouter>
>>>>>>> 65283dad9948c381cd796568298627e409145a7d
  );
}

export default App;
