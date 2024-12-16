import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeroSection from "./assets/Components/Hero.jsx";
import Products from "./assets/Components/Products.jsx";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HeroSection />
        <Products/>
      </div>
    
  );
}

export default App;
