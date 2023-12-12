import Box from "../molecules/Box";
import Image from "next/image";

const SubHero = () => {
  return(
    <main className="flex flex-col">
      {/* membuat header */}
      <section className="text-primary-orange text-center font-bold text-heading-l mb-14 mt-9 lg:text-heading-xl">
        <h1>
          LOREM IPSUM
        </h1>
      </section>

      {/* membuat 3 kotak inforamasi */}
      <section className="flex gap-5 justify-center flex-wrap items-center">
        {/* Box Pertama */}
        <Box></Box>
          <div className="flex">
              <Image
                src={"/images/circleGreen.webp"}
                alt="Circle Green"
                width={75}
                height={75}
                className="absolute left-[15%] top-40
                lg:left-[6%] lg:top-44
                md:left-[14%]"
              />
          </div>
        <Box></Box>
          <div className="flex">
              <Image
                src={"/images/circleMaroon.webp"}
                alt="Circle Green"
                width={75}
                height={75}
                className="absolute left-[15%] top-[68%]
                lg:left-[37%] lg:top-44
                md:top-40 md:left-[53%]"
              />
          </div>
        <Box></Box>
          <div className="flex">
              <Image
                src={"/images/circleBlue.webp"}
                alt="Circle Green"
                width={75}
                height={75}
                className="absolute left-[15%] top-[110%]
                lg:left-[68%] lg:top-44
                md:top-[68%] md:left-[33%]"
              />
          </div>
      </section>

      {/* Gap */}
      <section className="w-full h-[100px] bg-white lg:h-[170px]">
      </section>

      {/* membuat kotak orange */}
      <section className="relative w-full h-[250px] md:h-[400px] lg:h-[500px] bg-primary-orange gap-3"> 
        <div>
          <div className="absolute text-6xl top-20 left-[7%] text-white font-bold 
            lg:left-[13%] lg:top-28 lg:text-9xl
            md:text-8xl md:top-32 md:left-[15%]">“</div>
          <div className="absolute text-xl top-24 left-[17%] text-white font-bold leading-tight
            lg:text-5xl lg:top-44 lg:left-[21%] lg:leading-tight
            md:text-3xl md:top-40 md:left-[23%] md:leading-tight">
          LOREM IPSUM DOLOR<br/> 
          SIT AMET CONSECTETUR ADIPSCING<br/>
          ELIT SED DO ELUSMOD TEMPOR
          </div>
        </div>
      </section>
    </main>
  )
};

export default SubHero;