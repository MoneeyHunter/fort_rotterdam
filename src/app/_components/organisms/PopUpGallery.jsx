"use client";

import { useState } from "react";
import Image from "next/image";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const PopUpGallery = ({ src, title, desc, onClose }) => {
  const [isClosed, setIsClosed] = useState(false);

  //Untuk menutup PopUp
  const handleClose = () => {
    setIsClosed(true);
    onClose();
  };

  if (isClosed) {
    return null;
  }

  return (
    <main className="fixed inset-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center overflow-y-auto">
      <CloseRoundedIcon
        className="absolute top-10 right-5 md:top-15 md:right-20 lg:top-20 lg:right-32 text-white cursor-pointer hover:text-primary-maroon"
        style={{ width: "2rem", height: "2rem" }}
        onClick={handleClose}
      />
      <section className="w-screen h-screen flex flex-col justify-center items-center">
        <section className="flex flex-col lg:flex-row justify-center items-center px-16 lg:px-28 gap-8">
          <section className=" lg:h-[480px] lg:w-[430px] h-[250px] w-[200px] flex-shrink-0 relative transition-transform transform">
            <Image
              fill
              priority
              style={{
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "10px",
              }}
              src={src}
              alt={title}
            />
          </section>
          <section className="text-white flex flex-col gap-5">
            <h1 className="font-bold xl:text-heading-l lg:text-heading-m  md:text-heading-s text-text-l uppercase">
              {title}
            </h1>
            <p className="text-justify">{desc}</p>
          </section>
        </section>
      </section>
    </main>
  );
};

export default PopUpGallery;
