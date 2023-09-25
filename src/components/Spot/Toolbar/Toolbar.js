import React, { useState } from "react";
import { CgPlayButtonO } from "react-icons/cg";
import styles from "./Toolbar.module.css";
import { btc } from "../../../images/images";
import CurrencyContainer from "./CurrencyContainer/CurrencyContainer";

const Toolbar = () => {
  const [dropDown, setDropdown] = useState(false);

  const dropdownItems = [
    { icon: btc, currency: "BTC/USDT", fullName: "Bitcoin" },
    { icon: btc, currency: "TC/USDT", fullName: "Bitcoin" },
    { icon: btc, currency: "BTC/USDT", fullName: "Bitcoin" },
    { icon: btc, currency: "BTC/USDT", fullName: "Bitcoin" },
  ];

  return (
    <div className={styles.wrapper}>
      <CurrencyContainer dropdownItems={dropdownItems} />
      <div className={styles.item}>
        <p className={[styles.text, styles.green].join(" ")}>61,134.11</p>
        <p className={styles.text}>61,134.11</p>
      </div>
      <div className={styles.item}>
        <p className={styles.text}>24h Change</p>
        <p className={[styles.text, styles.green].join(" ")}>+2%</p>
      </div>
      <div className={styles.item}>
        <p className={styles.text}>24h High</p>
        <p className={[styles.text, styles.highlighted].join(" ")}>62,155.66</p>
      </div>{" "}
      <div className={styles.item}>
        <p className={styles.text}>24h Low</p>
        <p className={[styles.text, styles.highlighted].join(" ")}>60,283.11</p>
      </div>{" "}
      <div className={styles.item}>
        <p className={styles.text}>24h Volume(BTC)</p>
        <p className={[styles.text, styles.highlighted].join(" ")}>
          16,9654.25
        </p>
      </div>{" "}
      <div className={styles.item}>
        <p className={styles.text}>25h Volume(USDT) </p>
        <p className={[styles.text, styles.highlighted].join(" ")}>
          521,514,343.51
        </p>
      </div>
      <div className={styles.playContainer}>
        <CgPlayButtonO className={styles.playIcon} />
        <p className={styles.text}>Video Tutorials</p>
      </div>
    </div>
  );
};

export default Toolbar;
