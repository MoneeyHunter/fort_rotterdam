"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import ReactHtmlParser from "react-html-parser";

import BoxImage from "src/app/_components/molecules/BoxImage";
import Footer from "src/app/_components/molecules/Footer";

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
            className="relative text-white text-center font-bold text-heading-m md:text-heading-l
              pt-24
              lg:pt-44 lg:text-heading-xl"
          >
            SEJARAH FORT ROTTERDAM
          </p>
          <br />
          <p
            className="relative text-center text-zinc-100 tracking-widest
            text-[9px]
            lg:text-base top-[-20px]"
          >
            Sejarah merupakan jendela masa lalu & catatan kebijaksanaan
          </p>
        </div>
      </section>

      {/* Artikel */}
      <section className="flex relative items-center justify-center lg:pl-14 lg:pr-7 px-7">
        <section className="lg:py-44 lg:pr-16 py-32 text-justify tracking-widest">
          {ReactHtmlParser(ArtikelSejarah)}
        </section>
        <section className="max-lg:hidden">
          <section className="relative">
            <BoxImage className="flex absolute -z-10">
              <div
                className="absolute px-7 top-7"
              >
                <Image
                  src="/images/artikelEmpatt.webp"
                  width={350}
                  height={100}
                  className="rounded-lg "
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  alt="foto1"
                />
              </div>
            </BoxImage>

            <BoxImage className="-z-10">
              <div
                className="absolute px-7 top-16"
                data-aos="fade-up"
                data-aos-duration="4000"
              >
                <Image
                  src="/images/artikelDuaa.webp"
                  width={350}
                  height={100}
                  className="rounded-lg "
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  alt="fotoDua"
                />
              </div>
            </BoxImage>

            <BoxImage className="-z-10">
              <div
                className="absolute px-7 top-16"
                data-aos="fade-up"
                data-aos-duration="4000"
              >
                <Image
                  src="/images/artikelTigaa.webp"
                  width={350}
                  height={100}
                  className="rounded-lg "
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  alt="foto3"
                />
              </div>
            </BoxImage>

            <BoxImage className="-z-10">
              <div
                className="absolute px-7 top-16"
                data-aos="fade-up"
                data-aos-duration="4000"
              >
                <Image
                  src="/images/artikelSatuu.webp"
                  width={350}
                  height={100}
                  className="rounded-lg "
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  alt="foto4"
                />
              </div>
            </BoxImage>
          </section>
        </section>
      </section>
      <Footer />
    </main>
  );
};
export default Artikel;