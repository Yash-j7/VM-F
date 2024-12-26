import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/VISION MEDIA RAW LOGO 1.png";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="top flex justify-between items-center p-3 text-[14px] md:text-[18px] font-serif bg-black text-white">
        <div>📞 +91 8100280400</div>
        <div>📩 sales@visionmediaonline.in</div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:opacity-80">
            FB
          </a>
          <a href="#" className="hover:opacity-80">
            Twitter
          </a>
          <a href="#" className="hover:opacity-80">
            LinkedIn
          </a>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bottom flex justify-between items-center font-serif text-[14px] md:text-[18px] relative mr-5 p-4">
        {/* Brand Section */}
        <div className="brand ">
          <img src={logo} alt="Brand Logo" className="h-10 w-auto" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-6 h-6 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white border-t border-gray-200 md:bg-transparent md:static md:flex md:items-center md:space-x-6 z-20`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:ml-10 md:space-x-4 p-4 md:p-0">
            <li className="hover:text-red-600 cursor-pointer"><Link to='/'>Home</Link></li>
            <li className="hover:text-red-600 cursor-pointer"><Link to='/about-us'>About Us</Link></li>
            <li className="relative group">
              <summary className="cursor-pointer hover:text-red-600">
                Machine
              </summary>
              <ul className="hidden group-hover:flex flex-col md:absolute bg-white border rounded-md shadow-md p-2 space-y-2 w-32">
                <li className="hover:text-red-600 cursor-pointer">1</li>
                <li className="hover:text-red-600 cursor-pointer">2</li>
                <li className="hover:text-red-600 cursor-pointer">3</li>
                <li className="hover:text-red-600 cursor-pointer">4</li>
                <li className="hover:text-red-600 cursor-pointer">5</li>
              </ul>
            </li>
            <li className="hover:text-red-600 cursor-pointer">DTF</li>
            <li className="hover:text-red-600 cursor-pointer">Raw Material</li>
            <li className="hover:text-red-600 cursor-pointer">Plotters</li>
            <li className="hover:text-red-600 cursor-pointer">Spare Parts</li>
            <li className="hover:text-red-600 cursor-pointer">Blogs</li>
            <li className="hover:text-red-600 cursor-pointer">Our Story</li>
            <li className="hover:text-red-600 cursor-pointer">Contact Us</li>
          </ul>
        </nav>

        {/* Call-to-Action Button */}
        <div className="hidden md:block">
          <button className="bg-red-600 hover:bg-red-700 p-3 rounded-md text-[15px] text-white">
            Get Quote Now
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
