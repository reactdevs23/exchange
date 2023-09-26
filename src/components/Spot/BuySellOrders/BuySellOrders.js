import React from "react";
import styles from "./BuySellOrders.module.css";

const BuySellOrders = () => {
  const sellData = [
    {
      price: 61134.11,
      amount: 0.53515,
      total: 174.8447,
    },
    {
      price: 61134.11,
      amount: 0.64741,
      total: 10.8447,
    },

    {
      price: 61134.11,
      amount: 0.53515,
      total: 174.8447,
    },
    {
      price: 61134.11,
      amount: 0.64741,
      total: 10.8447,
    },
    {
      price: 61134.11,
      amount: 0.53515,
      total: 174.8447,
    },
    {
      price: 61134.11,
      amount: 0.64741,
      total: 10.8447,
    },
    {
      price: 61134.11,
      amount: 0.53515,
      total: 174.8447,
    },
    {
      price: 61134.11,
      amount: 0.64741,
      total: 10.8447,
    },
  ];
  const buyData = [
    {
      price: 61134.11,
      amount: 0.53515,
      total: 174.8447,
    },
    {
      price: 61134.11,
      amount: 0.64741,
      total: 10.8447,
    },

    {
      price: 61134.11,
      amount: 0.53515,
      total: 174.8447,
    },
    {
      price: 61134.11,
      amount: 0.64741,
      total: 10.8447,
    },
    {
      price: 61134.11,
      amount: 0.53515,
      total: 174.8447,
    },
    {
      price: 61134.11,
      amount: 0.64741,
      total: 10.8447,
    },
    {
      price: 61134.11,
      amount: 0.53515,
      total: 174.8447,
    },
    {
      price: 61134.11,
      amount: 0.64741,
      total: 10.8447,
    },
    {
      price: 61134.11,
      amount: 0.53515,
      total: 174.8447,
    },
    {
      price: 61134.11,
      amount: 0.64741,
      total: 10.8447,
    },
    {
      price: 61134.11,
      amount: 0.53515,
      total: 174.8447,
    },
    {
      price: 61134.11,
      amount: 0.64741,
      total: 10.8447,
    },
    {
      price: 61134.11,
      amount: 0.53515,
      total: 174.8447,
    },
    {
      price: 61134.11,
      amount: 0.64741,
      total: 10.8447,
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p className={[styles.heading, styles.text].join(" ")}>Price(USDT)</p>
        <p
          className={[styles.heading, styles.text, styles.textRight].join(" ")}
        >
          Amount
        </p>
        <p
          className={[styles.heading, styles.text, styles.textRight].join(" ")}
        >
          Total
        </p>
      </div>
      <div className={styles.data}>
        <div className={styles.sellData}>
          {sellData.map((el, i) => (
            <div key={i} className={styles.valueWrapper}>
              <p className={[styles.text, styles.green].join(" ")}>
                {el.price.toLocaleString()}
              </p>
              <p className={[styles.text, styles.textRight].join(" ")}>
                {el.amount.toLocaleString()}
              </p>
              <p className={[styles.text, styles.textRight].join(" ")}>
                {el.total.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
        <div className={styles.buyData}>
          {buyData.map((el, i) => (
            <div key={i} className={styles.valueWrapper}>
              <p className={[styles.text, styles.red].join(" ")}>{el.price}</p>
              <p className={[styles.text, styles.textRight].join(" ")}>
                {el.amount}
              </p>
              <p className={[styles.text, styles.textRight].join(" ")}>
                {el.total}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuySellOrders;
