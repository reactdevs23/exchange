import React, { useState } from "react";
import { check, copyIcon } from "../../../images/imags";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "./PaymentSuccesFull.module.css";
import { userAvatar } from "../../../images/images";

const PaymentSuccesFull = () => {
  const [copyDesignationId, setCopyDesignationId] = useState(false);
  const [copyTxId, setCopyTxId] = useState(false);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Withdraw Crypto</h2>
      <img src={check} alt="#" className={styles.check} />

      <p className={styles.tagline}>Withdraw Successful</p>

      <div className={styles.infoBox}>
        <div className={styles.spaceBetween}>
          {" "}
          <p className={styles.text}>Pay ID</p>
          <div className={styles.copyContainer}>
            <CopyToClipboard text="252321">
              <p className={[styles.text, copyTxId && styles.copied].join(" ")}>
                252321
              </p>
            </CopyToClipboard>
            <img
              src={copyIcon}
              alt="#"
              className={styles.copyIcon}
              onClick={() => {
                setCopyTxId(true);
                setTimeout(() => setCopyTxId(false), 300);
              }}
            />
          </div>
        </div>{" "}
        <div className={styles.spaceBetween}>
          <p className={styles.text}>Name</p>
          <div className={styles.userContainer}>
            <img src={userAvatar} alt="#" className={styles.userImage} />
            <p className={styles.text}>Alex Smith </p>
          </div>
        </div>
        <div className={styles.spaceBetween}>
          {" "}
          <p className={styles.text}>Currrency</p>
          <p className={styles.text}>1 USDT</p>
        </div>{" "}
        <p className={styles.done}>Done</p>
      </div>
    </div>
  );
};

export default PaymentSuccesFull;
