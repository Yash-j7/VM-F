import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  const categories = useCategory();
  const { cart } = useCart();

  const topLevel = buildCategoryTree(categories);

  // Show only first 4 categories
  const displayedCategories = topLevel.slice(0, 4);

  const [openSubMenus, setOpenSubMenus] = useState({});

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
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="top flex flex-col sm:flex-row justify-between items-center px-4 py-3 text-sm sm:text-base bg-black text-white">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2">
            <span>📞</span>
            <span>+91 8100280400</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📩</span>
            <span>sales@visionmediaonline.in</span>
          </div>
        </div>
        {!auth.user ? (
          <div className="flex items-center gap-3 mt-2 sm:mt-0">
            <Link
              to="/login"
              className="px-4 py-2 border text-white bg-red-700 rounded-md hover:bg-white hover:text-red-700 transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 border text-white bg-red-700 rounded-md hover:bg-white hover:text-red-700 transition-colors duration-200"
            >
              Register
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-3 mt-2 sm:mt-0">
            <span className="px-4 py-2 text-white bg-red-700 rounded-md">
              Hello {auth.user.name}
            </span>
            <Link
              onClick={handleLogout}
              to="/"
              className="px-4 py-2 text-white bg-red-700 rounded-md hover:bg-white hover:text-red-700 transition-colors duration-200"
            >
              Logout
            </Link>
          </div>
        )}
      </div>

      {/* Navigation Bar */}
      <div className="bottom flex justify-between items-center px-4 py-4">
        {/* Brand Logo */}
        <div className="brand flex-shrink-0">
          <Link to="/">
            <img
              src={logo}
              alt="Brand Logo"
              className="h-[50px] sm:h-[60px] w-auto"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <SearchForm mobile />
          <div className="relative">
            <Link to="/cart">
              <button className="bg-red-600 p-2 rounded-md text-white hover:bg-red-700 transition-colors duration-200">
                🛒
              </button>
              {cart?.length > 0 && (
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </div>
              )}
            </Link>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
          >
            {menuOpen ? (
              <span className="text-2xl">×</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center md:text-xl">
          <Link
            to="/"
            className="hover:text-red-600 py-2 px-3 rounded-md transition-colors duration-200 hover:bg-gray-50"
          >
            Home
          </Link>

          {displayedCategories.map((cat) => (
            <div key={cat.slug} className="relative group">
              <Link
                to={`/category/${cat.slug}`}
                className="hover:text-red-600 flex items-center gap-1 py-2 px-3 rounded-md transition-colors duration-200 hover:bg-gray-50 whitespace-nowrap"
              >
                {cat.name}
                {cat.children?.length > 0 && (
                  <span className="text-xs ml-1 text-gray-500">▼</span>
                )}
              </Link>

              {cat.children?.length > 0 && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 min-w-[200px] bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50">
                  <div className="py-2">
                    {cat.children.map((child, index) => (
                      <Link
                        key={child.slug}
                        to={`/category/${child.slug}`}
                        className={`block px-4 py-2.5 hover:bg-gray-50 hover:text-red-600 transition-colors duration-150 ${
                          index !== cat.children.length - 1
                            ? "border-b border-gray-100"
                            : ""
                        }`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link
            to="/category"
            className="hover:text-red-600 py-2 px-3 rounded-md transition-colors duration-200 hover:bg-gray-50"
          >
            All Categories
          </Link>
          <Link
            to="/about-us"
            className="hover:text-red-600 py-2 px-3 rounded-md transition-colors duration-200 hover:bg-gray-50"
          >
            About Us
          </Link>
          <Link
            to="/blogs"
            className="hover:text-red-600 py-2 px-3 rounded-md transition-colors duration-200 hover:bg-gray-50"
          >
            Blogs
          </Link>
        </nav>

        {/* Desktop Search and Cart */}
        <div className="hidden md:flex items-center gap-4 flex-shrink-0">
          <SearchForm />
          <div className="relative">
            <Link to="/cart">
              <button className="bg-red-600 h-12 w-12 rounded-md text-white text-xl hover:bg-red-700 transition-colors duration-200">
                🛒
              </button>
              {cart?.length > 0 && (
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </div>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="p-4 flex flex-col gap-1 max-h-[70vh] overflow-y-auto">
            <Link
              to="/"
              className="py-3 px-2 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            {displayedCategories.map((cat) => (
              <div
                key={cat.slug}
                className="border-b border-gray-100 last:border-b-0"
              >
                <Link
                  to={`/category/${cat.slug}`}
                  className="py-3 px-2 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors duration-200 flex items-center justify-between"
                  onClick={() => setMenuOpen(false)}
                >
                  {cat.name}
                  {cat.children?.length > 0 && (
                    <span className="text-xs text-gray-500">▼</span>
                  )}
                </Link>

                {cat.children?.length > 0 && (
                  <div className="ml-4 pb-2">
                    {cat.children.map((child) => (
                      <Link
                        key={child.slug}
                        to={`/category/${child.slug}`}
                        className="block py-2 px-2 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors duration-200 text-sm text-gray-600"
                        onClick={() => setMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/category"
              className="py-3 px-2 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              All Categories
            </Link>
            <Link
              to="/about-us"
              className="py-3 px-2 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/blogs"
              className="py-3 px-2 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Blogs
            </Link>
          </div>
        </div>
      )}
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

/* Ensure proper spacing and prevent text wrapping */
@media (min-width: 768px) {
  .nav-item {
    white-space: nowrap;
  }
}

/* Mobile menu improvements */
@media (max-width: 768px) {
  .mobile-nav {
    max-height: 70vh;
    overflow-y: auto;
  }
}
`;
