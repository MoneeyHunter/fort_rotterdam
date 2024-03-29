"use client";

import Box from "../molecules/Box";
import Image from "next/image";
import Circle from "../atoms/PrimaryCircle";
import { useEffect } from "react";

const SubHero = () => {
  return (
    <main className="flex flex-col gap-5 md:gap-24 lg:gap-36 w-screen">
      <section className="md:flex flex-col gap-5 md:gap-16 px-7 md:px-14 ">
        {/* Header */}
        <section
          className="text-primary-maroon text-center font-bold text-heading-l pt-14  
          lg:text-heading-xl
          md:text-5xl"
        >
          <p className="uppercase text-heading-m md:text-heading-l lg:text-heading-xl">
            informasi umum
          </p>
        </section>

        <section className="flex  gap-10 justify-center flex-wrap items-center scale-75 md:scale-100">
          <div data-aos="fade-up" data-aos-duration="4000">
            <Box>
              <div
                className="absolute 
                top-[9%] left-[6%]"
              >
                <Circle className="w-16 h-16 bg-secondary-teal">
                  <Image
                    src="./icons/vectorGreen.svg"
                    width={35}
                    height={35}
                    alt="green"
                  />
                </Circle>
              </div>
              <section className="flex">
                <p
                  className="absolute text-lg text-black font-medium
                  top-[17%] left-[25%]
                  lg:left-[27%] lg:top-[17%]"
                >
                  Sejarah yang Kelam
                </p>
                <p
                  className="absolute w-[290px] text-base text-justify
                  top-[40%] left-[20%]
                  lg:top-[40%] lg:left-[20%]"
                >
                  Fort Rotterdam adalah peninggalan sejarah yang hidup, mencakup
                  lebih dari tiga abad peristiwa penting yang membentuk Makassar
                  dan Indonesia.
                </p>
              </section>
            </Box>
          </div>

          <div data-aos="fade-up" data-aos-duration="4000">
            <Box>
              <div
                className="absolute 
              top-[9%] left-[6%]"
              >
                <Circle className="w-16 h-16 bg-primary-maroon">
                  <Image
                    src="./icons/vectorMaroon.svg"
                    width={35}
                    height={35}
                    alt="maroon"
                  />
                </Circle>
              </div>
              <section className="flex">
                <p
                  className="absolute text-lg text-black font-medium
                top-[17%] left-[25%]
                lg:left-[27%] lg:top-[17%]"
                >
                  Koleksi Seni dan Budaya
                </p>
                <p
                  className="absolute w-[290px] text-base text-justify
                top-[40%] left-[20%]"
                >
                  Dari seni lokal hingga artefak bersejarah, fort ini menyimpan
                  kekayaan seni dan budaya yang menginspirasi dan memukau
                  pengunjung.
                </p>
              </section>
            </Box>
          </div>

          <div data-aos="fade-up" data-aos-duration="4000">
            <Box>
              <div
                className="absolute 
                top-[9%] left-[6%]"
              >
                <Circle className="w-16 h-16 bg-cyan-900">
                  <Image
                    src="./icons/vectorBlue.svg"
                    width={45}
                    height={45}
                    alt="blue"
                  />
                </Circle>
              </div>
              <section className="flex">
                <p
                  className="absolute text-lg text-black font-medium
              top-[17%] left-[25%]
              lg:left-[27%] lg:top-[17%]"
                >
                  Pengalaman Wisata Edukatif
                </p>
                <p
                  className="absolute w-[290px] text-base text-justify
              top-[40%] left-[20%]"
                >
                  Fort Rotterdam menawarkan pengalaman wisata yang mendidik dan
                  mampu membuat pengunjung merasakan masa lalu secara langsung.
                </p>
              </section>
            </Box>
          </div>
        </section>
      </section>

      <section className="relative w-full h-[250px] md:h-[400px] lg:h-[500px] bg-primary-maroon font-bold text-white flex justify-center items-center uppecercase">
        <section data-aos="fade-up" data-aos-duration="4000" className="flex">
          <p className="text-6xl translate-x-0  lg:text-9xl">“</p>
          <p className="lg:text-heading-xl pt-8 md:text-heading-l text-l  uppercase -translate-y-2">
            sejarah mengungkapkan masa lalu,
            <br />
            memberitahu masa kini,
            <br />
            dan mempersiapkan masa depan
          </p>
        </section>
      </section>
    </main>
  );
};
export default SubHero;
