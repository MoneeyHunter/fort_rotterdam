"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import iconLang from "../../../../public/icons/lang.svg";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const NavbarItems = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleNavItemClick = (idx) => {
    setIsActive(idx);
    setIsOpen(false);
  };

  const links = [
    { text: "Beranda", href: "/" },
    { text: "Sejarah", href: "/" },
    { text: "Galeri", href: "/" },
    { text: "Spot Interaktif", href: "/" },
    {
      text: "Informasi Tempat",
      href: "/",
      sublinks: [
        { text: "Tips Tour", href: "/" },
        { text: "Jam buka", href: "/" },
        { text: "Tiket masuk", href: "/" },
        { text: "Lokasi", href: "/" },
      ],
    },
  ];

  const NavElements = links.map((link, idx) => (
    <li key={idx}>
      {link.sublinks ? (
        <section className="relative group">
          <Link
            href={link.href}
            className="flex px-8 py-5 font-bold text-white text-text-l justify-center items-center relative transition duration-300 transform group-hover:scale-110"
          >
            {link.text}
            <KeyboardArrowDownRoundedIcon
              className="ml-1 mr-8 transform transition-transform duration-300 justify-center items-center group-hover:rotate-180 "
              style={{ width: "2rem", height: "2rem" }}
            />
            <Image src={iconLang} width={20} height={20} alt="Icon Bahasa" />
          </Link>

          <ul className="absolute hidden bg-white text-black group-hover:block left-10">
            {link.sublinks.map((sublink, subIdx) => (
              <li key={subIdx}>
                <Link
                  href={sublink.href}
                  className="block px-8 py-3 text-text-l bg-white transition duration-300 transform "
                >
                  {sublink.text}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <Link
          href={link.href}
          className="flex px-8 py-5 font-bold text-white text-text-l transition duration-300 transform hover:scale-110"
        >
          {link.text}
        </Link>
      )}
    </li>
  ));

  return (
    <ul className="flex items-center justify-center gap-4 px-4 py-2">
      <button
        className="flex h-5 flex-col justify-between px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
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
      {isOpen ? (
        <nav className="absolute right-0 top-full h-screen w-screen bg-white p-10 lg:static lg:mt-0 lg:h-auto lg:w-auto lg:p-0">
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