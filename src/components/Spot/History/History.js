import React, { useState } from "react";
import classes from "./History.module.css";
import Table from "./Table/Table";
import { openOrders } from "./data";

const History = () => {
  const [activeTab, setActiveTab] = useState("openorders");
  return (
    <section className="">
      <div className={classes.tabs}>
        <p
          className={[
            classes.tab,
            activeTab.toLowerCase() === "openorders" && classes.activeTab,
          ].join(" ")}
          onClick={() => setActiveTab("openorders")}
        >
          Open Orders({openOrders.length})
        </p>{" "}
        <p
          className={[
            classes.tab,
            activeTab.toLowerCase() === "orderhistory" && classes.activeTab,
          ].join(" ")}
          onClick={() => setActiveTab("orderhistory")}
        >
          Order History
        </p>{" "}
        <p
          className={[
            classes.tab,
            activeTab.toLowerCase() === "tradehistory" && classes.activeTab,
          ].join(" ")}
          onClick={() => setActiveTab("tradehistory")}
        >
          Trade History
        </p>{" "}
        <p
          className={[
            classes.tab,
            activeTab.toLowerCase() === "funds" && classes.activeTab,
          ].join(" ")}
          onClick={() => setActiveTab("funds")}
        >
          Funds
        </p>
      </div>
      <Table tableData={openOrders} />
    </section>
  );
};

export default History;
