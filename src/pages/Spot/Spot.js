import React from "react";

import styles from "./Spot.module.css";
import Toolbar from "../../components/Spot/Toolbar/Toolbar";
import BuySellOrders from "../../components/Spot/BuySellOrders/BuySellOrders";
import Pairs from "../../components/Spot/Pairs/Pairs";
import History from "../../components/Spot/History/History";
import MarketInfo from "../../components/Spot/MarketInfo/MarketInfo";
import TradeChart from "../../components/Spot/TradeChart/TradeChart";

const Spot = () => {
  return (
    <div className={styles.mainWrapper}>
      {" "}
      <Toolbar />
      <div className={styles.grid}>
        {" "}
        <BuySellOrders /> <TradeChart />
        <Pairs />
      </div>
      <MarketInfo />
      <History />
    </div>
  );
};

export default Spot;
