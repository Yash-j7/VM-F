import React from "react";
import plotters from "../assets/Pictures/plotter-1.png";

function PlottersDesc() {
  return (
    <div className="md:flex bg-rose-700 p-5 mt-[100px]">
      <div className="flex flex-col items-center sm:flex-row sm:items-start w-full md:w-[50%] mt-3 md:ml-24">
        <img className="h-[100px] w-[100px]" src={plotters} alt="" />
        <h1 className="text-5xl font-bold text-white mt-3 sm:mt-0 sm:ml-4">Plotters</h1>
      </div>
      <div className="md:w-[50%] text-white text-sm mt-5 md:mt-0">
        <h1>
          The Skycut Optical Cutting Plotter is a powerful tool that combines
          the functions of a high-precision cutter and an optical registration
          system. This unique integration allows for unparalleled accuracy and
          speed in the production of various materials, including vinyl, paper,
          cardboard, and more. Whether you’re working on intricate designs or
          large-scale projects, this cutting plotter is designed to handle it
          all with ease.
        </h1>
      </div>
    </div>
  );
}

export default PlottersDesc;
