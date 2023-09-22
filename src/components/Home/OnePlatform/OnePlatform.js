import React from "react";

import { Heading, Title, Tagline } from "../CommonStyle/CommontStyles";
import { onePlatformBg, onePltformImg } from "../../../images/imags";
import styles from "./OnePlatform.module.css";

const OnePlatform = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.onePlatform}>
        <img src={onePltformImg} alt="#" className={styles.onePlatformImg} />
        <div className={styles.textContainer}>
          <Heading mobileCenter>One Platform</Heading>
          <Title mobileCenter>Innovate. Trade. Prosper.</Title>
          <Tagline mobileCenter>
            Lörem ipsum fupor viren. Tiroktigt spesasa. Makrorar. Täde didöhet
            inte kektigt, demoism. Redot bedäbel. Lörem ipsum fupor viren.
            Tiroktigt spesasa. Makrorar. Täde didöhet inte kektigt, demoism.
            Redot bedäbel.
          </Tagline>
          <button className={styles.getStartedButton}>Get Started</button>
        </div>
      </div>{" "}
      <img src={onePlatformBg} alt="#" className={styles.bgImg} />
    </section>
  );
};

export default OnePlatform;
