import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/VISION MEDIA RAW LOGO 1.png";
import { useAuth } from "../context/auth";
import useCategory from "./../hooks/useCategory";
import SearchForm from "./../pages/form/SearchForm";
import { useCart } from "../context/CartContext";

function buildCategoryTree(categories, parent = null) {
  return categories
    .filter((cat) => String(cat.parent) === String(parent))
    .map((cat) => ({
      ...cat,
      children: buildCategoryTree(categories, cat._id),
    }));
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [auth, setAuth] = useAuth();
  const [hoveredCat, setHoveredCat] = useState(null);
  const [hoveredSub, setHoveredSub] = useState(null);
  const categories = useCategory();
  const { cart, setCart } = useCart();

  const topLevel = buildCategoryTree(categories);

  // Limit categories for mobile - show only first 4
  const mobileCategories = topLevel.slice(0, 4);

  // Track which submenus are open at each level
  const [openSubMenus, setOpenSubMenus] = useState({});

  // Helper to handle submenu open/close robustly
  const handleSubMenuEnter = (id, level) => {
    setOpenSubMenus((prev) => ({ ...prev, [level]: id }));
  };
  const handleSubMenuLeave = (level) => {
    setOpenSubMenus((prev) => {
      const updated = { ...prev };
      delete updated[level];
      return updated;
    });
  };

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logged out successfully");
  };

  const renderSubMenu = (children, level = 1) => {
    if (!children || children.length === 0) return null;
    return (
      <ul
        className={`absolute left-full top-0 bg-white border border-gray-200 rounded-md shadow-lg min-w-[200px] z-[1000] transition-all duration-200 ${
          level > 2 ? "ml-0" : ""
        }`}
        onMouseEnter={() => handleSubMenuEnter(openSubMenus[level - 1], level)}
        onMouseLeave={() => handleSubMenuLeave(level)}
      >
        {children.map((sub) => (
          <li
            key={sub._id}
            className="relative group hover:bg-gray-50"
            onMouseEnter={() => handleSubMenuEnter(sub._id, level)}
            onMouseLeave={() => handleSubMenuLeave(level + 1)}
          >
            <div className="flex items-center justify-between">
              <Link
                to={`/category/${sub.slug}`}
                className="block px-4 py-2 text-gray-800 hover:text-red-600 flex-grow"
              >
                {sub.name}
              </Link>
              {sub.children && sub.children.length > 0 && (
                <span className="text-gray-400 ml-2 mr-2">▶</span>
              )}
            </div>
            {sub.children &&
              sub.children.length > 0 &&
              openSubMenus[level] === sub._id &&
              renderSubMenu(sub.children, level + 1)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header>
      {/* Top Bar */}
      <div className="top flex flex-col sm:flex-row justify-between items-center p-3 text-[12px] sm:text-[14px] md:text-[18px] font-serif bg-black text-white gap-2 sm:gap-0">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <div>📞 +91 8100280400</div>
          <div>📩 sales@visionmediaonline.in</div>
        </div>
        {!auth.user ? (
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link
              to="/login"
              className="px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-md font-medium border text-white bg-red-700 rounded-md shadow hover:bg-white hover:text-red-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-md border font-medium text-white bg-red-700 rounded-md shadow hover:bg-white hover:text-red-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Register
            </Link>
          </div>
        ) : (
          <div className="flex text-sm sm:text-md md:text-lg items-center space-x-2 sm:space-x-4">
            <Link
              to=""
              className="px-2 sm:px-4 py-1 sm:py-2 font-medium text-white cursor-auto bg-red-700 rounded-md shadow hover:bg-white hover:text-red-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              <span>Hello</span> {auth.user.name}
            </Link>
            {auth?.user?.role === 1 && (
              <Link
                to="/dashboard/admin"
                className="px-2 sm:px-4 py-1 sm:py-2 border text-white bg-red-700 rounded-md shadow hover:bg-white hover:text-red-700 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Dashboard
              </Link>
            )}
            <Link
              onClick={handleLogout}
              to="/"
              className="px-2 sm:px-4 py-1 sm:py-2 font-medium text-white bg-red-700 rounded-md shadow hover:bg-white hover:text-red-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Logout
            </Link>
          </div>
        )}
      </div>

      {/* Navigation Bar */}
      <div className="bottom flex justify-between items-center font-serif text-[14px] md:text-[18px] relative p-4">
        {/* Brand Section */}
        <div className="brand">
          <img
            src={logo}
            alt="Brand Logo"
            className="h-[60px] sm:h-[75px] w-auto"
          />
        </div>

        {/* Mobile Search and Cart */}
        <div className="flex gap-3 items-center md:hidden">
          <div className="mb-2">
            <SearchForm />
          </div>
          {/* Call-to-Action Button */}
          <div className="relative">
            <Link to="/cart">
              <button className="bg-red-600 hover:bg-black hover:text-white p-2 rounded-md text-[16px] text-white">
                🛒
              </button>
              {cart?.length > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cart.length}
                </div>
              )}
            </Link>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden ml-2">
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
          } absolute top-full left-0 right-0 z-[2000] p-5 bg-white border border-gray-200 shadow-lg md:bg-transparent md:static md:flex md:items-center md:space-x-6 md:border-none md:shadow-none md:p-0`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <li className="hover:text-red-600 cursor-pointer">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            {/* Desktop: Show all categories, Mobile: Show limited categories */}
            <div className="md:contents">
              {(window.innerWidth >= 768 ? topLevel : mobileCategories).map(
                (cat) => (
                  <li
                    key={cat._id}
                    className="relative group"
                    onMouseEnter={() => handleSubMenuEnter(cat._id, 0)}
                    onMouseLeave={() => handleSubMenuLeave(0)}
                  >
                    <div className="flex items-center space-x-1">
                      <Link
                        to={`/category/${cat.slug}`}
                        className="hover:text-red-600"
                        onClick={() => setMenuOpen(false)}
                      >
                        {cat.name}
                      </Link>
                      {cat.children && cat.children.length > 0 && (
                        <span className="text-gray-400 text-sm">▼</span>
                      )}
                    </div>

                    {/* Enhanced Subcategories dropdown */}
                    {cat.children &&
                      cat.children.length > 0 &&
                      openSubMenus[0] === cat._id && (
                        <ul
                          className="absolute left-0 top-full bg-white border border-gray-200 rounded-md shadow-lg min-w-[200px] z-[1000] transition-all duration-200"
                          onMouseEnter={() => handleSubMenuEnter(cat._id, 0)}
                          onMouseLeave={() => handleSubMenuLeave(0)}
                        >
                          {cat.children.map((sub) => (
                            <li
                              key={sub._id}
                              className="relative group hover:bg-gray-50"
                              onMouseEnter={() =>
                                handleSubMenuEnter(sub._id, 1)
                              }
                              onMouseLeave={() => handleSubMenuLeave(1)}
                            >
                              <div className="flex items-center justify-between">
                                <Link
                                  to={`/category/${sub.slug}`}
                                  className="block px-4 py-2 text-gray-800 hover:text-red-600 flex-grow"
                                  onClick={() => setMenuOpen(false)}
                                >
                                  {sub.name}
                                </Link>
                                {sub.children && sub.children.length > 0 && (
                                  <span className="text-gray-400 ml-2 mr-2">
                                    ▶
                                  </span>
                                )}
                              </div>
                              {sub.children &&
                                sub.children.length > 0 &&
                                openSubMenus[1] === sub._id &&
                                renderSubMenu(sub.children, 2)}
                            </li>
                          ))}
                        </ul>
                      )}
                  </li>
                )
              )}
            </div>

            <li className="hover:text-red-600 cursor-pointer">
              <Link to="/category" onClick={() => setMenuOpen(false)}>
                All categories
              </Link>
            </li>
            <li className="hover:text-red-600 cursor-pointer">
              <Link to="/about-us" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li className="hover:text-red-600 cursor-pointer">
              <Link to="/blogs" onClick={() => setMenuOpen(false)}>
                Blogs
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Search and Cart */}
        <div className="hidden md:flex gap-10 mt-3">
          <div className="mb-2">
            <SearchForm />
          </div>
          {/* Call-to-Action Button */}
          <Link
            to="/cart"
            className="hidden md:block mb-1 hover:text-white relative"
          >
            <button className="bg-red-600 h-[60px] w-[60px] text-3xl hover:bg-black rounded-md">
              🛒
            </button>
            {cart?.length > 0 && (
              <div className="absolute -top-1 -right-1 bg-red-500 text-white text-sm rounded-full h-6 w-6 flex items-center justify-center font-bold">
                {cart.length}
              </div>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;

// Add these styles to your CSS file
const styles = `
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.nav-dropdown {
  transition: all 0.3s ease-in-out;
}

.nav-dropdown:hover {
  transform: translateY(2px);
}

/* Mobile menu improvements */
@media (max-width: 768px) {
  .mobile-nav {
    max-height: 70vh;
    overflow-y: auto;
  }
}
`;
