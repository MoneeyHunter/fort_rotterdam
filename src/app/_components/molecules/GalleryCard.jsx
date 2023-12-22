import Image from "next/image";


import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";

const GalleryCard = ({ src, title, onClick }) => {
  return (
    <section
      className="relative overflow-hidden rounded-lg cursor-pointer"
      onClick={onClick}
    >
      <section className="h-[479px]">
        <Image
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          src={src}
          alt={title}
        />
        <section>
          <header
            className=" absolute flex h-full w-full flex-col justify-end gap-2 px-10 py-8 text-secondary-white "
            style={{
              background:
                "linear-gradient(180deg, rgba(91, 91, 91, 0.00) 0%, #000 100%)",
            }}
          >
            <div className="flex justify-between">
              <h1 className="text-text-m lg:text-heading-s md:text-text-l font-bold text-white uppercase">
                {title}
              </h1>
              <LaunchRoundedIcon className="text-white" />
            </div>
          </header>
        </section>
      </section>
    </section>
  );
};

export default GalleryCard;
