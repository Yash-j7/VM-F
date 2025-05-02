import React, { useState } from "react";

function Slider({ images }) {
  console.log("imaage array", images);
  const [image, setImage] = useState(null);
  const sliderbtn = (dir) => {
    const len = images.length;
    if (dir === "left") {
      setImage((prevImage) => (prevImage - 1 + len) % len);
    } else {
      setImage((prevImage) => (prevImage + 1) % len);
    }
  };
  return (
    <div className="flex">
      <div className="relative">
        {image != null && (
          <div className="fixed inset-0 bg-black flex items-center justify-between p-5 z-1">
            {/* Left arrow */}
            <div className="cursor-pointer p-5">
              <img
                src="/arrow.png"
                className="w-20 h-10 md:h-[80px] md:w-32"
                onClick={() => sliderbtn("left")}
                alt="Previous"
              />
            </div>

            {/* Full-screen image */}
            <div className="flex-grow flex justify-center items-center md:p-10 md:m-10">
              <img
                src={images[image]}
                className="w-full h-full object-cover"
                alt="Full Screen"
              />
            </div>

            {/* Close button */}
            <div
              className="absolute top-0 right-5 text-white text-4xl cursor-pointer p-5"
              onClick={() => setImage(null)}
            >
              X
            </div>

            {/* Right arrow */}
            <div className="cursor-pointer p-5">
              <img
                src="/arrow.png"
                className="w-20 h-10 md:h-[80px] md:w-32 rotate-180"
                onClick={() => sliderbtn("right")}
                alt="Next"
              />
            </div>
          </div>
        )}
      </div>

      <div className="big w-[70%] cursor-pointer">
        <img
          src={images[0]}
          className="rounded-lg"
          alt=""
          srcSet=""
          onClick={() => setImage(0)}
        />
      </div>
      <div className="small  flex flex-col gap-2 ml-2  w-[30%]">
        {images.slice(1).map((img, i) => (
          <img
            className="rounded-md cursor-pointer h-[85px] w-[120px]"
            src={img}
            key={i}
            onClick={() => setImage(i + 1)}
            alt=""
            srcSet=""
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
