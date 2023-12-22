"use client";

import { useState } from "react";
import GalleryCard from "../_components/molecules/GalleryCard";
import PopUpGallery from "../_components/organisms/PopUpGallery";
import Navbar from "../_components/organisms/Navbar";
import Footer from "../_components/molecules/Footer";

const Galeri = () => {
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleGalleryClick = (index) => {
    console.log("Gallery clicked:", index);
    setSelectedGallery(data[index]);
  };

  const handleClosePopup = () => {
    setSelectedGallery(null);
  };

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <main className="overflow-hidden">
      <Navbar showBackground={false} />
      <section className="flex flex-col lg:px-[80px] px-[60px] py-32 gap-10">
        {selectedGallery && (
          <PopUpGallery
            src={selectedGallery.src}
            title={selectedGallery.title}
            desc={selectedGallery.desc}
            onClose={handleClosePopup}
          />
        )}
        <section className="flex flex-col items-center gap-5 ">
          <h1 className="text-primary-maroon text-heading-xl font-bold">
            GALERI
          </h1>
          <p className="lg:text-center lg:text-heading-s text-text-l text-justify">
            Mari nikmati keindahan dan sejarah yang tersembunyi di setiap sudut
            Benteng Rotterdam melalui galeri kami. Setiap gambar menceritakan
            kisah panjang tempat ini, dari fondasi yang kokoh hingga pemandangan
            indah yang dapat dinikmati dari temboknya
          </p>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {data.slice(0, showAll ? data.length : 9).map((item, idx) => (
            <GalleryCard
              key={idx}
              src={item.src}
              title={item.title}
              onClick={() => handleGalleryClick(idx)}
            />
          ))}
        </section>
        <div className="flex flex-col items-center">
          {!showAll && (
            <button
              onClick={handleShowAll}
              className="bg-primary-maroon text-white font-bold w-fit px-10 py-4 rounded-full hover:bg-white hover:text-primary-maroon transition duration-100 hover:shadow-lg hover:border-primary-maroon border-2 border-primary-maroon"
            >
              Lihat Semua
            </button>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Galeri;

const data = [
  {
    src: "/images/koleksi1.webp",
    title: "RUANG SEJARAH KEBUDAYAAN",
    desc: "Sejarah Kebudayaan dan Lintas Peradaban Indonesia adalah rangkaian jejak kehadiran manusia indonesia sejak zaman prasejarah sampai sekarang. Zaman Prasejarah merupakan suatu masa yang sangat panjang,yaitu dari awal kehadiran manusia sekitar 1,5 juta tahun yang lampau hingga masa mulai dikenalnya budaya tulis sekitar abad ke-5 Masehi, yaitu ditemukannya prasasti yupa di daerah Kutai Kalimantan Timur.",
  },
  {
    src: "/images/koleksi2.webp",
    title: "MERIAM PENINGGALAN VOC",
    desc: "Salah satu peninggalan yang terdapat di Benteng Rotterdam berupa meriam. Meriam ini merupakan peninggalan dari VOC yang digunakan untuk pertahanan Benteng Rotterdam. Hingga sekarang, meriam ini masih terawat dengan baik dan menjadi salah satu koleksi yang menarik untuk dilihat. Meriam ini diletakkan di depan gedung P yang bangunannya berlantai dua dengan luas 544m^2 dan digunakan sebagai gereja pada masa kolonial Belanda. Namun, sekarang digunakan sebagai aula pada bagian atas dan ruang pameran di bagian bawah.",
  },
  {
    src: "/images/koleksi3.webp",
    title: "RUANG BUDAYA PEDALAMAN(AGRARIS)",
    desc: "Di Provinsi Sulawesi Selatan mayoritas penduduknya memiliki mata pencaharian sebagai petani di sawah dan di ladang. Pekerjaan petani/padi sawah disebut 'pallaongruma' atau 'pa' galung dan yang bekerja di lang atau di kebun disebut 'pa dare'. Sistem pengetahuan bercocok tanam yang telah mengakar diwariskan secara turun temurun seperti membuat sawah berpetak-petak hanya dibatasi oleh pematang, mengolah lahan dengan peralatan yang sangat sederhana seperti rakkala (bajak), dan bingkung (cangkul) untuk membongkar tanah.",
  },
  {
    src: "/images/koleksi4.webp",
    title: "Koleksi Miniatur Bagang Perahu",
    desc: "Bagang adalah salah satu sarana yang dipergunakan untuk menangkap ikan di sungai, danau atau laut. Bagang ini dapat berpindah-pindah. Tradisi nelayan Bugis-Makassar, sebelum melaut terlebih dahulu melaksanakan upacara Ma'cera Tasi yang diadakan untuk menghormati dan memohon perlindungan dari roh-roh laut serta untuk memohon keselamatan para pelaut dalam menjalankan aktivitas laut mereka. Upacara ini melibatkan prosesi yang melibatkan masyarakat setempat, terutama para nelayan dan keluarga mereka.",
  },
  {
    src: "/images/koleksi5.webp",
    title: "RUANG BUDAYA PERKAMPUNGAN",
    desc: "Ruangan ini menyimpan banyak koleksi seperti Tempat Ari Perak dan Tanah Liat, Pakkeri, Baju Bodo, Wadah Erong, Lamming Tudange, Rumah Adat Tradisional Suku Toraja, dan masih banyak lagi. Di sebuah perkampungan tradisional di Sulawesi Selatan, struktur rumah panggung dengan atap melengkung mendominasi pemandangan. Arsitektur khas Bugis dan Makassar menciptakan keindahan artistik dengan atap 'limas' atau 'tutup bale'. Dalam pakaian adat, 'Baju Bodo' bagi perempuan Bugis menjadi simbol keanggunan dengan hiasan brokat dan warna-warni yang menarik.",
  },
  {
    src: "/images/koleksi6.webp",
    title: "Koleksi Buku Lontara Luwu",
    desc: "Lontara Luwu adalah sistem aksara yang digunakan untuk menulis bahasa Luwu, sebuah bahasa yang digunakan oleh suku-suku di wilayah Luwu, Sulawesi Selatan, Indonesia. Sistem aksara ini sangat terkait dengan budaya dan sejarah masyarakat Luwu. Lontara Luwu termasuk dalam keluarga aksara Bugis, dan aksara-aksara Bugis dan Makassar juga digunakan di wilayah tersebut. Aksara ini ditulis dari kiri ke kanan dan digunakan untuk mencatat berbagai informasi, termasuk sejarah, budaya, dan kepercayaan masyarakat Luwu.",
  },
  {
    src: "/images/koleksi7.webp",
    title: "Gedung A",
    desc: "Pada masa Kerajaan Gowa, gedung tersebut digunakan untuk menerima tamu agung dari Bone, dan pada saat ini digunakan sebagai pos jaga. Pada masa Kerajaan Gowa, pertemuan dan penerimaan tamu agung dari Bone mungkin merupakan bagian dari praktik diplomatik dan hubungan antarkerajaan di wilayah Sulawesi Selatan. Penggunaan gedung sebagai pos jaga menunjukkan adaptasi dan penggunaan kembali struktur sejarah untuk keperluan militer atau keamanan. ",
  },
  {
    src: "/images/koleksi8.webp",
    title: "Gedung B",
    desc: "Bangunan ini menunjukkan ciri arsitektur khas gaya Belanda dapat dilihat dari bentuk bangunan yang memanjang dan bertingkat. Bangunan ini merupakan hasil rekonstruksi oleh SPSP Sulselra yang sekarang berubah nama menjadi BPCB Sulawesi Selatan karena keadaannya yang sangat hancur akibat perang. Bangunan ini tidak memiliki cerobong asap semu seperti bangunan lainnya dalam benteng. Pada bagian lantai II terdapat serambi seperti arsitektur lokal Bugis-Makassar. Luas bangunan adalah 104 m 2 , menghadap ke timur yang membujur dari utara ke selatan.",
  },
  {
    src: "/images/koleksi9.webp",
    title: "Gedung C",
    desc: "Bangunan berlantai tiga ini terletak di Bastion Buton dengan luas 495 m 2 menghadap ke selatan. Dahulu, bangunan ini dipergunakan untuk menerima tamu dari Buton. Sesudah direhabitasi tahun 1976, bangunan ini kemudian digunakan sebagai pusat latihan tari Indonesia (Konservatory Tari Indonesia) di Ujungpandang, setelah itu digunakan sebagai pusat kesenian Makassar atau lebih dikenal sebagai bangunan DKM (Dewan Kesenian Makassar). Pada bagian atas bangunan terdapat kaca mati yang berbentuk tapal kuda masing-masing satu buah pada bagian barat dan timur.",
  },
  {
    src: "/images/koleksi10.webp",
    title: "Gedung D",
    desc: "Bangunan ini merupakan bangunan tertua diantara bangunan di dalam benteng. Didirikan tahun 1686, sebagai tempat tinggal Cornelius Speelman, menghadap ke selatan membujur dari barat ke timur dengan luas bangunan 189,65 m 2 . Bangunan ini terdiri dari tiga lantai, jumlah ruangan lantai dasar adalah 10 buah, lantai II sebanyak lima buah dan lantai III hanya satu ruangan. Pada lantai dasar terdapat selasar pada bagian yang ditopang dengan pilar segi empat dengan tinggi 3,0 meter sebanyak tujuh buah. Setiap jendela dan pintu dasar bagian barat dan timur diberi Over Steak yang konsolnya terbuat dari kayu.",
  },
  {
    src: "/images/koleksi11.webp",
    title: "Gedung E",
    desc: "Bangunan ini terdiri dari dua lantai, dimana lantai dasar bagian depan mempunyai selasar yang ditopang oleh pilar segi empat dengan tinggi tiga meter sebanyak 12 buah yang tersusun oleh batu bata, bangunan kiri dan kanan masing-masing enam buah pilar. Bangunan ini terdiri dari dua bangunan yang dipisahkan oleh dinding dan tidak mempunyai pintu penghubung. Setiap bangunan mempunyai taman di bagian belakang. Jendela-jendela yang terdapat pada sisi-sisi kiri dan kanan bangunan lantai I, II maupun jendela di bawah konstruksi atap terdapat jendela segi empat panil ganda ukuran 0,9 x 0,7 meter masing-masing satu buah.",
  },
  {
    src: "/images/koleksi12.webp",
    title: "Gedung F",
    desc: "Luas bangunan ini 556 m2 dan menghadap ke selatan. Bangunan ini mempunyai selasar teras yang terbuat dari kayu pada bagian depan di lantai II dan tidak mempunyai molding di bagian atap. Bangunan ini merupakan hasil rekonstruksi suaka, karena keadaan sebelumnya sangat hancur. Setelah selesai direkonstruksi digunakan sebagai laboratorium konservasi Museum La Galigo sampai sekarang. Bangunan ini terdiri dari dua lantai. Pada ruangan sebelah barat berbeda dengan ruangan sebelah timur. ",
  },
  {
    src: "/images/koleksi3.webp",
    title: "Gedung G",
    desc: "Bangunan berlantai tiga ini terletak pada bagian tenggara Benteng Ujungpandang. Luas bangunan adalah 171 m 2 , dan dahulu digunakan sebagai tempat pertukangan. Lantai dasarnya berbentuk kubah dengan lantai menggunakan ubin teraso 30 x 30 cm warna abu- abu bintik-bintik hitam. Bagian depan (selatan) terdapat pintu tapal kuda ukuran 4,5 x 1,2 meter dengan menggunakan terali besi ganda. Bagian belakang (utara) bangunan dinding berbentuk tapal kuda (tapal kuda semu). Lantai dasar dibagi ke dalam dua ruangan yang dipisahkan oleh dinding. ",
  },
  {
    src: "/images/koleksi14.webp",
    title: "Gedung H",
    desc: "Bangunan ini menempati bastion Mandarsyah pada Benteng Ujungpandang, luas bangunan adalah 905,84 m 2 , dahulu bangunan ini digunakan sebagai tempat untuk menerima tamu dari Mandarsyah (Ternate). Bangunan ini terdiri dari 4 lantai. Lantai dasar bangunan atapnya berbentuk kubah, terdiri dari tiga ruangan menghadap ke arah timur laut Benteng.",
  },
  {
    src: "/images/koleksi15.webp",
    title: "Gedung I",
    desc: "Bangunan berlantai satu yang dibangun pada masa pendudukan Jepang ini menempati sisi timur Benteng Ujungpandang. Berdasarkan sumber sejarah, gedung ini dibangun karena Jepang kekurangan gedung kantor pada masa pemerintahannya. Luas bangunan 426,4 m 2. Gaya bangunan disesuaikan dengan bangunan yang lain, tetapi dindingnya lebih tipis dengan ketebalan 30 cm. Jumlah ruangan terdapat 10 buah, terdapat lorong di tengah- tengah bangunan. Ditengah-tengah ruangan terdapat lorong kecil, yang menunjukkan perbedaannya dengan bangunan-bangunan lain. ",
  },
];
