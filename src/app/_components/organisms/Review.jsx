"use client";

import { useState, useEffect } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Image from "next/image";
import DataReview from "../molecules/DataReview";
import BoxReview from "../molecules/BoxReview";
import Footer from "../molecules/Footer";

const Review = () => {
  const [cards, setCards] = useState(DataReview);

  // Fungsi untuk slider ke kiri
  const leftClick = () => {
    setCards((prevSlide) => {
      // Putar card ke kiri
      const rotatedCards = [...prevSlide];
      const lastCard = rotatedCards.pop();
      rotatedCards.unshift(lastCard);
      return rotatedCards;
    });
  };

  // Fungsi untuk slider ke kanan
  const rightClick = () => {
    setCards((prevSlide) => {
      // Putar card ke kanan
      const rotatedCards = [...prevSlide];
      const firstCard = rotatedCards.shift();
      rotatedCards.push(firstCard);
      return rotatedCards;
    });
  };

  // Card otomatis bergeser ke kanan
  useEffect(() => {
    const interval = setInterval(() => {
      rightClick();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <section className="w-full bg-primary-maroon  md:h-[570px] ">
        <section className="flex flex-col gap-6 md:gap-24">
          <section className="flex relative md:py-10 justify-center">
            <Image
              src={"/decorations/jaring.svg"}
              width={180}
              height={180}
              className=" absolute scale-[.60] -left-10 -top-8 md:scale-[100%] md:-left-3 md:top-0"
            />
            <h3 className="text-white uppercase font-bold text-center   text-heading-m md:text-heading-xl pt-12">
              Apa kata mereka?
            </h3>
          </section>
          <section className="flex relative min-[200px]:scale-[.45] min-[480px]:scale-[.60] md:scale-[.75] lg:scale-100 justify-center items-center ">
            <section className="flex gap-[100px] ">
              {cards.map((people, index) => {
                const isCenter = index === Math.floor(cards.length / 2);
                const opacity = isCenter ? 1 : 0.7;

                return (
                  <BoxReview
                    key={people.id}
                    className={` flex-shrink-0 transition-transform transform ease-in-out duration-500 ${
                      isCenter ? "-top-8" : ""
                    }`}
                    style={{
                      opacity: opacity,
                      transform: isCenter ? "scale(1.1)" : "scale(1)",
                    }}
                  >
                    <li className="text-center flex flex-col px-2 items-center relative">
                      <img
                        className="top-[-52%] absolute w-[80px] h-[80px] rounded-[100%] object-cover object-center"
                        src={people.img}
                        alt={people.name}
                      />

                      <div className="pt-9 gap-3 flex flex-col text-text-m px-4">
                        <p>{people.review}</p>
                        <p className="font-semibold">{people.name}</p>
                      </div>
                    </li>
                  </BoxReview>
                );
              })}
            </section>
            <section className="flex absolute gap-[630px] top-[20%] ">
              <button
                className="hover:rounded-full hover:bg-white hover:bg-opacity-[35%] hover:cursor-pointer"
                onClick={() => leftClick()}
              >
                <SlArrowLeft className="w-10 h-10 p-2 text-white " />
              </button>

              <button
                className="hover:rounded-full hover:bg-white hover:bg-opacity-[35%] hover:cursor-pointer"
                onClick={() => rightClick()}
              >
                <SlArrowRight className="w-10 h-10 p-2 text-white " />
              </button>
            </section>
          </section>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default Review;
