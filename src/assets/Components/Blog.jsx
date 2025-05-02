import React from "react";

// Import your images here
import Blog1Img from "../Pictures/dtf.jpg";
import Blog2Img from "../Pictures/heatpress and sublimation.jpg";
import Blog3Img from "../Pictures/engraving.jpg";

const blogs = [
  {
    id: 1,
    img: Blog1Img,
    title: "How to Use Mug Press Machines? 3 Steps to Follow",
    description:
      "Using mug press machines can be a straightforward process when you follow these three simple…",
  },
  {
    id: 2,
    img: Blog2Img,
    title: "Guide to Start Your Print OnDemand Business by Vision Media",
    description:
      "Introduction Embarking on the journey of starting your own Print On-Demand business is an exciting…",
  },
  {
    id: 3,
    img: Blog3Img,
    title: "How to keep customers buying your products?",
    description: "How to keep customers buying your products?",
  },
];

function Blog() {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <h1 className="text-5xl font-bold text-center mb-8">
          Guide From Our{" "}
          <span className="text-red-500 underline decoration-red-500">
            Blog
          </span>
        </h1>
        {/* Subtext */}
        <p className="text-lg text-center text-gray-500 mb-12">
          Learn Everything! About Sublimation Products Business.
        </p>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 h-full flex flex-col"
            >
              {/* Blog Image and Tags */}
              <div className="relative h-56">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-full "
                />
                {/* Category Tag */}
                <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-sm text-sm font-semibold">
                  {blog.category}
                </div>
                {/* Date Tag */}
                <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-sm text-center">
                  <span className="block font-bold text-xl leading-tight">
                    16
                  </span>
                  <span className="block text-xs">Oct</span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="flex flex-col justify-between bg-gradient-to-b from-red-500 to-yellow-500 p-6 text-white flex-grow">
                <h2 className="text-4xl p-4 font-bold mb-0">{blog.title}</h2>
                <p className="text-2xl px-3 mb-4 leading-normal">
                  {blog.description}
                </p>
                <a
                  href={blog.link}
                  className="inline-block bg-red-600 text-white px-5 py-2 text-lg font-semibold rounded hover:bg-red-800 w-36"
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
