"use client";

import React, { useEffect, useState } from "react";
import PrimaryCircle from "../atoms/PrimaryCircle";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
const ImageSlider = () => {
  //State untuk menampilkan Slide
  const [currentSlide, setCurrentSlide] = useState(0);

  //Membuat Slide
  const carouselItems = [
    {
      imgSrc: "/images/patung_kuda.webp",
    },
    {
      imgSrc: "/images/Slider1.webp",
    },
    {
      imgSrc: "/images/Slider2.webp",
    },
    {
      imgSrc: "/images/Slider3.webp",
    },
  ];

  //Fungsi untuk menampilkan Slide selanjutnya
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
  };

  //Fungsi untuk menampilkan Slide sebelumnya
  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + carouselItems.length) % carouselItems.length
    );
  };

  //Fungsi untuk menampilkan Slide secara otomatis
  useEffect(() => {
    const intervalId = setInterval(handleNextSlide, 7000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="relative h-screen w-screen overflow-hidden">
      {/* Membuat Slide untuk Background */}
      <section className="flex">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`w-full h-full absolute ${
              index === currentSlide ? "" : "hidden"
            }`}
          >
            <img
              src={item.imgSrc}
              alt={`Slide ${index}`}
              className=" w-full h-full object-cover"
            />
            <div
              className="absolute h-screen w-screen top-0 left-0 "
              style={{
                background:
                  "linear-gradient(178deg, #801517 -11%, rgba(18, 16, 16, 0.00) 80%)",
              }}
            ></div>
          </div>
        ))}
      </section>

      {/* Teks dan Slide */}
      <section className="absolute gap-6 flex flex-col xl:flex-row  justify-center items-center top-1/3 sm:top-32 md:top-28 lg:top-36 xl:top-1/3 px-7 md:px-14">
        {/* Teks untuk menampilkan Judul dan Deskripsi */}
        <section className="flex flex-col gap-5 xl:gap-10 ">
          <h1 className=" flex flex-col text-heading-m font-bold text-white lg:text-heading-xl md:text-heading-l ">
            <span className=" text-heading-m md:text-heading-l lg:text-heading-xl">
              Selamat Datang di
            </span>
            Fort Rotterdam
          </h1>
          <p className=" text-justify text-white text-text-l">
            Tempat dimana sejarah menyambut setiap langkah Anda. Disini, Anda
            akan merasakan euforia masa lalu yang hidup dan mendalam, menggali
            rahasia zaman yang kami lestarikan dengan bangga. Mari bersama-sama
            menelusuri jejak-jejak bangsa. Merenung di bawah teduhnya warisan
            budaya, dan memahami bagaimana Fort Rotterdam tetap mendalam dalam
            ingatan kami.
          </p>
        </section>
        <section className="hidden sm:flex sm:flex-row md:flex xl:flex-col gap-3">
          {/*Thumbnail Untuk Slide */}
          <section className="flex gap-5">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className={` w-40 h-56 lg:w-44 lg:h-60 flex-shrink-0 relative transition-transform transform ${
                  index === currentSlide
                    ? " w-0 opacity-0 hidden translate-x-40 duration-1000 ease-linear"
                    : ""
                }`}
              >
                <img
                  src={item.imgSrc}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </section>
          {/*Button untuk Menghandle Slide */}
          <section className="flex flex-col xl:flex-row gap-3 ">
            <PrimaryCircle
              onClick={handlePrevSlide}
              className="w-10 h-10 transition duration-500 bg-primary-maroon hover:bg-white cursor-pointer  "
            >
              <IoIosArrowBack className="text-white hover:text-black w-10 h-10 p-2 " />
            </PrimaryCircle>
            <PrimaryCircle
              onClick={handleNextSlide}
              className="w-10 h-10 transition duration-500 bg-primary-maroon hover:bg-white cursor-pointer"
            >
              <IoIosArrowForward className="text-white hover:text-black w-10 h-10 p-2  " />
            </PrimaryCircle>
          </section>
        </section>
      </section>
    </main>
  );
};

export default ImageSlider;
