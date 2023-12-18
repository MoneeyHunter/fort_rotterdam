import Box from "../molecules/Box";
import Image from "next/image";
import Circle from "../atoms/PrimaryCircle";


const SubHero = () => {
  return(
    <main className="flex flex-col">
      {/* membuat header KURANG PADDING*/}
      <section className="text-primary-orange text-center font-bold text-heading-l pb-5 pt-5  
      lg:text-heading-xl"> 
        <h1 className="uppercase">
          informasi umum
        </h1>
      </section>

      {/* membuat 3 kotak inforamasi */}
      <section className="flex gap-5 justify-center flex-wrap items-center container">
        {/* Box Pertama */}
          <Box className="relative flex">
            <section>
              <div className="absolute 
                top-[15.5%] left-[13%]
                lg:top-[115px] lg:left-[2%]
                ">
                <Circle bgColor="bg-secondary-teal">
                  <Image src="./icons/vectorGreen.svg" width={50} height={50} 
                    alt="green"/>
                </Circle> 
              </div>  
            </section>
            <section className="flex">
              <div className="absolute text-lg text-black font-medium
                top-[20%] left-[28%]
                lg:left-[9%] lg:top-[140px]
                ">
                Sejarah Yang Memukau
              </div>
              <div className="absolute w-[290px] text-base text-justify
                top-[28%] left-[25%]
                lg:top-[30%] lg:left-[8%]">
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
              top-[55%] left-[13%]
              lg:top-[115px] lg:left-[35.5%]">
                <Circle bgColor="bg-secondary-maroon">
                  <Image src="./icons/vectorMaroon.svg" width={60} height={60}
                    alt="maroon"/>
                </Circle> 
              </div>
            </section>
            <section className="flex">
              <div className="absolute text-lg text-black font-medium
                left-[28%] top-[59.5%]
                lg:left-[42.5%] lg:top-[140px]">
                Koleksi Seni dan Budaya
              </div>
              <div className="absolute w-[290px] text-base text-justify
                left-[25%] top-[67.5%]
                lg:top-[30%] lg:left-[41.2%]">
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
                left-[13%] top-[95%]
                lg:top-[115px] lg:left-[68.8%]">
                <Circle bgColor="bg-cyan-900">
                  <Image src="./icons/vectorBlue.svg" width={60} height={60}
                    alt="blue"/>
                </Circle>
              </div>
            </section>
            <section className="flex">
              <div className="absolute text-lg text-black font-medium
              left-[28%] top-[99.5%]
              lg:left-[76%] lg:top-[140px]">
                Pengalaman Wisata Edukatif
              </div>
              <div className="absolute w-[290px] text-base text-justify
              left-[25%] top-[107%]
              lg:top-[30%] lg:left-[74.5%]">
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