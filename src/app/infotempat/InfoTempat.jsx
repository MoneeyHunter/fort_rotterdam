"use client";
import BoxInformasi from "./BoxInfomasi";
import Link from "next/link";
import Image from "next/image";
import Footer from "../_components/molecules/Footer";

const InfoTempat = () => {
  return (
    <>
      <main>
        {/* Section Home Informasi Tempat*/}
        <section className="relative w-screen h-[500px] flex flex-col px-7 items-center justify-center">
          <Image
            src="/images/bginfo.webp"
            alt="Background Info"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <div
            className="relative w-full lg:w-3/4 items-center justify-center"
            data-aos="fade-up"
            data-aos-duration="4000"
          >
            <p className=" text-white text-center uppercase font-bold text-heading-m md:text-heading-l lg:text-heading-xl py-4 md:py-2 ">
              Informasi Tentang Fort Rotterdam
            </p>
            <p className="text-white text-text-m md:text-text-l text-center">
              Fort Rotterdam sebuah mercusuar sejarah sebagai penanda perjalanan
              kota Makassar menuju modernitas
            </p>
          </div>
        </section>

        <section className="px-7 md:px-14">
          {/* Section Tips Wisata */}
          <section
            className="flex flex-col items-center justify-center gap-16 py-12 md:py-24 "
            id="tipswisata"
          >
            <p className="text-heading-m md:text-heading-l text-center text-primary-maroon font-bold uppercase">
              Tips Wisata Fort Rotterdam
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center items-center ">
              {tips.map((item) => {
                return (
                  <BoxInformasi key={item.id}>
                    <li className="list-none h-full text-center justify-center px-3 flex flex-col items-center">
                      <img
                        src={item.img}
                        alt={item.text}
                        className="w-15 h-15  object-cover object-center"
                      />
                      <div className="items-center justify-center py-6 gap-3 flex flex-col">
                        <p className="font-semibold">{item.text}</p>
                        <p>{item.desc}</p>
                      </div>
                    </li>
                  </BoxInformasi>
                );
              })}
            </div>
          </section>

          <section className="flex flex-col gap-32 py-16" id="waktukunjungan">
            <section
              data-aos="fade-up"
              data-aos-duration="4000"
              className="relative flex flex-col-reverse gap-10 md:flex md:flex-row justify-between"
            >
              <section className=" w-full">
                <div className="flex gap-3">
                  <Image
                    src={"./icons/clock.svg"}
                    width={35}
                    height={35}
                    objectFit="cover"
                    objectPosition="center"
                    alt="Icon Jam"
                  />
                  <p className="font-bold text-primary-maroon uppercase text-heading-s md:text-heading-m lg:text-heading-l">
                    Jam Buka
                  </p>
                </div>

                <table className="md:w-5/6 md:h-1/2 border w-full h-3/4 ">
                  <caption className="caption-top text-justify py-5 ">
                    Waktu kunjungan ke Benteng Fort Rotterdam dapat dilakukan
                    setiap hari selama jam operasional yang dimulai dari pagi
                    hari hingga pada malam hari
                  </caption>
                  <thead className="border   bg-primary-maroon">
                    <tr className="border">
                      <th className="border font-semibold text-white py-1">
                        Hari
                      </th>
                      <th className="border font-semibold text-white py-1">
                        {" "}
                        Jam Buka
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border">
                    <tr className="border text-left ">
                      <td className="border px-2">Ahad-Jumat</td>
                      <td className="border px-2">09.00-18.00 WITA</td>
                    </tr>
                    <tr className="border">
                      <td className="border px-2">Sabtu</td>
                      <td className="border px-2">09.00-19.00 WITA</td>
                    </tr>
                  </tbody>
                </table>
              </section>

              <div>
                <Image
                  src={"/images/imginfo.webp"}
                  width={500}
                  height={100}
                  objectFit="cover"
                  objectPosition="center"
                  className="rounded-[10px] "
                  alt="Informasi"
                />
              </div>
            </section>

            <section
              className="flex flex-col-reverse gap-10 md:flex-row justify-between w-full "
              id="tiketmasuk"
              data-aos="fade-up"
              data-aos-duration="4000"
            >
              <section className="w-full ">
                <div className="flex gap-3">
                  <Image
                    src={"./icons/uang.svg"}
                    width={35}
                    height={35}
                    objectFit="cover"
                    objectPosition="center"
                    alt="Icon Uang"
                  />
                  <p className="font-bold text-right text-primary-maroon uppercase text-heading-s md:text-heading-m lg:text-heading-l">
                    Tiket Masuk
                  </p>
                </div>
                <table className="md:w-5/6 md:h-1/2 border w-full h-3/4 ">
                  <caption className="caption-top text-justify py-5">
                    Tidak dikenakan biaya masuk untuk ke Benteng Fort Rotterdam,
                    namun ada biaya akses yang perlu dibayar untuk mengunjungi
                    Museum La Galigo
                  </caption>
                  <thead className="border  bg-primary-maroon">
                    <tr className="border ">
                      <th className="border font-semibold text-white py-1">
                        Keterangan
                      </th>
                      <th className="border  font-semibold text-white py-1">
                        Harga
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border">
                    <tr className="border text-left ">
                      <td className="border px-2">Turis</td>
                      <td className="border px-2">Rp 10.000</td>
                    </tr>
                    <tr className="border text-left ">
                      <td className="border px-2">Dewasa</td>
                      <td className="border px-2">Rp 5.000</td>
                    </tr>
                    <tr className="border text-left">
                      <td className="border px-2">Anak-anak</td>
                      <td className="border px-2">Rp 3.000</td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <Image
                src={"/images/ligoinfo.webp"}
                width={500}
                height={10}
                objectFit="cover"
                objectPosition="center"
                className="rounded-[10px] "
                alt="Museum"
              />
            </section>
          </section>
        </section>

        <section
          className="py-16 px-7 md:px-14 gap-5 flex flex-col justify-start"
          id="lokasi"
          data-aos="fade-up"
          data-aos-duration="4000"
        >
          <div className="flex flex-col gap-5 ">
            <p className="font-bold text-primary-maroon text-heading-m uppercase md:text-heading-l ">
              Lokasi Fort Rotterdam
            </p>
            <p className="text-text-m">
              Jl. Ujung Pandang, Bulo Gading, Kec. Ujung Pandang, Kota Makassar,
              Sulawesi Selatan 90171
            </p>
          </div>
          <div className="flex flex-grow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496.7265067724445!2d119.40528193078129!3d-5.133947051937677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbf02b011ce37ef%3A0x28ed3928c1b6cf23!2sFort%20Rotterdam!5e0!3m2!1sen!2sid!4v1703168152416!5m2!1sen!2sid"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="rounded-[25px] w-full h-[350px]"
            ></iframe>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};
export default InfoTempat;

const tips = [
  {
    id: 1,
    text: "Abadikan Momen",
    img: "./icons/cameras.svg",
    desc: "Abadikan tiap momen berharga selama perjalanan wisata",
  },
  {
    id: 2,
    text: "Gunakan Topi",
    img: "./icons/hat.svg",
    desc: "Topi dapat memberikan perlindungan dari sinar matahari ",
  },
  {
    id: 3,
    text: "Bawa Cemilan",
    img: "./icons/food.svg",
    desc: "Cemilan ringan  dapat memberikan energi dalam perjalanan wisata",
  },
  {
    id: 4,
    text: "Datang Tepat Waktu",
    img: "./icons/clock.svg",
    desc: "Memaksimalkan pengalaman wisata dengan jadwal yang telah ditentukan ",
  },
];
