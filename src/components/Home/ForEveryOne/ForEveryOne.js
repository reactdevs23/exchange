import React from "react";

import { Heading, Title, Tagline } from "../CommonStyle/CommontStyles";
import {
  forEveryOneImg,
  forEveryoneBgUnion,
  forEveryoneCoinImg,
} from "../../../images/imags";
import styles from "./ForEveryOne.module.css";

const ForEveryOne = () => {
  return (
    <section className={styles.wrapper}>
      <div className={[styles.forEveryOne, "mainWrapper"].join(" ")}>
        <div className={styles.textContainer}>
          <Heading mobileCenter>For Everyone</Heading>
          <Title mobileCenter>Secure, Simple, and Smart</Title>
          <Tagline mobileCenter>
            Lörem ipsum fupor viren. Tiroktigt spesasa. Makrorar. Täde didöhet
            inte kektigt, demoism. Redot bedäbel. Lörem ipsum fupor viren.
            Tiroktigt spesasa. Makrorar. Täde didöhet inte kektigt, demoism.
            Redot bedäbel.
          </Tagline>
          <button className={styles.getStartedButton}>Get Started</button>
        </div>
        <img src={forEveryOneImg} alt="#" className={styles.forEveryOneImg} />
      </div>

      <img src={forEveryoneBgUnion} alt="#" className={styles.bgUnionImg} />
      <img src={forEveryoneCoinImg} alt="#" className={styles.bgCoinImg} />
    </section>
  );
};

export default ForEveryOne;
