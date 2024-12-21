import React from "react";
import Machine from "../assets/Pictures/plotter_files/heat-press-printer.png";
// C:\Users\yashj\OneDrive\Desktop\vision-media\src\assets\Pictures\plotter_files\heat-press-printer.png
function MachineDesc() {
  return (
    <div className="md:flex bg-rose-700 p-5 mt-[100px]">
      <div className="flex w-[50%] mt-3 ml-24">
        <img className="h-[100px] w-[100px]" src={Machine} alt="" />
        <h1 className="text-5xl font-bold text-white mt-8 ml-4">Machines</h1>
      </div>
      <div className=" md:w-[50%] text-white text-sm">
        <h1>
          In today’s fast-paced world, where visual communication plays a
          pivotal role, businesses and individuals constantly seek innovative
          ways to stand out from the crowd. Vision Media, a leading technology
          company, has taken a leap forward in the printing industry by
          introducing its revolutionary customized printing machine. Our
          customized heat press machine empowers users to unleash their
          creativity, deliver stunning visuals, and leave a lasting impression.
        </h1>
      </div>
    </div>
  );
}

export default MachineDesc;
