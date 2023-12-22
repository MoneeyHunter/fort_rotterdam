"use client";
import Informasi from "./InfoTempat";
import Navbar from "../_components/organisms/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function InfoTempat() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <main className="overflow-hidden">
      <Informasi />
      <Navbar />
    </main>
  );
}
