"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import dataSpot from "./mock";

const Spot = () => {
  const [indexBigSpot, setIndexBigSpot] = useState(0);
  const [spot, setSpot] = useState(dataSpot);
  useEffect(() => {
    let currentIndexBigSpot = indexBigSpot;
    const maxIndex = spot.length - 1;
    const interval = setInterval(() => {
      currentIndexBigSpot++;
      if(currentIndexBigSpot > maxIndex) {
        currentIndexBigSpot = 0
      }
      setIndexBigSpot(currentIndexBigSpot);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* Header */}
      <section className="relative">
        <div className="absolute pl-">
          <Image
            src={"/images/spotHeader.webp"}
            alt="Header"
            width={1920}
            height={56}
            className="h-64 lg:h-96"
          />
        </div>
        <div
          className="absolute bg-black opacity-60
            w-full h-64
            lg:h-96"
        ></div>

        <p
          className="relative text-white text-center font-bold text-2xl 
            pt-24
            lg:pt-44 lg:text-5xl uppercase"
        >
          spot menarik fort rotterdam
        </p>
        <p
          className="relative text-center text-zinc-100 tracking-widest
          text-[9px]
          lg:text-[15px]"
        >
          "Benteng bukan hanya sebuah struktur batu, melainkan saksi
          <br />
          bisu dari zaman yang telah berlalu."
        </p>
      </section>
      <section className="relative md:flex rounded-full">
        <section className="px-8 ">
          <section className="pt-40" id="gambarUtama ">
            <section className="relative group">
              <div className="relative">
                <Image
                  src={spot[indexBigSpot].imgPath}
                  alt={spot[indexBigSpot].imgAlt}
                  width={600}
                  height={600}
                  className="rounded-lg"
                />
                <div className="absolute pt-40 inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
            </section>
            <p className="flex text-xl tracking-widest font-bold items-center justify-center pt-2">
              {spot[indexBigSpot].title}
            </p>
          </section>
        </section>
        <section className="md:pt-40 pt-10 grid grid-cols-2 gap-4 p-5">
          {spot.map((v, i) => {
            if (i == indexBigSpot) {
              return;
            }
            return (
              <section
                onClick={() => {
                  setIndexBigSpot(i);
                }}
              >
                <section>
                  <div className="relative group">
                    <Image
                      src={v.imgPath}
                      width={281}
                      height={281}
                      alt={v.imgAlt}
                      className="col-span-1 rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                </section>
                <p
                  className="flex text-xs lg:text-base tracking-widest items-center justify-center
                  pt-2"
                >
                  {v.title}
                </p>
              </section>
            );
          })}
        </section>
      </section>
      <section className="w-full h-[200px] bg-white"></section>
    </main>
  );
};
export default Spot;
