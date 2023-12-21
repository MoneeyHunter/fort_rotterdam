"use client";

import Spot from "./Spot";
import Navbar from "src/app/_components/organisms/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SpotPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <main>
      <Spot />
      <Navbar />
    </main>
  );
};
export default SpotPage;
