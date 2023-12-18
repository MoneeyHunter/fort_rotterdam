// import HeroImage from '../../../../public/images/patung_kuda.jpg';

const Home = () => {
  return (
    <main className=" flex overflow-hidden w-screen h-screen px-8 justify-center items-center">
      <section className="flex flex-col gap-12">
        <h1 className=" text-heading-xl font-bold text-white">
          Selamat Datang di <br /> <span className=" text-primary-orange">Fort Rotterdam</span>
        </h1>
        <p className=" text-justify text-white text-text-l">
          Tempat dimana sejarah menyambut setiap langkah Anda. Disini, Anda akan
          merasakan euforia masa lalu yang hidup dan mendalam, menggali rahasia
          zaman yang kami lestarikan dengan bangga. Mari bersama-sama menelusuri
          jejak-jejak bangsa. Merenung di bawah teduhnya warisan budaya, dan
          memahami bagaimana Fort Rotterdam tetap mendalam dalam ingatan kami.
        </p>
      </section>
    </main>
  );
};
export default Home;
