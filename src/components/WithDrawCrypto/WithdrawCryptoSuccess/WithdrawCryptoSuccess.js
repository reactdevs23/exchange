import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "./WithdrawCryptoSuccess.module.css";
import { check, copyIcon } from "../../../images/images";

const WithdrawCryptoSuccess = () => {
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
          <p className={styles.text}>Destination ID</p>
          <div className={styles.copyContainer}>
            <CopyToClipboard text=" 0x6eF9...7ED10">
              <p
                className={[
                  styles.text,
                  copyDesignationId && styles.copied,
                ].join(" ")}
              >
                0x6eF9...7ED10
              </p>
            </CopyToClipboard>
            <img
              src={copyIcon}
              alt="#"
              className={styles.copyIcon}
              onClick={() => {
                setCopyDesignationId(true);
                setTimeout(() => setCopyDesignationId(false), 300);
              }}
            />
          </div>
        </div>{" "}
        <div className={styles.spaceBetween}>
          {" "}
          <p className={styles.text}>TxID</p>
          <div className={styles.copyContainer}>
            <CopyToClipboard text=" 0x6eF9...7ED10">
              <p className={[styles.text, copyTxId && styles.copied].join(" ")}>
                0x6eF9...7ED10
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
          {" "}
          <p className={styles.text}>Currrency</p>
          <p className={styles.text}>1 USDT</p>
        </div>{" "}
        <p className={styles.done}>Done</p>
      </div>
    </div>
  );
};

export default WithdrawCryptoSuccess;
