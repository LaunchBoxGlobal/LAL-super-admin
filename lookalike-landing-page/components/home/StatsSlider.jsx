"use client";

import { useRef, useState } from "react";

const StatsSlider = ({ STATS }) => {
  const sliderRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    isDown.current = true;
    setIsDragging(true);
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseUp = () => {
    isDown.current = false;
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      className={`w-full relative z-20 flex items-start justify-start overflow-x-auto gap-4 py-10 select-none scrollbar-hide ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
    >
      {STATS.map((s, i) => (
        <div
          className="w-full min-w-[354px] flex-shrink-0 flex flex-col items-start justify-center gap-5 p-10 bg-transparent border-[4px] rounded-[32px] border-gray-500 custom-shadow"
          key={i}
        >
          <div className="bg-transparent custom-shadow border-2 border-white text-[10px] text-[#408EE8] px-2.5 py-1 font-medium rounded-full">
            DOPPELGÄNGER LORE
          </div>
          <div className="bg-transparent custom-shadow border-2 border-white text-[10px] text-[#408EE8] w-[56px] h-[56px] flex items-center justify-center font-medium rounded-xl" />
          <p className="text-[#000] text-[24px] font-semibold leading-none">
            The Doppelgänger Though
          </p>
          <p className="text-[17px] text-[#888888]">
            Your doppelgänger is living a different life. Same face energy.
            Different city. Different story.
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsSlider;
