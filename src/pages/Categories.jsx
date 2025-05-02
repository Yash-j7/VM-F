import React, { useState } from "react";
import { Link } from "react-router-dom";
import useCategory from "./../hooks/useCategory";

function buildCategoryTree(categories, parent = null) {
  return categories
    .filter(cat => String(cat.parent) === String(parent))
    .map(cat => ({
      ...cat,
      children: buildCategoryTree(categories, cat._id)
    }));
}

function Categories() {
  const categories = useCategory();
  const [expanded, setExpanded] = useState(null);
  const topLevel = buildCategoryTree(categories);

  const handleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const renderSubcategories = (children, level = 1) => {
    if (!children || children.length === 0) return null;
    return (
      <div className={`ml-${level * 4} mt-2`}> {/* Indent for subcategories */}
        {children.map((sub) => (
          <div key={sub._id}>
            <div className="flex items-center cursor-pointer hover:text-blue-700" onClick={() => handleExpand(sub._id)}>
              <span className="mr-2">{sub.children && sub.children.length > 0 ? (expanded === sub._id ? "▼" : "►") : "•"}</span>
              <Link to={`/category/${sub.slug}`} className="text-base font-medium">
                {sub.name}
              </Link>
            </div>
            {expanded === sub._id && renderSubcategories(sub.children, level + 1)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-[80vh] bg-gray-50">
      <h1 className="text-center text-4xl font-bold mt-8 mb-6 text-gray-800">
        Shop by Category
      </h1>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {topLevel.map((cat) => (
          <div key={cat._id} className="mb-4 border-b pb-2">
            <div className="flex items-center cursor-pointer hover:text-blue-700" onClick={() => handleExpand(cat._id)}>
              <span className="mr-2 text-lg">{cat.children && cat.children.length > 0 ? (expanded === cat._id ? "▼" : "►") : "•"}</span>
              <Link to={`/category/${cat.slug}`} className="text-lg font-semibold text-gray-900 hover:text-blue-700">
                {cat.name}
              </Link>
            </div>
            {expanded === cat._id && renderSubcategories(cat.children)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
