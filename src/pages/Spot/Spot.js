import React from "react";
import { PriceChart } from "../../components/Spot/Chart/Chart";
import styles from "./Spot.module.css";
import Toolbar from "../../components/Spot/Toolbar/Toolbar";
import BuySellOrders from "../../components/Spot/BuySellOrders/BuySellOrders";
import Pairs from "../../components/Spot/Pairs/Pairs";
import History from "../../components/Spot/History/History";
import MarketInfo from "../../components/Spot/MarketInfo/MarketInfo";

const Spot = () => {
  const data = [
    {
      date: new Date("2023-09-01T09:30:00Z"),
      open: 61120.0,
      high: 61125.0,
      low: 61115.0,
      close: 61122.5,
      volume: 1000,
    },
    // Add more initial data points here
  ];
  return (
    <div className={styles.mainWrapper}>
      <Toolbar />
      <div className={styles.gridBox}>
        <div className={styles.buySellOrders}>
          {" "}
          <BuySellOrders />
        </div>
        <div className={styles.chartWrapper}>
          <PriceChart initialData={data} />
        </div>
        <div className={styles.pairs}>
          <Pairs />
        </div>
      </div>
      <MarketInfo />
      <History />
    </div>
  );
};

export default Spot;
