"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Circle from "../atoms/PrimaryCircle";
import Button from "../atoms/PrimaryButton";
import Copyright from "../atoms/Copyright";

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
  const [message, setMessage] = useState("");
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

  //Fungsi untuk menyimpan inputan pesan
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  //Fungsi untuk mengirimkan email
  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailError) {
      alert(emailError);
      return;
    }
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <section className="relative w-screen px-7 py-20 flex-col flex mx-auto  lg:items-center lg:px-20 ">
        <section
          className="absolute top-0 h-full w-screen left-0 -z-10"
          style={{
            background:
              "linear-gradient(0deg, #FFC9CA -11%, rgba(18, 16, 16, 0.00) 80%)",
          }}
        ></section>
        <section className="flex flex-wrap gap-10 md:gap-20 lg:justify-evenly min-[1300px]:flex-nowrap  ">
          <Image
            src="./icons/fort_footer.svg"
            width={220}
            height={220}
            alt="Logo Fort Rotterdam"
            className="md:w-[300px]"
          />
          <section className="flex gap-8 md:gap-20  ">
            <section className="flex mx-auto gap-10 md:gap-16 ">
              <div className="flex flex-col gap-2 ">
                {links.map((link, index) => (
                  <li
                    key={index}
                    className="flex flex-col list-none text-text-m md:text-text-l font-medium hover:text-primary-maroon transition duration-500 cursor-pointer"
                  >
                    <Link href={link.href}>{link.text}</Link>
                  </li>
                ))}
              </div>
              <section className="flex flex-col gap-5 px-3 md:px-6 ">
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
                  </div>
                </section>

                <section className="flex flex-col gap-2 ">
                  <p className="font-semibold text-text-m md:text-text-l">
                    Kontak
                  </p>
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
                        uptmuseumdantamanbudaya@sulselprov.go.id
                      </span>
                    </a>
                  </div>
                </section>
              </section>
            </section>
            <p className="invisible min-[1200px]:visible border-l border-white absolute top-0 h-full right-[23%]"></p>
          </section>

          <form className="flex flex-grow flex-col relative gap-3 ">
            <p className="font-semibold text-left text-text-m md:text-text-l">
              Tinggalkan Pesan
            </p>
            <section className="flex flex-col items-start gap-2">
              {/* Email Input */}
              <input
                type="email"
                id="email"
                for="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="nama@gmail.com"
                className={`rounded-lg border w-full p-3 h-8 focus:outline-none text-text-s focus:border-secondary-teal ${
                  emailError ? "border-red-500" : ""
                } `}
              />
              {/* Email Error Message */}
              {emailError && (
                <p className="text-red-500 text-[12px]">{emailError}</p>
              )}

              {/* Message Textarea */}
              <textarea
                value={message}
                onChange={handleMessageChange}
                className={`rounded-lg w-full h-28 p-3 text-text-s border resize-none focus:outline-none focus:border-secondary-teal `}
                placeholder="Pesan..."
              ></textarea>

              {/* Submit Button */}
              <Button
                type="submit"
                width="true"
                onClick={handleSubmit}
                className=" bg-primary-maroon text-text-s self-end  
                "
              >
                Kirim
              </Button>
            </section>
          </form>
        </section>
        <Copyright />
      </section>
    </>
  );
};
export default footer;
