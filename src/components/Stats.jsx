import React from "react";
import AnimatedCounter from "./AnimatedCounter.jsx";

function Stats() {
  return (
    <div className="flex mt-5 justify-evenly">
      <div>
        <AnimatedCounter end={10} />
        <h1 className="md:text-2xl text-red-600 font-serif  font-bold">
          Happy Clients
        </h1>
      </div>
      <div>
        <AnimatedCounter end={100} />
        <h1 className="md:text-2xl text-red-600 font-serif font-bold">
          Orders delivered
        </h1>
      </div>
      <div>
        <AnimatedCounter end={1} />
        <h1 className="md:text-2xl ml-3 text-red-600 font-serif font-bold">
          Products
        </h1>
      </div>
    </div>
  );
}

export default Stats;
