import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

import Footer from "./assets/Components/Footer.jsx";
import AboutUs from "./assets/Components/About.jsx";
import Blog from "./assets/Components/Blog.jsx"; // Add this only if used in the alternate route

function App() {
  return (
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
      <RawMaterialsDesc />
      <Slider3 />
      <PlottersDesc />
      <Sliders />
      <MachineDesc />
      <Slider2 />
      <GoogleReviews />
      
    </>
  }
/>

      <Route
        path="/alternate" // Optional: Add another route if needed
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

  );
}

export default App;
