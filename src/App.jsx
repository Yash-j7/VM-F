import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeroSection from "./assets/Components/Hero.jsx";
import Header from "./components/Header.jsx";
import Sliders from "./assets/Components/Sliders.jsx";
import Slider2 from "./assets/Components/Slider2.jsx";
import Slider3 from "./assets/Components/Slider3.jsx";
import Stats from "./components/Stats.jsx";
import PlottersDesc from "./components/PlottersDesc.jsx";
import MachineDesc from "./components/MachineDesc.jsx";
import RawMaterialsDesc from "./components/RawMaterialsDesc";
import GoogleReviews from "./components/GoogleReviews.jsx";
import Newsletter from "./components/NewsLetter.jsx";
import Footer from "./assets/Components/Footer.jsx";
import AboutUs from "./assets/Components/About.jsx";
import Blog from "./assets/Components/Blog.jsx"; // Add this only if used in the alternate route
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import AdminRoute from "./Routes/AdminRoute";
import CreateProduct from "./pages/Admin/CreateProduct";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import Products from "./pages/Admin/Products";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import Search from "./pages/Search.jsx";
import DetailedProduct from "./pages/DetailedProduct";
import Cart from "./pages/Cart";
import ForgotPasssword from "./pages/Auth/ForgotPassword.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

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
                <Newsletter />
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
          <Route path="/product/:slug" element={<DetailedProduct />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/category" element={<Categories />} />
          <Route path="/category/:slug" element={<CategoryProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<AdminRoute />}>
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="admin/create-category" element={<CreateCategory />} />
            <Route path="admin/create-product" element={<CreateProduct />} />
            <Route
              path="admin/update-product/:slug"
              element={<UpdateProduct />}
            />
            <Route path="admin/products" element={<Products />} />
          </Route>
          <Route path="/forgotPassword" element={<ForgotPasssword />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>

      {/* Persistent Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
