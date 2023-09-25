import React, { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { CgExpand } from "react-icons/cg";
import { CandleStickChart } from "./Chart/Chart";
import styles from "./TradeChart.module.css";

const TradeChart = () => {
  const [activeTab, setActiveTab] = useState("1s");
  const tabs = ["1s", "15m", "1h", "4h", "1d", "6m", "1y", "5y"];
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
    <div className={styles.chartWrapper}>
      <div className={styles.header}>
        <div className={styles.tabsContainer}>
          <p className={styles.heading}>Chart</p>
          {tabs.map((el, i) => (
            <button
              key={i}
              className={[
                styles.tab,
                activeTab.toLowerCase() === el.toLowerCase() &&
                  styles.activeTab,
              ].join(" ")}
              onClick={() => setActiveTab(el)}
            >
              {el}
            </button>
          ))}{" "}
          <div className={styles.iconContainer}>
            <AiOutlineSetting className={styles.setting} />
            <CgExpand className={styles.expand} />
          </div>
        </div>
      </div>
      <div>
        <CandleStickChart initialData={data} />
      </div>
    </div>
  );
};

export default TradeChart;
