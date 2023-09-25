import React, { useState } from "react";
import styles from "./Trades.module.css";

const Trades = () => {
  const [activeTab, setActiveTab] = useState("markettrades");
  const data = [
    {
      price: "<span class='red'>55,134.11</span>",
      amount: "0.53515",
      time: "16:42:15",
    },
    {
      price: "61,134.11",
      amount: "0.64741",
      time: "16:42:15",
    },

    {
      price: "<span class='red'>30,134.11</span>",
      amount: "0.53515",
      time: "16:42:15",
    },
    {
      price: "61,134.11",
      amount: "0.64741",
      time: "16:42:15",
    },
    {
      price: "<span class='red'>20,134.11</span>",
      amount: "0.53515",
      time: "16:42:15",
    },
    {
      price: "61,134.11",
      amount: "0.64741",
      time: "16:42:15",
    },

    {
      price: "<span class='red'>28,134.11</span>",
      amount: "0.53515",
      time: "16:42:15",
    },
    {
      price: "61,134.11",
      amount: "0.64741",
      time: "16:42:15",
    },
    {
      price: "61,134.11",
      amount: "0.53515",
      time: "16:42:15",
    },
    {
      price: "<span class='red'>40,134.11</span>",
      amount: "0.64741",
      time: "16:42:15",
    },
    {
      price: "<span class='red'>55,134.11</span>",
      amount: "0.53515",
      time: "16:42:15",
    },
    {
      price: "61,134.11",
      amount: "0.64741",
      time: "16:42:15",
    },

    {
      price: "<span class='red'>30,134.11</span>",
      amount: "0.53515",
      time: "16:42:15",
    },
    {
      price: "61,134.11",
      amount: "0.64741",
      time: "16:42:15",
    },
    {
      price: "<span class='red'>20,134.11</span>",
      amount: "0.53515",
      time: "16:42:15",
    },
    {
      price: "61,134.11",
      amount: "0.64741",
      time: "16:42:15",
    },

    {
      price: "<span class='red'>28,134.11</span>",
      amount: "0.53515",
      time: "16:42:15",
    },
    {
      price: "61,134.11",
      amount: "0.64741",
      time: "16:42:15",
    },
    {
      price: "61,134.11",
      amount: "0.53515",
      time: "16:42:15",
    },
    {
      price: "<span class='red'>40,134.11</span>",
      amount: "0.64741",
      time: "16:42:15",
    },
    {
      price: "<span class='red'>30,134.11</span>",
      amount: "0.53515",
      time: "16:42:15",
    },
    {
      price: "61,134.11",
      amount: "0.64741",
      time: "16:42:15",
    },
    {
      price: "<span class='red'>20,134.11</span>",
      amount: "0.53515",
      time: "16:42:15",
    },
    {
      price: "61,134.11",
      amount: "0.64741",
      time: "16:42:15",
    },

    {
      price: "<span class='red'>28,134.11</span>",
      amount: "0.53515",
      time: "16:42:15",
    },
    {
      price: "61,134.11",
      amount: "0.64741",
      time: "16:42:15",
    },
    {
      price: "61,134.11",
      amount: "0.53515",
      time: "16:42:15",
    },
    {
      price: "<span class='red'>40,134.11</span>",
      amount: "0.64741",
      time: "16:42:15",
    },
    {
      price: "<span class='red'>30,134.11</span>",
      amount: "0.53515",
      time: "16:42:15",
    },
    {
      price: "61,134.11",
      amount: "0.64741",
      time: "16:42:15",
    },
    {
      price: "<span class='red'>20,134.11</span>",
      amount: "0.53515",
      time: "16:42:15",
    },
    {
      price: "61,134.11",
      amount: "0.64741",
      time: "16:42:15",
    },

    {
      price: "<span class='red'>28,134.11</span>",
      amount: "0.53515",
      time: "16:42:15",
    },
    {
      price: "61,134.11",
      amount: "0.64741",
      time: "16:42:15",
    },
    {
      price: "61,134.11",
      amount: "0.53515",
      time: "16:42:15",
    },
    {
      price: "<span class='red'>40,134.11</span>",
      amount: "0.64741",
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
              className={[styles.text, styles.green].join(" ")}
              dangerouslySetInnerHTML={{ __html: el.price }}
            ></p>
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
