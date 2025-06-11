import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/VISION MEDIA RAW LOGO 1.png";
import { useAuth } from "../context/auth";
import useCategory from "./../hooks/useCategory";
import SearchForm from "./../pages/form/SearchForm";
import { useCart } from "../context/CartContext";

function buildCategoryTree(categories, parent = null) {
  return categories
    .filter(cat => String(cat.parent) === String(parent))
    .map(cat => ({
      ...cat,
      children: buildCategoryTree(categories, cat._id)
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
        className={`absolute left-full top-0 bg-white border border-gray-200 rounded-md shadow-lg min-w-[200px] z-[1000] transition-all duration-200 ${level > 2 ? 'ml-0' : ''}`}
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
              <Link to={`/category/${sub.slug}`} className="block px-4 py-2 text-gray-800 hover:text-red-600 flex-grow">
                {sub.name}
              </Link>
              {sub.children && sub.children.length > 0 && (
                <span className="text-gray-400 ml-2 mr-2">▶</span>
              )}
            </div>
            {sub.children && sub.children.length > 0 && openSubMenus[level] === sub._id && renderSubMenu(sub.children, level + 1)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header>
      {/* Top Bar */}
      <div className="top flex justify-between items-center p-3 text-[14px] md:text-[18px] font-serif bg-black text-white">
        <div>📞 +91 8100280400</div>
        <div>📩 sales@visionmediaonline.in</div>
        {!auth.user ? (
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 text-md font-medium border text-white bg-red-700 rounded-md shadow hover:bg-white hover:text-red-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 text-md border font-medium text-white bg-red-700 rounded-md shadow hover:bg-white hover:text-red-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Register
            </Link>
          </div>
        ) : (
          <div className="flex md:text-lg text-md items-center space-x-4">
            <Link
              to=""
              className="px-4 py-2  font-medium text-white cursor-auto bg-red-700 rounded-md shadow hover:bg-white hover:text-red-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              <span>Hello</span> {auth.user.name}
            </Link>
            {auth?.user?.role === 1 && (
              <Link
                to="/dashboard/admin"
                className="px-4 py-2  border text-white bg-red-700 rounded-md shadow hover:bg-white hover:text-red-700 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Dashboard
              </Link>
            )}
            <Link
              onClick={handleLogout}
              to="/"
              className="px-4 py-2  font-medium text-white bg-red-700 rounded-md shadow hover:bg-white hover:text-red-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Logout
            </Link>
          </div>
        )}
      </div>

      {/* Navigation Bar */}
      <div className="bottom flex justify-between items-center font-serif text-[14px] md:text-[18px] relative p-4">
        {/* Brand Section */}
        <div className="brand ">
          <img src={logo} alt="Brand Logo" className="h-[75px] w-auto" />
        </div>
        <div className="flex gap-10 mt-3 md:hidden">
          <div className="mb-2">
            <SearchForm />
          </div>
          {/* Call-to-Action Button */}
          <div className="md:hidden block">
            <button className="bg-red-600 hover:bg-black hover:text-white p-2 rounded-md text-[20px] text-white">
              🛒
            </button>

            <div className="absolute bottom-[52px] hover:text-white right-[64px] text-xl text-white font-serif font-bold">
              {cart?.length}
            </div>
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
          className={`${menuOpen ? "block" : "hidden"} absolute top-16 z-[2000px] p-5 md:text-xl left-[50%] bg-white border-gray-200 md:bg-transparent md:static md:flex md:items-center md:space-x-6`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <li className="hover:text-red-600 cursor-pointer">
              <Link to="/">Home</Link>
            </li>

            {/* Show only first 3 categories */}
            {topLevel.slice(0, 3).map((cat) => (
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
                  >
                    {cat.name}
                  </Link>
                  {cat.children && cat.children.length > 0 && (
                    <span className="text-gray-400 text-sm">▼</span>
                  )}
                </div>

                {/* Enhanced Subcategories dropdown */}
                {cat.children && cat.children.length > 0 && openSubMenus[0] === cat._id && (
                  <ul
                    className="absolute left-0 top-full bg-white border border-gray-200 rounded-md shadow-lg min-w-[200px] z-[1000] transition-all duration-200"
                    onMouseEnter={() => handleSubMenuEnter(cat._id, 0)}
                    onMouseLeave={() => handleSubMenuLeave(0)}
                  >
                    {cat.children.map((sub) => (
                      <li
                        key={sub._id}
                        className="relative group hover:bg-gray-50"
                        onMouseEnter={() => handleSubMenuEnter(sub._id, 1)}
                        onMouseLeave={() => handleSubMenuLeave(1)}
                      >
                        <div className="flex items-center justify-between">
                          <Link to={`/category/${sub.slug}`} className="block px-4 py-2 text-gray-800 hover:text-red-600 flex-grow">
                            {sub.name}
                          </Link>
                          {sub.children && sub.children.length > 0 && (
                            <span className="text-gray-400 ml-2 mr-2">▶</span>
                          )}
                        </div>
                        {sub.children && sub.children.length > 0 && openSubMenus[1] === sub._id && renderSubMenu(sub.children, 2)}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <li className="hover:text-red-600 cursor-pointer">
              <Link to="/category">All categories</Link>
            </li>
            <li className="hover:text-red-600 cursor-pointer">
              <Link to="/about-us">About Us</Link>
            </li>
            <li className="hover:text-red-600 cursor-pointer">
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </nav>

        <div className="hidden  md:flex gap-10 mt-3">
          <div className="mb-2">
            <SearchForm />
          </div>
          {/* Call-to-Action Button */}
          <Link to="/cart" className="hidden md:block mb-1 hover:text-white">
            <button className="bg-red-600 h-[60px] w-[60px] text-3xl hover:bg-black rounded-md">
              🛒
            </button>
            <div className="absolute bottom-[55px] right-[37px] text-2xl font-serif text-white font-bold">
              {cart?.length > 0 && cart.length}
            </div>
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
`;
