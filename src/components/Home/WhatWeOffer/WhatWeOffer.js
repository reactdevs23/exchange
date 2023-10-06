import React from "react";
import {
  runTimeData,
  customerSupport,
  highSecurity,
  lowCommission,
  featureCoin,
  featureArrow,
} from "../../../images/images";
import styles from "./WhatWeOffer.module.css";

import { Heading, Title, Tagline } from "../CommonStyle/CommontStyles";

const WhatWeOffer = () => {
  const features = [
    {
      image: runTimeData,
      title: "Real Time Data",
      info: "Lörem ipsum fupor viren. Tiroktigt spesasa. Makrorar. Täde didöhet inte kektigt, demoism. Redot bedäbel. Hypoda. Distansbatong garas: för att peligen.",
    },
    {
      image: customerSupport,
      title: "Customer Support",
      info: "Lörem ipsum fupor viren. Tiroktigt spesasa. Makrorar. Täde didöhet inte kektigt, demoism. Redot bedäbel. Hypoda. Distansbatong garas: för att peligen.",
    },
    {
      image: highSecurity,
      title: "High Security",
      info: "Lörem ipsum fupor viren. Tiroktigt spesasa. Makrorar. Täde didöhet inte kektigt, demoism. Redot bedäbel. Hypoda. Distansbatong garas: för att peligen.",
    },
    {
      image: lowCommission,
      title: "Low Commissions",
      info: "Lörem ipsum fupor viren. Tiroktigt spesasa. Makrorar. Täde didöhet inte kektigt, demoism. Redot bedäbel. Hypoda. Distansbatong garas: för att peligen.",
    },
  ];
  return (
    <div className={styles.whatWeOffer}>
      <img src={featureCoin} alt="#" className={styles.featureCoin} />
      <img src={featureArrow} alt="#" className={styles.featureArrow} />
      <div className={styles.textContainer}>
        <Heading center>What We Offer</Heading>
        <Title center mainTitle>
          Features We Have
        </Title>
        <Tagline center>
          Lörem ipsum fupor viren. Tiroktigt spesasa. Makrorar. Täde didöhet
          inte kektigt, demoism. Redot bedäbel.
        </Tagline>
      </div>
      <div className={styles.featuresWrapper}>
        <div className={styles.features}>
          {features.map((el, i) => (
            <div className={styles.feature} key={i}>
              <div className={styles.imageContainer}>
                {" "}
                <img src={el.image} alt="#" className={styles.featureImage} />
              </div>
              <h4 className={styles.featureTitle}>{el.title}</h4>
              <p className={styles.info}>{el.info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
