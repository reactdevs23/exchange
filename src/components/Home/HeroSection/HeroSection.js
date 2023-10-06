import React from "react";
import { GiRoundStar } from "react-icons/gi";
import { heroImage, user1, user2, user3, user4 } from "../../../images/images";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const userImages = [user1, user2, user3, user4];
  return (
    <section className={styles.heroSection}>
      <div className={[styles.wrapper, "mainWrapper"].join(" ")}>
        <div className={styles.content}>
          <h3 className={styles.title}>
            Unleash the <br />
            <span> Future of Crypto</span>
          </h3>
          <p className={styles.tagline}>
            Lörem ipsum fupor viren. Tiroktigt spesasa. Makrorar. Täde didöhet
            inte kektigt, demoism. Redot bedäbel. Hypoda. Distansbatong garas:
            för att peligen.
          </p>

          <div className={styles.buttonAndCustomers}>
            <button className={styles.getStartedButton}>Get Started</button>
            <div className={styles.userImages}>
              {userImages.map((el, i) => (
                <img src={el} alt="#" className={styles.userImage} key={i} />
              ))}
            </div>
            <div className={styles.happyCustomers}>
              <p className={styles.customerBox}>
                <GiRoundStar className={styles.star} />
                <span className={styles.customerNumber}>500+</span>
              </p>
              <p className={styles.happyCustomerText}>Happy Customers</p>
            </div>
          </div>
        </div>

        <img src={heroImage} alt="#" className={styles.heroImage} />
      </div>
    </section>
  );
};

export default HeroSection;
