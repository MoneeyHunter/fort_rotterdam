"use client"
import Image from "next/image";

import Navbar from "./_components/organisms/Navbar";

import Galeri from "./_components/organisms/Galeri";
import SubHero from "./_components/organisms/SubHero";
import ImageSlider from "./_components/organisms/ImageSlider";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <main>
      <ImageSlider />
      <section className="absolute z-20 top-0 left-0 w-full flex flex-col justify-between">
        <Navbar />
      </section>
      <SubHero />
      <Galeri />
    </main>
  );
}
