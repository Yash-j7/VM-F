import React from "react";
import boxes from "../assets/Pictures/plotter_files/boxes.jpg";
// C:\Users\yashj\OneDrive\Desktop\vision-media\src\assets\Pictures\plotter_files\heat-press-printer.png
function RawMaterialsDesc() {
  return (
    <div className="md:flex bg-rose-700 p-5 mt-[100px]">
      <div className="flex flex-col items-center sm:flex-row sm:items-start w-full md:w-[50%] mt-3 md:ml-24">
        <img className="h-[100px] w-[100px]" src={boxes} alt="" />
        <h1 className="text-5xl font-bold text-white mt-3 sm:mt-0 sm:ml-4">
          DTF
        </h1>
      </div>
      <div className=" md:w-[50%] text-white text-sm mt-5 md:mt-0">
        <h1>
          We specialize in providing a wide range of materials that can be
          customized to create unique and personalized items. Whether you’re
          looking for sublimation mugs, coffee mugs, sipper bottles, t-shirts,
          stone frames, MDF frames, or cushions, we have the perfect options to
          meet your needs. At Vision Media, we strive to provide exceptional
          quality and customer satisfaction. All our materials undergo strict
          quality control measures to ensure that you receive products of the
          highest standard. Let your creativity shines with Vision Media.
        </h1>
      </div>
    </div>
  );
}

export default RawMaterialsDesc;
