import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "./ConvertSuccesFull.module.css";
import { check, copyIcon } from "../../../images/imags";

const ConvertSuccesFull = () => {
  const [copyDesignationId, setCopyDesignationId] = useState(false);
  const [copyTxId, setCopyTxId] = useState(false);
  return (
    <section className={styles.mainWrapper}>
      {" "}
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Convert Currency/Crypto</h2>
        <img src={check} alt="#" className={styles.check} />

        <p className={styles.tagline}>Convert Successful</p>

        <div className={styles.infoBox}>
          <div className={styles.spaceBetween}>
            {" "}
            <p className={styles.text}>From</p>
            <p className={styles.text}>USDT</p>
          </div>
          <div className={styles.spaceBetween}>
            {" "}
            <p className={styles.text}>Convert To</p>
            <p className={styles.text}>300 Cake</p>
          </div>{" "}
          <p className={styles.done}>Done</p>
        </div>
      </div>
    </section>
  );
};

export default ConvertSuccesFull;
