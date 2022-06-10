import React, { useRef } from "react";
import images from "./images";

const Slider = () => {
  const slider = useRef(0);

  const handleClick = () => {
    slider.current.style.cursor = "grabing";
    const x = window.innerWidth;
    slider.current.scrollLeft += x;
    console.log("Clicked");
  };

  return (
    <div ref={slider} className="overflow-hidden scroll-smooth flex">
      <div className="inline-flex gap-3" onClick={handleClick}>
        {images.map((item, index) => (
          <div className="w-[100vw] flex justify-center" key={index}>
            <img src={item.url} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
