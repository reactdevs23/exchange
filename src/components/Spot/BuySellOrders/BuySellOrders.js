import React from "react";
import styles from "./BuySellOrders.module.css";

const BuySellOrders = () => {
  const sellData = [
    {
      price: "61,134.11",
      amount: "0.53515",
      total: "174.8447",
    },
    {
      price: "61,134.11",
      amount: "0.64741",
      total: "10.8447",
    },

    {
      price: "61,134.11",
      amount: "0.53515",
      total: "174.8447",
    },
    {
      price: "61,134.11",
      amount: "0.64741",
      total: "10.8447",
    },
    {
      price: "61,134.11",
      amount: "0.53515",
      total: "174.8447",
    },
    {
      price: "61,134.11",
      amount: "0.64741",
      total: "10.8447",
    },
    {
      price: "61,134.11",
      amount: "0.53515",
      total: "174.8447",
    },
    {
      price: "61,134.11",
      amount: "0.64741",
      total: "10.8447",
    },
    {
      price: "61,134.11",
      amount: "0.53515",
      total: "174.8447",
    },
    {
      price: "61,134.11",
      amount: "0.64741",
      total: "10.8447",
    },
    {
      price: "61,134.11",
      amount: "0.53515",
      total: "174.8447",
    },
    {
      price: "61,134.11",
      amount: "0.64741",
      total: "10.8447",
    },
  ];
  const buyData = [
    {
      price: "61,134.11",
      amount: "0.53515",
      total: "174.8447",
    },
    {
      price: "61,134.11",
      amount: "0.64741",
      total: "10.8447",
    },

    {
      price: "61,134.11",
      amount: "0.53515",
      total: "174.8447",
    },
    {
      price: "61,134.11",
      amount: "0.64741",
      total: "10.8447",
    },
    {
      price: "61,134.11",
      amount: "0.53515",
      total: "174.8447",
    },
    {
      price: "61,134.11",
      amount: "0.64741",
      total: "10.8447",
    },
    {
      price: "61,134.11",
      amount: "0.53515",
      total: "174.8447",
    },
    {
      price: "61,134.11",
      amount: "0.64741",
      total: "10.8447",
    },
    {
      price: "61,134.11",
      amount: "0.53515",
      total: "174.8447",
    },
    {
      price: "61,134.11",
      amount: "0.64741",
      total: "10.8447",
    },
    {
      price: "61,134.11",
      amount: "0.53515",
      total: "174.8447",
    },
    {
      price: "61,134.11",
      amount: "0.64741",
      total: "10.8447",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p className={[styles.heading, styles.text].join(" ")}>Price(USDT)</p>
        <p className={[styles.heading, styles.text].join(" ")}>Amount</p>
        <p className={[styles.heading, styles.text].join(" ")}>Total</p>
      </div>
      <div className={styles.sellData}>
        {sellData.map((el, i) => (
          <div key={i} className={styles.valueWrapper}>
            <p className={[styles.text, styles.green].join(" ")}>{el.price}</p>
            <p className={styles.text}>{el.amount}</p>
            <p className={styles.text}>{el.total}</p>
          </div>
        ))}
      </div>
      <div className={styles.buyData}>
        {buyData.map((el, i) => (
          <div key={i} className={styles.valueWrapper}>
            <p className={[styles.text, styles.red].join(" ")}>{el.price}</p>
            <p className={styles.text}>{el.amount}</p>
            <p className={styles.text}>{el.total}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuySellOrders;
