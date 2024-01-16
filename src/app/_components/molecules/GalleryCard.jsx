import Image from "next/image";

import { MdOutlineLaunch } from "react-icons/md";
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
              <h1 className="text-heading-s font-bold text-white uppercase">
                {title}
              </h1>
              <MdOutlineLaunch className="text-white w-10 h-6" />
            </div>
          </header>
        </section>
      </section>
    </section>
  );
};

export default GalleryCard;
