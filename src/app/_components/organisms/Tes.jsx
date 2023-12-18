"use client";

import React, { useEffect, useState } from 'react';

import Slider1 from "../../../../public/images/Slider1.jpg"

const Tes= () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    {
      imgSrc: "../../../../public/images/Slider1.jpg", 
    },
    { 
        imgSrc: "../../../../public/images/Slider2.jpg",
    },
    {
        imgSrc: "../../../../public/images/Slider3.jpg",
    }
    // Add more items as needed
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + carouselItems.length) % carouselItems.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(handleNextSlide, 7000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="flex">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`w-full h-full absolute ${index === currentSlide ? '' : 'hidden'}`}
          >
            <img src={item.imgSrc} alt={`Slide ${index}`} className="w-full h-full object-cover" />
            <div className="absolute top-1/5 w-4/5 left-1/2 transform -translate-x-1/2 pr-30 box-border text-white text-shadow">
              <div className="font-bold tracking-widest">Author</div>
              <div className="text-5xl font-bold leading-[1.3em]">Title</div>
              <div className="text-orange">Topic</div>
              <div className="grid grid-cols-2 grid-rows-1 gap-5 mt-5">
                <button className="border-none bg-gray-300 font-semibold">Button 1</button>
                <button className="bg-transparent border border-white text-white">Button 2</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-5">
        {carouselItems.map((item, index) => (
          <div key={index} className="w-32 h-44 flex-shrink-0 relative">
            <img src={item.imgSrc} alt={`Thumbnail ${index}`} className="w-full h-full object-cover rounded-lg" />
            <div className="text-white absolute bottom-2 left-2 right-2">
              <div className="font-semibold">Name Slider</div>
              <div className="font-light">Description</div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-4 right-44 z-10 w-48 max-w-[30%] flex gap-2 items-center">
        <button onClick={handlePrevSlide} className="w-10 h-10 rounded-full bg-gray-300 border-none text-white font-mono font-bold transition duration-500 hover:bg-white hover:text-black">
          &lt;
        </button>
        <button onClick={handleNextSlide} className="w-10 h-10 rounded-full bg-gray-300 border-none text-white font-mono font-bold transition duration-500 hover:bg-white hover:text-black">
          &gt;
        </button>
      </div>

      <div className="absolute z-1000 w-0 h-3 bg-orange left-0 top-0"></div>
    </div>
  );
};

export default Tes;
