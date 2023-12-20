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
    <main className="fixed inset-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center">
      <CloseRoundedIcon
        className="absolute top-20 right-32 text-white cursor-pointer hover:text-primary-maroon"
        style={{ width: "2rem", height: "2rem" }}
        onClick={handleClose}
      />
      <section className="flex justify-center items-center gap-10">
        <section className=" h-[480px] w-[430px] flex-shrink-0 relative transition-transform transform">
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
        <section className="w-[480px] text-white flex flex-col gap-5">
          <h1 className="font-bold text-heading-l uppercase">{title}</h1>
          <p className="text-justify">{desc}</p>
        </section>
      </section>
    </main>
  );
};

export default PopUpGallery;
