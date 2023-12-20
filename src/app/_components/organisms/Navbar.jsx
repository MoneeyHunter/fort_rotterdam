"use client";

import React, { useState, useEffect } from "react";
import Logo from "../atoms/Logo";
import NavbarItems from "../molecules/NavbarItems";

//Membuat Komponen Navbar
const Navbar = ({showBackground = true}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  //Fungsi untuk menampilkan Navbar ketika di Scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 px-4 py-2 flex justify-between items-center transition-all ${
        isScrolled && showBackground || showBackground===false ? "z-50 bg-primary-maroon" : "shadow-none"
      } shadow-md`}
    >
      <Logo />
      <NavbarItems />
    </nav>
  );
};

export default Navbar;