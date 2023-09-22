import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiDoubleQuotesR } from "react-icons/ri";
import { user1, user2, user3 } from "../../../images/imags";
import { Text, Title } from "../CommonStyle/CommontStyles";
import styles from "./Testimonial.module.css";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      userImg: user1,
      userName: "Jacob Smith",
      details: "Lörem ipsum fupor viren. ",
      text: "Lörem ipsum fupor viren. Tiroktigt spesasa. Makrorar. Täde didöhet inte kektigt, demoism. Redot bedäbel. Hypoda. Distansbatong garas: för att peligen. Lörem ipsum fupor viren. Tiroktigt spesasa. Makrorar. Täde didöhet inte kektigt, demoism. ",
    },
    {
      userImg: user2,
      userName: "Alina Mac",
      details: "Lörem ipsum fupor viren. ",
      text: "Lörem ipsum fupor viren. Tiroktigt spesasa. Makrorar. Täde didöhet inte kektigt, demoism. Redot bedäbel. Hypoda. Distansbatong garas: för att peligen. Lörem ipsum fupor viren. Tiroktigt spesasa. Makrorar. Täde didöhet inte kektigt, demoism. ",
    },
    {
      userImg: user3,
      userName: "Jane Mathew",
      details: "Lörem ipsum fupor viren. ",
      text: "Lörem ipsum fupor viren. Tiroktigt spesasa. Makrorar. Täde didöhet inte kektigt, demoism. Redot bedäbel. Hypoda. Distansbatong garas: för att peligen. Lörem ipsum fupor viren. Tiroktigt spesasa. Makrorar. Täde didöhet inte kektigt, demoism. ",
    },
    {
      userImg: user1,
      userName: "Jacob Smith",
      details: "Lörem ipsum fupor viren. ",
      text: "Lörem ipsum fupor viren. Tiroktigt spesasa. Makrorar. Täde didöhet inte kektigt, demoism. Redot bedäbel. Hypoda. Distansbatong garas: för att peligen. Lörem ipsum fupor viren. Tiroktigt spesasa. Makrorar. Täde didöhet inte kektigt, demoism. ",
    },
    {
      userImg: user2,
      userName: "Alina Mac",
      details: "Lörem ipsum fupor viren. ",
      text: "Lörem ipsum fupor viren. Tiroktigt spesasa. Makrorar. Täde didöhet inte kektigt, demoism. Redot bedäbel. Hypoda. Distansbatong garas: för att peligen. Lörem ipsum fupor viren. Tiroktigt spesasa. Makrorar. Täde didöhet inte kektigt, demoism. ",
    },
    {
      userImg: user3,
      userName: "Jane Mathew",
      details: "Lörem ipsum fupor viren. ",
      text: "Lörem ipsum fupor viren. Tiroktigt spesasa. Makrorar. Täde didöhet inte kektigt, demoism. Redot bedäbel. Hypoda. Distansbatong garas: för att peligen. Lörem ipsum fupor viren. Tiroktigt spesasa. Makrorar. Täde didöhet inte kektigt, demoism. ",
    },
  ];
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow isActive={!currentSlide} />,
    nextArrow: (
      <CustomNextArrow isActive={currentSlide === testimonials.length - 1} />
    ),
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1991,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1.8,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1.2,
        },
      },

      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.titleAndTagline}>
          <Title>What People are Saying about Us?</Title>
          <Text>
            Lörem ipsum fupor viren. Tiroktigt spesasa. Makrorar.{" "}
            <br className={styles.br} /> Täde `didöhet inte kektigt, demoism.
            Redot bedäbel. Lörem ipsum fupor viren.{" "}
          </Text>
        </div>
      </div>
      <div className={styles.testimonials}>
        <Slider {...settings}>
          {testimonials.map((el, i) => (
            <div className={styles.testimonialWrapper} key={i}>
              <div className={styles.testimonial}>
                <Text>{el.text}</Text>
                <div className={styles.userContainer}>
                  <img src={el.userImg} alt="#" className={styles.userImg} />
                  <div className={styles.nameAndDetails}>
                    <p className={styles.userName}>{el.userName}</p>
                    <p className={styles.details}>{el.details}</p>
                  </div>
                  <RiDoubleQuotesR className={styles.quote} />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
const CustomPrevArrow = ({ isActive, onClick }) => {
  // Custom previous arrow component
  return (
    <button
      className={`${styles.previousButton} ${
        isActive ? styles.activeButton : ""
      }`}
      onClick={onClick}
    >
      <FaArrowRight className={styles.arrow} />{" "}
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
      <FaArrowLeft className={styles.arrow} />
    </button>
  );
};
