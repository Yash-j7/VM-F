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
