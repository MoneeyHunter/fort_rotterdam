import Image from "next/image";

import LogoFortRotterdam from "../../../../public/icons/fort_rotterdam.svg";

const Logo = () => {
  return (
    <main className="flex items-center gap-3  ">
      <Image
        src={LogoFortRotterdam}
        width={90}
        height={90}
        alt="Logo Gerbang Fort Rotterdam"
      />
      <h1 className="text-heading-s font-bold text-white">
        Fort <br />
        Rotterdam
      </h1>
    </main>
  );
};
export default Logo;
