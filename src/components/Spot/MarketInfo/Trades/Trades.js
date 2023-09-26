import React, { useState } from "react";
import styles from "./Trades.module.css";

const Trades = () => {
  const [activeTab, setActiveTab] = useState("markettrades");
  const priceLimitForChangingColorRedGreen = 60000;
  const data = [
    {
      price: 55134.11,
      amount: 0.53515,
      time: "16:42:15",
    },
    {
      price: 61134.11,
      amount: 0.64741,
      time: "16:42:15",
    },

    {
      price: 30134.11,
      amount: 0.53515,
      time: "16:42:15",
    },
    {
      price: 61134.11,
      amount: "0.64741",
      time: "16:42:15",
    },
    {
      price: 20134.11,
      amount: 0.53515,
      time: "16:42:15",
    },
    {
      price: 55134.11,
      amount: 0.53515,
      time: "16:42:15",
    },
    {
      price: 61134.11,
      amount: 0.64741,
      time: "16:42:15",
    },

    {
      price: 30134.11,
      amount: 0.53515,
      time: "16:42:15",
    },
    {
      price: 61134.11,
      amount: "0.64741",
      time: "16:42:15",
    },
    {
      price: 20134.11,
      amount: 0.53515,
      time: "16:42:15",
    },
    {
      price: 55134.11,
      amount: 0.53515,
      time: "16:42:15",
    },
    {
      price: 61134.11,
      amount: 0.64741,
      time: "16:42:15",
    },

    {
      price: 30134.11,
      amount: 0.53515,
      time: "16:42:15",
    },
    {
      price: 61134.11,
      amount: "0.64741",
      time: "16:42:15",
    },
    {
      price: 20134.11,
      amount: 0.53515,
      time: "16:42:15",
    },
    {
      price: 55134.11,
      amount: 0.53515,
      time: "16:42:15",
    },
    {
      price: 61134.11,
      amount: 0.64741,
      time: "16:42:15",
    },

    {
      price: 30134.11,
      amount: 0.53515,
      time: "16:42:15",
    },
    {
      price: 61134.11,
      amount: "0.64741",
      time: "16:42:15",
    },
    {
      price: 20134.11,
      amount: 0.53515,
      time: "16:42:15",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        <p
          className={[
            styles.tab,
            activeTab.toLowerCase() === "markettrades" && styles.activeTab,
          ].join(" ")}
          onClick={() => setActiveTab("markettrades")}
        >
          Market Trades
        </p>{" "}
        <p
          className={[
            styles.tab,
            activeTab.toLowerCase() === "mytrades" && styles.activeTab,
          ].join(" ")}
          onClick={() => setActiveTab("mytrades")}
        >
          My Trades
        </p>{" "}
      </div>
      <div className={styles.header}>
        <p className={[styles.heading, styles.text].join(" ")}>Price(USDT)</p>
        <p
          className={[styles.heading, styles.text, styles.textRight].join(" ")}
        >
          Amount(BTC)
        </p>
        <p
          className={[styles.heading, styles.text, styles.textRight].join(" ")}
        >
          Total
        </p>
      </div>
      <div className={styles.data}>
        {data.map((el, i) => (
          <div key={i} className={styles.valueWrapper}>
            <p
              className={[
                styles.text,
                priceLimitForChangingColorRedGreen < el.price
                  ? styles.green
                  : styles.red,
              ].join(" ")}
            >
              {el.price.toLocaleString()}
            </p>
            <p className={[styles.text, styles.textRight].join(" ")}>
              {el.amount}
            </p>
            <p className={[styles.text, styles.textRight].join(" ")}>
              {el.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trades;
