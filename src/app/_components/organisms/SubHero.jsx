import Box from "../molecules/Box";
import Image from "next/image";
import Circle from "../atoms/PrimaryCircle";


const SubHero = () => {
  return(
    <main className="flex flex-col gap-48">
      <section className="">
        {/* Header */}
        <section className="text-primary-orange text-center font-bold text-heading-l pt-14  
          lg:text-heading-xl
          md:text-[45px]"> 
          <h1 className="uppercase">
          informasi umum
          </h1>
        </section>

        {/* Membuat 3 Box */}
        <section className="flex gap-5 justify-center flex-wrap items-center pt-16">
        {/* Box Pertama */}
          <Box>
            <div className="absolute 
              top-[5.5%] left-[4.5%]">
              <Circle bgColor="bg-secondary-teal">
                <Image src="./icons/vectorGreen.svg" width={50} height={50} 
                alt="green"/>
              </Circle> 
              </div>  
            <section className="flex">
              <p className="absolute text-lg text-black font-medium
                top-[17%] left-[25%]
                lg:left-[27%] lg:top-[17%]">
                Sejarah Yang Memukau
              </p>
              <p className="absolute w-[290px] text-base text-justify
                top-[40%] left-[20%]
                lg:top-[40%] lg:left-[20%]">
                Fort Rotterdam adalah peninggalan 
                sejarah yang hidup, mencakup lebih 
                dari tiga abad peristiwa penting 
                yang membentuk Makassar dan 
                Indonesia.
              </p>
            </section>
          </Box>

        {/* Box Kedua */}
          <Box>
              <div className="absolute 
              top-[5.5%] left-[4.5%]
              lg:top-[5.5%] lg:left-[4.5%]">
                <Circle bgColor="bg-secondary-maroon">
                  <Image src="./icons/vectorMaroon.svg" width={60} height={60}
                    alt="maroon"/>
                </Circle> 
              </div>
            <section className="flex">
              <p className="absolute text-lg text-black font-medium
                top-[17%] left-[25%]
                lg:left-[27%] lg:top-[17%]">
                Koleksi Seni dan Budaya
              </p>
              <p className="absolute w-[290px] text-base text-justify
                top-[40%] left-[20%]">
                Dari seni lokal hingga artefak 
                bersejarah, fort ini menyimpan 
                kekayaan seni dan budaya yang 
                menginspirasi dan memukau 
                pengunjung.
              </p>
            </section>
          </Box>
        
        {/* Box Ketiga */}
          <Box>
              <div className="absolute 
                top-[5.5%] left-[4.5%]
                lg:top-[5.5%] lg:left-[4.5%]">
                <Circle bgColor="bg-cyan-900">
                  <Image src="./icons/vectorBlue.svg" width={60} height={60}
                    alt="blue"/>
                </Circle>
              </div>
            <section className="flex">
              <p className="absolute text-lg text-black font-medium
              top-[17%] left-[25%]
              lg:left-[27%] lg:top-[17%]">
                Pengalaman Wisata Edukatif
              </p>
              <p className="absolute w-[290px] text-base text-justify
              top-[40%] left-[20%]">
                Fort Rotterdam menawarkan 
                pengalaman wisata mendidik dan 
                mengasyikkan yang mampu 
                membuat pengunjung merasakan 
                masa lalu secara langsung.
              </p>
            </section>
          </Box>
        </section>
      </section>
      
      {/* membuat kotak orange */}
      <section className="relative w-full h-[250px] md:h-[400px] lg:h-[500px] bg-primary-orange gap-3"> 
          <div className="absolute text-6xl top-20 left-[5%] text-white font-bold 
            lg:left-[10%] lg:top-28 lg:text-9xl
            md:text-8xl md:top-32 md:left-[15%]">“</div>
          <div className="absolute text-xl top-24 left-[13%] text-white font-bold leading-tight uppercase
            lg:text-5xl lg:top-44 lg:left-[17%] lg:leading-tight
            md:text-3xl md:top-40 md:left-[23%] md:leading-tight">
              sejarah mengungkapkan masa lalu,<br/> 
              memberitahu masa kini,<br/>
              & mempersiapkan masa depan
          </div>
      </section>
    </main>
  )
};
export default SubHero;