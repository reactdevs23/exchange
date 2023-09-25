import React, { useState } from "react";

import Buy from "./BuySell/Buy";
import Sell from "./BuySell/Sell";
import Trades from "./Trades/Trades";
import classes from "./MarketInfo.module.css";

const MarketInfo = () => {
  const [activeButton, setActiveButton] = useState("spot");
  const [activeTab, setActiveTab] = useState("limit");

  return (
    <div className={classes.mainWrapper}>
      <div className={classes.wrapper}>
        <div className={classes.buttonContainer}>
          <button
            className={[
              classes.button,
              activeButton.toLowerCase() === "spot" && classes.activeButton,
            ].join(" ")}
            onClick={() => setActiveButton("spot")}
          >
            Spot
          </button>
          <button
            className={[
              classes.button,
              activeButton.toLowerCase() === "cross5x" && classes.activeButton,
            ].join(" ")}
            onClick={() => setActiveButton("cross5x")}
          >
            Cross 5x
          </button>{" "}
          <button
            className={[
              classes.button,
              activeButton.toLowerCase() === "isolated" && classes.activeButton,
            ].join(" ")}
            onClick={() => setActiveButton("isolated")}
          >
            Isolated
          </button>
          <button
            className={[
              classes.button,
              activeButton.toLowerCase() === "grid" && classes.activeButton,
            ].join(" ")}
            onClick={() => setActiveButton("grid")}
          >
            Grid
          </button>
        </div>
        <div className={classes.tabs}>
          <p
            className={[
              classes.tab,
              activeTab.toLowerCase() === "limit" && classes.activeTab,
            ].join(" ")}
            onClick={() => setActiveTab("limit")}
          >
            Limit
          </p>{" "}
          <p
            className={[
              classes.tab,
              activeTab.toLowerCase() === "market" && classes.activeTab,
            ].join(" ")}
            onClick={() => setActiveTab("market")}
          >
            Market
          </p>{" "}
          <p
            className={[
              classes.tab,
              activeTab.toLowerCase() === "stoplimit" && classes.activeTab,
            ].join(" ")}
            onClick={() => setActiveTab("stoplimit")}
          >
            Stop-limit
          </p>{" "}
        </div>
        <div className={classes.buySell}>
          <Buy />
          <Sell />
        </div>
      </div>
      <Trades />
    </div>
  );
};

export default MarketInfo;
