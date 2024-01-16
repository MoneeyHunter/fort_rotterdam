"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import Circle from "../atoms/PrimaryCircle";
import Button from "../atoms/PrimaryButton";

const footer = () => {
  //Link Navigation Bar

  const links = [
    { text: "Beranda", href: "/" },
    { text: "Sejarah", href: "/sejarah" },
    { text: "Galeri", href: "/galeri" },
    { text: "Spot menarik", href: "/spot" },
    { text: "Informasi tempat", href: "/infotempat" },
  ];

  //State untuk menyimpan inputan email dan pesan
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  //Fungsi untuk menyimpan inputan email
  const handleEmailChange = (event) => {
    //menyimpan inputan email
    const inputEmail = event.target.value;
    setEmail(inputEmail);

    //validasi email menggunakan regex
    const emailRegex =
      /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/;
    setEmailError(emailRegex.test(inputEmail) ? "" : "Email tidak valid");
  };

  //Fungsi untuk mengirimkan email
  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailError) {
      alert(emailError);
      return;
    }
    setEmail("");
  };

  return (
    <>
      <section className="relative w-screen py-20 flex-col flex mx-auto  ">
        <section
          className="absolute top-0 h-full w-screen left-0 -z-10"
          style={{
            background:
              "linear-gradient(0deg, #FFC9CA -11%, rgba(18, 16, 16, 0.00) 80%)",
          }}
        ></section>
        <section className="grid min-[768px]:grid-cols-2 min-[1360px]:grid-cols-4 gap-6 md:gap-10 px-7 md:px-14">
          <section className="gap-5 flex flex-col justify-center">
            <Image
              src="./icons/fort_footer.svg"
              width={200}
              height={200}
              alt="Logo Fort Rotterdam"
              className="md:w-[250px]"
            />
            <p className="text-text-s md:text-text-m font-light">
              Jl. Ujung Pandang, Bulo Gading, Kec. Ujung Pandang, Kota Makassar,
              Sulawesi Selatan 90171
            </p>
          </section>

          <section className="flex flex-col gap-2 justify-center">
            {links.map((link, index) => (
              <li
                key={index}
                className="flex flex-col list-none text-text-m md:text-text-l  hover:text-primary-maroon transition duration-500 cursor-pointer"
              >
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </section>
          <section className="flex flex-col gap-5  ">
            <section className="flex flex-col gap-2 ">
              <p className="font-semibold text-text-m md:text-text-l">
                Terhubung dengan kami
              </p>
              <div className="flex flex-row text-white gap-2 ">
                <a
                  href="https://www.instagram.com/fortrotterdam/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Circle className="w-8 h-8 p-1.5 bg-primary-maroon transform hover:scale-110 transition duration-300">
                    <AiFillInstagram className="w-8 h-8" />
                  </Circle>
                </a>
                <a
                  href="https://twitter.com/FortRotterdaM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Circle className="w-8 h-8 p-1.5 bg-primary-maroon hover:scale-110 transform transition duration-300 ">
                    <FaXTwitter className="w-8 h-8" />
                  </Circle>
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Circle className="w-8 h-8 p-1.5 bg-primary-maroon hover:scale-110 transform transition duration-300 ">
                    <FaFacebookF className="w-5 h-5" />
                  </Circle>
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Circle className="w-8 h-8 p-1.5 bg-primary-maroon transform hover:scale-110 transition duration-300">
                    <FaYoutube className="w-8 h-8" />
                  </Circle>
                </a>
              </div>
            </section>

            <section className="flex flex-col gap-2">
              <p className="font-semibold text-text-m md:text-text-l">Kontak</p>
              <div className="flex flex-col text-white gap-2">
                <a
                  href={"https://wa.me/6282187389101"}
                  className="flex items-center"
                >
                  <Circle className="w-8 h-8 p-1.5 bg-primary-maroon transform hover:scale-110 transition duration-300">
                    <IoCall className="w-8 h-8 " />
                  </Circle>
                  <span className="text-text-s text-black px-2  hover:text-primary-maroon">
                    +6282187389101
                  </span>
                </a>
                <a
                  href={"mailto:uptmuseumdantamanbudaya@sulselprov.go.id"}
                  className="flex items-center"
                >
                  <Circle className="w-8 h-8 p-1.5 bg-primary-maroon hover:scale-110 transition duration-300 ">
                    <MdEmail className="w-8 h-8" />
                  </Circle>
                  <span className="text-text-s text-black px-2 leading-relaxed hover:text-primary-maroon ">
                    fortrotterdam@gmail.com
                  </span>
                </a>
              </div>
            </section>
          </section>
          <section className="flex flex-col gap-2 ">
            <label className="font-semibold text-text-m md:text-text-l">
              Berlangganan
            </label>
            <div className="flex gap-2">
              <div className="flex flex-col">
                <input
                  type="email"
                  id="email"
                  htmlFor="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="nama@gmail.com"
                  className={`rounded-lg border w-[220px] p-3 h-8 focus:outline-none text-text-s focus:border-secondary-teal ${
                    emailError ? "border-red-500" : ""
                  } `}
                />
                {/* Email Error Message */}
                {emailError && (
                  <p className="text-red-500 text-[12px]">{emailError}</p>
                )}
              </div>
              {/* Submit Button */}
              <Button
                type="submit"
                width="true"
                onClick={handleSubmit}
                className=" bg-primary-maroon text-text-s h-8
              "
              >
                Kirim
              </Button>
            </div>
          </section>
        </section>
        <span className="px-7 text-text-s absolute bottom-4 md:px-14">
          © Fort Rotterdam. Hak Cipta Dilindungi Undang-Undang.
        </span>
      </section>
    </>
  );
};
export default footer;
