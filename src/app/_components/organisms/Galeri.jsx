import Image from "next/image";
import Link from "next/Link";
import Circle from "../atoms/PrimaryCircle";

const LihatGaleri = () => {
  return (
    <main>
      <section className="flex flex-col gap-[350px] items-center relative w-full min-h-screen md:gap-[450px] lg:pb-6">
        <div className="border-r absolute border-black top-0 h-[30%] transition-height duration-300 ease"></div>
        <section className="flex relative w-full lg:pb-3 ">
          <div className="top-44 md:top-60 left-0 absolute">
            <Image
              src={"/images/lagaligo.webp"}
              width={120}
              height={176}
              alt="Museum Lagaligo"
              objectFit="cover"
              objectPosition="top"
              className="md:w-[150px] lg:w-[180px] rounded-[5px]"
            />
          </div>

          <div className="absolute top-3 left-[6%] md:top-10 md:left-[15%] lg:left-[20%]">
            <Image
              src={"/images/gerbang.webp"}
              width={150}
              height={180}
              alt="Gerbang"
              objectFit="cover"
              objectPosition="top"
              className="md:w-[220px] lg:w-[300px] rounded-[5px]"
            />
          </div>

          <div className="absolute top-44 right-[20%] md:right-[23%] lg:right-[22%]  ">
            <Image
              src={"/images/patungkuda.webp"}
              width={200}
              height={200}
              alt="Patung Kuda"
              objectFit="cover"
              objectPosition="top"
              className="invisible min-[800px]:visible min-[1128px]:w-[310px]  md:w-[200px] rounded-[5px]"
            />
          </div>

          <div className="absolute top-20 md:top-14 right-0 pl-6">
            <Image
              src={"/images/bangunan.webp"}
              width={135}
              height={100}
              alt="Bangunan Fort Rotterdam"
              objectFit="cover"
              objectPosition="top"
              className=" md:w-[170px] md:h-[217px] lg:w-[200px] rounded-[5px]"
            />
          </div>
        </section>

        <section className="flex flex-col relative gap-[300px] md:gap-[400px] w-full md:pb-20  ">
          <section className="items-center flex flex-col gap-3 md:gap-8 lg:gap-12 px-8 ">
            <p className="uppercase text-heading-l md:text-heading-xl lg:text-heading-2xl font-semibold text-center ">
              Eksplorasi Benteng
              <br />
              Fort Rotterdam
            </p>
            <section className="flex md:gap-5 items-center cursor-pointer">
              <Circle bgColor="bg-primary-maroon">
                <Image src="./icons/iconGaleri.svg" width={30} height={30} />
              </Circle>
              <Link href={"#"}>
                <p className="text-heading-s lg:text-heading-m font-semibold ">
                  Lihat Galeri
                </p>
              </Link>
            </section>
          </section>

          <section className="pt-10">
            <div className="absolute  py-6 top-[44%] left-0 md:top-[20%] min-[1025px]:top-[20%] min-[1365px]:top-[15%]">
              <Image
                src={"/images/tamandepan.webp"}
                width={150}
                height={200}
                alt=""
                objectFit="cover"
                objectPosition="top"
                className=" md:w-[200px] lg:w-[250px] rounded-[5px] "
              />
            </div>

            <div className="absolute bottom-5 left-[25%] md:left-[15%] min-[1025px]:left-[15%] min-[1365px]:left-[20%] ">
              <Image
                src={"/images/tamanlain.webp"}
                width={250}
                height={200}
                alt="Taman Fort Rotterdam"
                objectFit="cover"
                objectPosition="top"
                className="invisible md:visible md:w-[240px] lg:w-[300px] rounded-[5px]"
              />
            </div>

            <div className="absolute right-[7%] bottom-[10%] md:bottom-[15%] md:right-[10%] min-[1025px]:right-[15%] min-[1365px]:right-[20%] ">
              <Image
                src={"/images/taman.webp"}
                width={150}
                height={200}
                alt="Taman Fort Rotterdam"
                objectFit="cover"
                objectPosition="top"
                className=" md:w-[250px] lg:w-[320px] rounded-[5px] "
              />
            </div>

            <div className="absolute top-[40%] py-6 right-0 md:top-[20%] min-[1025px]:top-[20%] min-[1365px]:top-[15%] ">
              <Image
                src={"/images/depan.webp"}
                width={130}
                height={200}
                alt="Depan Bangunan Fort Rotterdam"
                objectFit="cover"
                objectPosition="top"
                className=" md:w-[200px] lg:w-[250px] rounded-[5px] "
              />
            </div>
          </section>
        </section>
        <div className="border-r absolute border-black bottom-0 h-[30%]"></div>
      </section>
    </main>
  );
};

export default LihatGaleri;
