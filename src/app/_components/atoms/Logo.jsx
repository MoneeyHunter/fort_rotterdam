import Image from "next/image";

import LogoFortRotterdam from "../../../../public/icons/fort_rotterdam.svg";

//Membuat Komponen Logo untuk Header dan Footer
const Logo = () => {
  return (
    <main className="flex items-center gap-3  ">
      <Image
        src={LogoFortRotterdam}
        width={45}
        height={45}
        alt="Logo Gerbang Fort Rotterdam"
      />
      <h1 className="text-text-m font-bold text-white">
        FORT <br /> ROTTERDAM
      </h1>
    </main>
  );
};
export default Logo;
