import Box from "../molecules/Box";
import Image from "next/image";
import Circle from "../atoms/PrimaryCircle";


const SubHero = () => {
  return(
    <main className="flex flex-col">
      {/* membuat header KURANG PADDING*/}
      <section className="text-primary-orange text-center font-bold text-heading-l  lg:text-heading-xl"> 
        <h1>
          LOREM IPSUM
        </h1>
      </section>

      {/* membuat 3 kotak inforamasi */}
      <section className="flex gap-5 justify-center flex-wrap items-center container">
        {/* Box Pertama */}
          <Box className="relative flex">
            <section>
              <div className="absolute 
                top-[9.5%] left-[13%]
                lg:top-[72px] lg:left-[2%]
                ">
                <Circle bgColor="bg-secondary-teal">
                  <Image src="./icons/vectorGreen.svg" width={50} height={50} 
                    alt="green"/>
                </Circle> 
              </div>  
            </section>
            <section className="flex">
              <div className="absolute text-lg text-black font-medium
                top-[13%] left-[28%]
                lg:left-[9%] lg:top-[99px]
                ">
                Sejarah Yang Memukau
              </div>
              <div className="absolute w-[290px] text-base text-justify
                top-[21%] left-[25%]
                lg:top-[24%] lg:left-[8%]">
                Fort Rotterdam adalah peninggalan 
                sejarah yang hidup, mencakup lebih 
                dari tiga abad peristiwa penting 
                yang membentuk Makassar dan 
                Indonesia.
              </div>
            </section>
          </Box>

        {/* Box Kedua */}
          <Box className="relative flex">
            <section>
              <div className="absolute 
              top-[49%] left-[13%]
              lg:top-[72px] lg:left-[35.5%]">
                <Circle bgColor="bg-secondary-maroon">
                  <Image src="./icons/vectorMaroon.svg" width={60} height={60}
                    alt="maroon"/>
                </Circle> 
              </div>
            </section>
            <section className="flex">
              <div className="absolute text-lg text-black font-medium
                left-[28%] top-[52.5%]
                lg:left-[42.5%] lg:top-[99px]">
                Koleksi Seni dan Budaya
              </div>
              <div className="absolute w-[290px] text-base text-justify
                left-[25%] top-[60.5%]
                lg:top-[24%] lg:left-[41.2%]">
                Dari seni lokal hingga artefak 
                bersejarah, fort ini menyimpan 
                kekayaan seni dan budaya yang 
                menginspirasi dan memukau 
                pengunjung.
              </div>
            </section>
          </Box>
        
        {/* Box Ketiga */}
          <Box className="relative flex">
            <section>
              <div className="absolute 
                left-[13%] top-[88.5%]
                lg:top-[72px] lg:left-[68.8%]">
                <Circle bgColor="bg-secondary-navy">
                  <Image src="./icons/vectorBlue.svg" width={60} height={60}
                    alt="blue"/>
                </Circle>
              </div>
            </section>
            <section className="flex">
              <div className="absolute text-lg text-black font-medium
              left-[28%] top-[92.5%]
              lg:left-[76%] lg:top-[99px]">
                Pengalaman Wisata Edukatif
              </div>
              <div className="absolute w-[290px] text-base text-justify
              left-[25%] top-[100%]
              lg:top-[24%] lg:left-[74.5%]">
                Fort Rotterdam menawarkan 
                pengalaman wisata mendidik dan 
                mengasyikkan yang mampu 
                membuat pengunjung merasakan 
                masa lalu secara langsung.
              </div>
            </section>
          </Box>
        </section>

      {/* Gap */}
      <section className="w-full h-[100px] bg-white lg:h-[170px]">
      </section>

      {/* membuat kotak orange */}
      <section className="relative w-full h-[250px] md:h-[400px] lg:h-[500px] bg-primary-orange gap-3"> 
        <div>
          <div className="absolute text-6xl top-20 left-[7%] text-white font-bold 
            lg:left-[10%] lg:top-28 lg:text-9xl
            md:text-8xl md:top-32 md:left-[15%]">“</div>
          <div className="absolute text-xl top-24 left-[17%] text-white font-bold leading-tight
            lg:text-5xl lg:top-44 lg:left-[17%] lg:leading-tight
            md:text-3xl md:top-40 md:left-[23%] md:leading-tight">
          SEJARAH MENGUNGKAPKAN MASA LALU,<br/> 
          MEMBERITAHU MASA KINI,<br/>
          & MEMPERSIAPKAN MASA DEPAN
          </div>
        </div>
      </section>
    </main>
  )
};
export default SubHero;