import React, { useEffect } from "react";

const GoogleReviews = () => {
  useEffect(() => {
    // Dynamically load the Elfsight platform script
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script to avoid duplicates
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="elfsight-app-096fe63c-909b-4baa-b51e-ee802d665795 p-10"
      data-elfsight-app-lazy
    ></div>
  );
};

export default GoogleReviews;
