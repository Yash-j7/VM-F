import React from 'react';
import plt from '../Pictures/products/plotter.webp';
function Products() {
  return (
    <div className="bg-gray-100 py-8">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Products</h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={plt}
              alt="Product 1"
              className="w-full h-56 object-cover"
            />
          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/300x300?text=Product+2"
              alt="Product 2"
              className="w-full h-56 object-cover"
            />
          </div>

          {/* Product 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/300x300?text=Product+3"
              alt="Product 3"
              className="w-full h-56 object-cover"
            />
          </div>

          {/* Product 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/300x300?text=Product+4"
              alt="Product 4"
              className="w-full h-56 object-cover"
            />
          </div>

          {/* Product 5 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/300x300?text=Product+5"
              alt="Product 5"
              className="w-full h-56 object-cover"
            />
          </div>

          {/* Product 6 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/300x300?text=Product+6"
              alt="Product 6"
              className="w-full h-56 object-cover"
            />
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-8">
          <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition duration-300">
            See More Here
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
