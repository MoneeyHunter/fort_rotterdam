"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const NavbarItems = () => {
  //State untuk menampilkan Navbar di Mobile
  const [isOpen, setIsOpen] = useState(false);

  //Fungsi untuk menutup Navbar di Mobile ketika di Resize
  useEffect(() => {
    const closeNavigation = () => {
      setIsOpen(false);
    };
    window.addEventListener("resize", closeNavigation);
    return () => {
      window.removeEventListener("resize", closeNavigation);
    };
  }, []);

  //Fungsi untuk menutup Navbar di Mobile
  const handleNavItemClick = () => {
    setIsOpen(false);
  };

  //Link yang ada di Navbar
  const links = [
    { text: "Beranda", href: "/" },
    { text: "Sejarah", href: "/sejarah" },
    { text: "Galeri", href: "/galeri" },
    { text: "Spot Menarik", href: "/spot" },
    {
      text: "Informasi Tempat",
      href: "/infotempat",
      sublinks: [
        { text: "Tips wisata", href: "/infotempat#tipswisata" },
        { text: "Jam buka", href: "/infotempat#waktukunjungan" },
        { text: "Tiket masuk", href: "/infotempat#tiketmasuk" },
        { text: "Lokasi", href: "/infotempat#lokasi" },
      ],
    },
  ];

  // Membuat Link yang ada di Navbar
  const NavElements = links.map((link, idx) => (
    // Link Informasi Tempat yang memiliki Sublink
    <li key={idx}>
      {link.sublinks ? (
        <section className="relative group">
          <Link
            href={link.href}
            className={`flex font-bold text-text-l relative transition duration-300 transform ${
              isOpen
                ? "text-primary-maroon px-20 py-3 hover:bg-primary-maroon hover:bg-opacity-20 lg:border-none"
                : "py-3 pl-8 text-white hover:scale-110 "
            }`}
          >
            {link.text}
            <KeyboardArrowDownRoundedIcon
              className="ml-1 transform transition-transform duration-300 justify-center items-center group-hover:rotate-180 "
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
          </Link>

          {/* Sublink yang ada di Link Informasi Tempat */}
          <ul
            className={`absolute bg-white text-primary-maroon group-hover:block left-7 ${
              isOpen ? " px-12 w-screen hidden " : "hidden"
            }`}
          >
            {link.sublinks.map((sublink, subIdx) => (
              <li key={subIdx}>
                <Link
                  href={sublink.href}
                  className="block px-10 py-3 text-text-m font-bold bg-white transition duration-300 transform hover:bg-primary-maroon hover:bg-opacity-20 hover:border-primary-maroon hover:border-l-4"
                  onClick={() => handleNavItemClick(subIdx)}
                >
                  {sublink.text}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        //Link yang tidak memiliki Sublink yaitu Beranda, Sejarah, Galeri, dan Spot Menarik
        <Link
          href={link.href}
          className={`flex font-bold text-text-l transition duration-300 transform lg:border-none ${
            isOpen
              ? "text-primary-maroon py-6 px-20 hover:bg-primary-maroon hover:bg-opacity-20"
              : "py-3 text-white px-8 hover:scale-110 "
          }`}
          onClick={() => handleNavItemClick(idx)}
        >
          {link.text}
        </Link>
      )}
    </li>
  ));

  return (
    <ul className="flex items-center justify-center gap-4 py-2">
      {/* Button untuk menampilkan Navbar di Mobile */}
      <button
        className="flex h-5 flex-col justify-between lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Hamburger Menu */}
        <span
          className={`ease block h-[3px] w-[30px] origin-top-left rounded-lg bg-white transition duration-300 ${
            isOpen
              ? " origin-top-left -translate-x-px -translate-y-0 rotate-45 transition duration-500 ease-in-out"
              : ""
          } `}
        ></span>
        <span
          className={`ease block h-[3px] w-[30px] rounded-lg bg-white transition duration-300 ${
            isOpen ? "scale-0 transition duration-500 ease-in-out" : ""
          } `}
        ></span>
        <span
          className={`ease block h-[3px] w-[30px] origin-bottom-left rounded-lg bg-white transition duration-300 ${
            isOpen
              ? " origin-bottom-left -translate-x-px translate-y-1 -rotate-45 transition duration-500 ease-in-out"
              : ""
          } `}
        ></span>
      </button>

      {/* Kondisi ketika Navbar di Mobile */}
      {isOpen ? (
        <nav className="absolute right-0 top-full h-screen bg-white w-screen xl:static lg:mt-0 xl:h-auto xl:w-auto xl:p-0">
          <ul className="block lg:flex ">{NavElements}</ul>
        </nav>
      ) : (
        <nav className="hidden lg:block">
          <ul className="flex">{NavElements}</ul>
        </nav>
      )}
    </ul>
  );
};
export default NavbarItems;
