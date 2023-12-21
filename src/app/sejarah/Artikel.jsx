"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import BoxImage from "src/app/_components/molecules/BoxImage";
import { useEffect } from "react";
import Footer from "src/app/_components/molecules/Footer"

import ReactHtmlParser from "react-html-parser";
import ArtikelSejarah from "./mocks/konten";
const Artikel = () => {
  return (
    <main className="relative">
      {/* Header */}
      <section>
        <div className="absolute">
          <Image
            src={"/images/sejarah.webp"}
            alt="fotoSejarah"
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
        <div data-aos="fade-up">
          <p
            className="relative text-white text-center font-bold text-2xl 
              pt-24
              lg:pt-44 lg:text-5xl"
          >
            SEJARAH FORT ROTTERDAM
          </p>
          <br />
          <p
            className="relative text-center text-zinc-100 tracking-widest
            text-[9px]
            lg:text-base"
          >
            "Benteng bukan hanya sebuah struktur batu, melainkan saksi
            <br />
            bisu dari zaman yang telah berlalu."
          </p>
        </div>
      </section>

      {/* Artikel */}
      <section className="flex relative items-center justify-center">
        <section className="lg:py-44 lg:px-24 py-44 px-0 max-lg:px-8 text-justify tracking-widest">
          {ReactHtmlParser(ArtikelSejarah)}
        </section>
        <section className="max-lg:hidden">
          <section className="pr-5 relative">
            <BoxImage className="flex absolute left-60 -z-10">
              <div className="absolute left-16 top-16" data-aos="fade-up">
                <Image
                  src="/images/artikelEmpatt.webp"
                  width={500}
                  height={100}
                  className="rounded-lg shadow-lg"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  alt="foto1"
                />
              </div>
            </BoxImage>
            <BoxImage className="-z-10">
              <div className="absolute left-16 top-16" data-aos="fade-up">
                <Image
                  src="/images/artikelDuaa.webp"
                  width={500}
                  height={100}
                  className="rounded-lg shadow-lg"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  alt="fotoDua"
                />
              </div>
            </BoxImage>
            <BoxImage className="-z-10">
              <div className="absolute left-16 top-16" data-aos="fade-up">
                <Image
                  src="/images/artikelTigaa.webp"
                  width={500}
                  height={100}
                  className="rounded-lg shadow-lg"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  alt="foto3"
                />
              </div>
            </BoxImage>
            <BoxImage className="-z-10">
              <div className="absolute left-16 top-16" data-aos="fade-up">
                <Image
                  src="/images/artikelSatuu.webp"
                  width={500}
                  height={100}
                  className="rounded-lg shadow-lg"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  alt="foto4"
                />
              </div>
            </BoxImage>
          </section>
        </section>
      </section>
      <Footer/>
    </main>
  );
};
export default Artikel;
