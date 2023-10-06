import React from "react";
import styles from "./StartYourCryptoJourney.module.css";
import {
  startCryptoBlackCoin,
  startCryptoGoldCoin,
  startCryptoImage,
  startCryptoUnion,
} from "../../../images/images";

const StartYourCryptoJourney = () => {
  return (
    <section className={["mainWrapper", styles.mainWrapper].join(" ")}>
      <div className={[styles.wrapper].join(" ")}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Start Your Crypto Journey</h2>
          <p className={styles.text}>
            Lörem ipsum fupor viren. Tiroktigt spesasa. Makrorar. Täde didöhet
            inte kektigt, demoism. Redot bedäbel.
          </p>
          <button className={styles.getStartedButton}>Get Started</button>
        </div>
        <img
          src={startCryptoImage}
          alt="#"
          className={styles.startCryptoImage}
        />
        <img
          src={startCryptoUnion}
          alt="#"
          className={styles.startCryptoUnion}
        />
        <img
          src={startCryptoGoldCoin}
          alt="#"
          className={styles.startCryptoGoldCoin}
        />{" "}
        <img
          src={startCryptoBlackCoin}
          alt="#"
          className={styles.startCryptoBlackCoin}
        />
      </div>
    </section>
  );
};

export default StartYourCryptoJourney;
