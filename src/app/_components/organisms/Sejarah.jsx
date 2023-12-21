import Image from "next/image";

const Sejarah = () => {
    return(
      <main>
        {/* Header */}
        <section>
          <div className="absolute">
          <Image
              src={"/images/sejarah.webp"}
              alt="fotoSejarah"
              width={1920}
              height={56}
              className="h-64 lg:h-96"
            />
          </div>
          <div className="absolute bg-black opacity-60
            w-full h-64
            lg:h-96">
          </div>
          <div className="relative text-white text-center font-bold text-[25px] 
            pt-24
            lg:pt-44 lg:text-[44px]">
            SEJARAH FORT ROTTERDAM
          </div>
          <div className="relative text-center text-zinc-100 tracking-widest
            text-[9px]
             lg:text-[15px]">
            "Benteng bukan hanya sebuah struktur batu, melainkan saksi<br />
            bisu dari zaman yang telah berlalu."
          </div>
        </section>

        {/* Text */}
        <section className="container py-44 px-24 pr-[500px] tracking-widest">
          <div className="text-justify text-[16px]">
            <p>
              Benteng Rotterdam atau Benteng Ujung Pandang adalah sebuah benteng 
              peninggalan Kerajaan Gowa-Tallo. Letak benteng ini berada di pinggir
              pantai sebelah barat Kota Makassar, Sulawesi Selatan.
            </p>
            <p className="pt-5">
              Benteng ini awalnya dibangun pada tahun 1545 oleh Raja Gowa ke-9 yang 
              bernama Daeng Matanre Karaeng Tumapa'risi' Kallonna. Situs ini 
              kemudian diserahkan kepada VOC Belanda di bawah Perjanjian Bungaya 
              1667 untuk diduduki. Benteng ini memiliki enam bastion dan dikelilingi 
              oleh dinding setinggi tujuh meter dan parit sedalam dua meter.
            </p>
            <p className="pt-5">
              Benteng ini kemudian digunakan oleh Belanda sebagai pusat 
              penampungan rempah-rempah di Indonesia bagian timur. Benteng ini 
              juga merupakan markas militer dan pemerintahan daerah Belanda hingga 
              tahun 1930-an. Pada 1937 kepemilikan Benteng Rotterdam oleh pemerintah 
              Hindia Belanda diserahkan kepada Yayasan Fort Rotterdam.
            </p>
            <p className="pt-5">
              Benteng ini terdaftar sebagai bangunan bersejarah pada 23 Mei 1940. 
              Benteng ini dipugar secara ekstensif pada tahun 1970-an dan sekarang 
              menjadi pusat budaya dan pendidikan, tempat untuk berbagai acara 
              musik dan tarian, serta tujuan wisata.
            </p>

            <p className="uppercase text-primary-orange text-[25px] font-semibold pt-7">
              simbol kekuatan pertahanan
            </p>
            <p className="pt-7">
              Fort Rotterdam adalah sebuah benteng yang dibangun pada tahun 1545 
              di lokasi yang sebelumnya merupakan benteng bernama Jum Pandan, 
              yang kemudian memberi nama kota Ujung Pandang (nama lain kota 
              Makassar). Benteng ini merupakan bagian dari program pembangunan 
              benteng yang dilakukan oleh penguasa Makassar pada saat itu untuk 
              memperkuat pertahanan. Nama "Fort Rotterdam" kemungkinan berasal 
              dari nama kota asal para pendiri VOC (Vereenigde Oost-Indische 
              Compagnie) yang merupakan perusahaan dagang Belanda pada abad 
              ke-17. Benteng ini merupakan bagian penting dari sejarah kota Makassar 
              dan menjadi simbol kekuatan pertahanan pada masa itu.
            </p>
            <p className="uppercase text-primary-orange text-[25px] font-semibold pt-7">
              asal mula fort rotterdam
            </p>
            <p className="pt-7">
              Pada tahun 1667, Benteng Ujung Pandang diserahkan kepada Belanda 
              sesuai dengan Perjanjian Bungaya, setelah Kesultanan Gowa mengalami 
              kekalahan dalam Perang Makassar. Di bawah kendali Belanda, benteng ini 
              kemudian direkonstruksi sepenuhnya oleh laksamana Belanda Cornelis 
              Speelman. Speelman membangun kembali benteng tersebut dan 
              menjadikannya pusat kekuasaan kolonial Belanda di Sulawesi. Benteng ini 
              kemudian berganti nama menjadi Fort Rotterdam, diambil dari nama kota 
              kelahiran Speelman, yaitu Rotterdam. Selama periode 1673-1679, lima 
              bastion benteng ini dibangun dengan bentuk menyerupai penyu, dan 
              bentuk tersebut masih bertahan hingga saat ini. Karena bentuknya yang 
              khas ini, benteng ini dikenal dengan julukan "Benteng Penyu".
            </p>
            <p className="uppercase text-primary-orange text-[25px] font-semibold pt-7">
              material fort rotterdam
            </p>
            <p className="pt-7">
              Benteng Rotterdam dibangun menggunakan batuan dari pegunungan 
              karst di Maros, batu kapur dari Selayar, serta kayu dari Tanete dan 
              Bantaeng. Selain sebagai pusat kekuasaan kolonial Belanda di Sulawesi, 
              benteng ini memiliki sejarah penting lainnya. Pangeran Diponegoro 
              dipenjara di benteng ini setelah diasingkan ke Makassar pada tahun 1830 
              hingga wafatnya pada tahun 1855, pasca Perang Jawa (1825–1830). 
              Selama Perang Dunia II, benteng ini juga digunakan sebagai kamp 
              tawanan perang oleh pasukan Jepang.
            </p>
          </div>
        </section>

        {/* Line */}
        <section>
          
        </section>
      </main>
  )
};

export default Sejarah;