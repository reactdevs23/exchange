import React, { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./Currencies.module.css";

const Currencies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const currencies = [
    "USDT",
    "FDUSD",
    "TUSD",
    "BUSD",
    "BTC",
    "USDT",
    "FDUSD",
    "TUSD",
    "BUSD",
    "BTC",
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4.5,
    arrows: true,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow isActive={!currentSlide} />,
    nextArrow: (
      <CustomNextArrow isActive={currentSlide === currencies.length - 1} />
    ),
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.textSlider}>
        {" "}
        <BsStarFill className={styles.star} />
        <Slider {...settings}>
          {currencies.map((el, i) => (
            <span
              key={i}
              className={[
                styles.text,
                el.toLowerCase() === "btc" && styles.highlight,
              ].join(" ")}
            >
              {el}
            </span>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Currencies;
const CustomPrevArrow = ({ isActive, onClick }) => {
  // Custom previous arrow component
  return (
    <button
      className={`${styles.previousButton} ${
        isActive ? styles.activeButton : ""
      }`}
      onClick={onClick}
    >
      <BiChevronLeft className={styles.arrow} />
    </button>
  );
};

const CustomNextArrow = ({ isActive, onClick }) => {
  // Custom next arrow component
  return (
    <button
      onClick={onClick}
      className={`${styles.nextButton} ${isActive ? styles.activeButton : ""}`}
    >
      <BiChevronRight className={styles.arrow} />{" "}
    </button>
  );
};
